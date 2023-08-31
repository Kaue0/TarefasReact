import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Task } from "../interface/Task.js";

type ToDoListContextProps = {
    tasks: Task[]
    setTasks: Dispatch<SetStateAction<Task[]>>
    NewTaskFrame: (content: string) => void
    DelTaskFrame: (id: number) => void
    CheckTaskFrame: (id: number) => void
}

export const ToDoListContext = createContext<ToDoListContextProps>({
    tasks: [],
    setTasks: () => {},
    NewTaskFrame: () => {},
    DelTaskFrame: () => {},
    CheckTaskFrame: () => {},
});

