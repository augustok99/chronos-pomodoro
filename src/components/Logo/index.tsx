import { TimerIcon } from "lucide-react";
import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export function Logo() {
  return (
    <div className={styles.logo}>
<<<<<<< HEAD
      <RouterLink className={styles.logoLink} href="#">
=======
      <RouterLink className={styles.logoLink} href="/">
>>>>>>> ffa3ff5 (aula-81)
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
}
