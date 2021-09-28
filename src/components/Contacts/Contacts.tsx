import s from "./Contacts.module.scss";

export default function Header() {
  return (
    <div className={s.contacts}>
      <a href="mailto:andrewbeletskiy@gmail.com" className={s.email}>
        andrewbeletskiy@gmail.com
      </a>
    </div>
  );
}
