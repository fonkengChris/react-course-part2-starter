import { Dispatch } from "react";
import { TaskAction } from "../reducers/TaskReducer";
import { Task } from "../TaskList";
import React from "react";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextType>(
  {} as TasksContextType
);

export default TasksContext;