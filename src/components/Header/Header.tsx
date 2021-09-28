import EnteringTextAnimation from "src/components/EnteringTextAnimation";
import s from "./Header.module.scss";
import { TEXTS } from "./TEXTS";

export default function Header() {
  return (
    <header className={s.header}>
      <div>
        <span className={s.title}>My name is Andrew Beletskiy</span>
        <br />
        <EnteringTextAnimation texts={TEXTS} />
      </div>
    </header>
  );
}
