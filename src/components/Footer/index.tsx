import { Link } from "react-router";
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro/">
        Entenda como funciona a tecnica pomodoro
      </Link>
      <Link to="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️
      </Link>
    </footer>
  );
}
