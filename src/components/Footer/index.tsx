<<<<<<< HEAD
<<<<<<< HEAD
import { RouterLink } from "../RouterLink";
=======
>>>>>>> ffa3ff5 (aula-81)
=======
import { Link } from "react-router";
>>>>>>> parent of 524abec (aula-79)
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
<<<<<<< HEAD
      <RouterLink href="/about-pomodoro/">
<<<<<<< HEAD
=======
      <Link to="/about-pomodoro/">
>>>>>>> parent of 524abec (aula-79)
        Entenda como funciona a tecnica pomodoro
      </Link>
      <Link to="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️
<<<<<<< HEAD
=======
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
>>>>>>> ffa3ff5 (aula-81)
      </RouterLink>
=======
      </Link>
>>>>>>> parent of 524abec (aula-79)
    </footer>
  );
}
