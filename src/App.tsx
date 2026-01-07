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

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
<<<<<<< HEAD
=======
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-pomodoro/" element={<AboutPomodoro />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
>>>>>>> ffa3ff5 (aula-81)
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}
