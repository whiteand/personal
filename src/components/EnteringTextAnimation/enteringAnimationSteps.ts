import { CursorState } from "./types";

interface IEnteringAnimationStep {
  cursorState: CursorState;
  text: string;
  nextStepTimeout: number;
}

function getCommonPrefix(str1: string, str2: string): string {
  let i = 0;
  const minLength = Math.min(str1.length, str2.length);
  while (str1[i] === str2[i] && i < minLength) i++;
  return str1.slice(0, i);
}

export function* enteringAnimationSteps(
  texts: string[]
): Generator<IEnteringAnimationStep, void, unknown> {
  if (texts.length <= 0) return;
  let currentState = "";
  while (true) {
    for (let i = 0; i < texts.length; i++) {
      const currentWord = texts[i];

      for (let j = currentState.length; j < currentWord.length; j++) {
        currentState = currentWord.slice(0, j);
        yield {
          cursorState: CursorState.Idle,
          text: currentWord.slice(0, j),
          nextStepTimeout: 100,
        };
      }
      yield {
        cursorState: CursorState.Blinking,
        text: currentWord,
        nextStepTimeout: 4000,
      };

      const nextWord = texts[(i + 1) % texts.length];
      const commonPrefix = getCommonPrefix(nextWord, currentWord);

      for (let j = currentWord.length - 1; j >= commonPrefix.length; j--) {
        currentState = currentWord.slice(0, j);
        yield {
          cursorState: CursorState.Idle,
          text: currentState,
          nextStepTimeout: 50,
        };
      }
    }
  }
}
