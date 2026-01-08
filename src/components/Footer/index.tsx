<<<<<<< HEAD
import { RouterLink } from "../RouterLink";
=======
>>>>>>> ffa3ff5 (aula-81)
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">
<<<<<<< HEAD
        Entenda como funciona a tecnica pomodoro
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com ❤️
=======
        Entenda como funciona a técnica pomodoro
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💚
>>>>>>> ffa3ff5 (aula-81)
      </RouterLink>
    </footer>
  );
}
