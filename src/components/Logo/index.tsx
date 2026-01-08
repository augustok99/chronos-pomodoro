import { TimerIcon } from 'lucide-react'
import styles from './styles.module.css'


export function Logo() {
<<<<<<< HEAD
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
=======
    return <div className={styles.logo}>
        <a className={styles.logoLink} href="#">
            <TimerIcon />
            <span>Chronos</span>
        </a>
>>>>>>> parent of 524abec (aula-79)
    </div>
}