import {
  HistoryIcon,
  HouseIcon,
  SettingsIcon,
  SunIcon,
  MoonIcon,
} from "lucide-react";

import styles from "./styles.module.css";
import { useState, useEffect } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Link } from "react-router";
>>>>>>> ffa3ff5 (aula-81)
import { RouterLink } from "../RouterLink";
=======
import { Link } from "react-router";
>>>>>>> parent of 524abec (aula-79)

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]); // mostra para o react que deve rodar esse efeito colateral sempre que o tema mudar

  return (
    <nav className={styles.menu}>
      <Link
        className={styles.menuLink}
        to="/"
        aria-label="Ir para a página inicial"
        title="Ir para a Home"
      >
        <HouseIcon />
      </Link>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
