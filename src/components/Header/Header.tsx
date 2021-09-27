import EnteringTextAnimation from "src/components/EnteringTextAnimation";
import s from "./Header.module.scss";
import { TEXTS } from "./TEXTS";

export default function Header() {
  return (
    <header className={s.header}>
      <div>
        Andrew Beletskiy
        <br />
        <EnteringTextAnimation texts={TEXTS} />
      </div>
    </header>
  );
}
