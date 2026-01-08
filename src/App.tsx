import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessageContainer } from "./components/MessagesContainer";
import { BrowserRouter, Route, Routes } from "react-router";
import { NotFound } from "./pages/NotFound";
import { AboutPomodoro } from "./pages/AboutPomodoro";
import { MainRouter } from "./routers/MainRouter";

export function App() {
  return (
    <TaskContextProvider>
      <MessageContainer>
        <MainRouter />
      </MessageContainer>
    </TaskContextProvider>
  );
}
