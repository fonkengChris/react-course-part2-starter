import React, { ReactNode, useReducer } from "react";
import TaskReducer from "./reducers/TaskReducer";
import TasksContext from "./contexts/tasksContext";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
