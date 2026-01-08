<<<<<<< HEAD
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessageContainer } from "./components/MessagesContainer";
<<<<<<< HEAD

import "./styles/theme.css";
import "./styles/global.css";

=======
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";
>>>>>>> ffa3ff5 (aula-81)
import { MainRouter } from "./routers/MainRouter";
=======
import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./pages/Home";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessageContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";
>>>>>>> parent of 524abec (aula-79)

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> parent of 524abec (aula-79)
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-pomodoro/" element={<AboutPomodoro />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
<<<<<<< HEAD
>>>>>>> ffa3ff5 (aula-81)
        <MainRouter />
=======
>>>>>>> parent of 524abec (aula-79)
      </MessageContainer>
    </TaskContextProvider>
  );
}
