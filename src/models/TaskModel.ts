import { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; //quando o timer chega ao final
  interruptedDate: number | null; //quando o usuario interrompe a tarefa
  type: keyof TaskStateModel["config"];
};