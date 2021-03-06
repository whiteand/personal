import { fromNullable, just, Maybe, none } from "@sweet-monads/maybe";
import { IState } from "./types";

function compileShader(
  gl: WebGLRenderingContext,
  source: string,
  shaderType: number
): Maybe<WebGLShader> {
  const maybeShader = fromNullable(gl.createShader(shaderType));

  return maybeShader.chain((shader) => {
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!success) {
      console.log(
        "error during rendering of",
        shaderType === gl.VERTEX_SHADER ? "vertex" : "fragment",
        "shader"
      );
      console.log(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return none();
    }
    return just(shader);
  });
}

const VERTEX_SHADER = `
  attribute vec4 aPosition;

  void main() {
    gl_Position = aPosition;
  }
`;

const FRAGMENT_SHADER = `
  precision highp float;

  uniform vec2 uMousePos;
  uniform vec2 uResolution;
  uniform float uTime;

  float N = 60.0;

  void main() {
    float d = distance(gl_FragCoord.xy, uMousePos.xy);
    vec2 dir = normalize(uMousePos.xy - gl_FragCoord.xy);
    float force = 1500000.0 * (sin(uTime / 40.0)+1.0);
    vec2 pos = gl_FragCoord.xy + dir * force / d / d;
    float xrem = (pos.x - floor(pos.x / N) * N);
    float yrem = (pos.y - floor(pos.y / N) * N);
    float dx = abs(xrem - 30.0);
    float dy = abs(yrem - 30.0);
    float dr = dx * dx + dy * dy;
    if (dr <= 10.0) {
      gl_FragColor = vec4(0.4, 0.8, 1.0, 1.0);
    } else {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }
  }
`;

function createProgram(gl: WebGLRenderingContext) {
  return compileShader(gl, VERTEX_SHADER, gl.VERTEX_SHADER).chain(
    (vertexShader) =>
      compileShader(gl, FRAGMENT_SHADER, gl.FRAGMENT_SHADER).chain(
        (fragmentShader) =>
          fromNullable(gl.createProgram()).chain((program) => {
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            const success = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (!success) {
              console.log(gl.getProgramInfoLog(program));
              gl.deleteProgram(program);
            }
            return success ? just(program) : none();
          })
      )
  );
}

export async function getDrawFrame(
  canvas: HTMLCanvasElement
): Promise<(state: IState) => void> {
  const maybeGl = fromNullable(canvas.getContext("webgl"));

  const maybeProgram = maybeGl.chain((gl) => createProgram(gl));

  const maybeDrawFrame = maybeProgram.chain((program) =>
    maybeGl.chain((gl) => {
      const positionAttributeLoc = gl.getAttribLocation(program, "aPosition");

      const positionBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      const positions = [-1, 1, 1, 1, -1, -1, 1, 1, 1, -1, -1, -1];
      const pointDimensions = 2;
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(positions),
        gl.STATIC_DRAW
      );
      const mousePosLoc = gl.getUniformLocation(program, "uMousePos");
      const resolutionLoc = gl.getUniformLocation(program, "uResolution");
      const timeLoc = gl.getUniformLocation(program, "uTime");

      return just((state: IState) => {
        gl.viewport(0, 0, state.width, state.height);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);

        gl.useProgram(program);

        gl.enableVertexAttribArray(positionAttributeLoc);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.vertexAttribPointer(
          positionAttributeLoc,
          pointDimensions,
          gl.FLOAT,
          false,
          0,
          0
        );
        gl.uniform2fv(mousePosLoc, [
          Math.floor(state.pointer.x),
          state.height - Math.floor(state.pointer.y),
        ]);
        gl.uniform2fv(resolutionLoc, [state.width, state.height]);
        gl.uniform1f(timeLoc, state.time);
        gl.drawArrays(gl.TRIANGLES, 0, positions.length / pointDimensions);
      });
    })
  );

  return maybeDrawFrame.isJust() ? maybeDrawFrame.value : (): void => {};
}
