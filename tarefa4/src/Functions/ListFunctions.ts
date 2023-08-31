import { Task } from "../interface/Task";

export const makeNewTask: (a: Task[], b: string) => Task[] = (array: Task[], content: string) =>  {

    const newTask: Task = {
        id: 0,
        content,
        achieved: false,
    };

    (array.length === 0) 
    ? newTask.id = 1
    : newTask.id = array[array.length - 1].id + 1

    array = ([...array, newTask])
    return array as Task[]
}

export const delTask = (array: Task[], id: number) => {

    const updatedTasksArray = array.filter((task: Task) => task.id !== id);
    array = updatedTasksArray
    return array;
}

export const checkTask = (array: Task[], id: number) => {

    const updatedTasksArray: Task[] = array.map((task: Task) => {
        if (task.id === id) {
            return {
                ...task,
                achieved: !task.achieved
            };
        }
        return task;
    });

    array = updatedTasksArray
    return array;

}