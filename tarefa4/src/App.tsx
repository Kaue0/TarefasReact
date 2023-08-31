import { useState } from 'react';
import './css/App.css';
import {ToDoListContext} from './contexts/ToDoListContext';
import { Task } from './interface/Task';
import ToDoInput from './components/ToDoInput/ToDoInput';
import ToDoList from './components/ToDoList/ToDoList';
import { checkTask, delTask, makeNewTask } from './Functions/ListFunctions';

function App() {

  const [tasks, setTasks] = useState<Task[]>([])


  const newTaskFrame = (content: string) => {
    setTasks(makeNewTask(tasks, content))
  }

  const delTaskFrame = (id: number) => {
    setTasks(delTask(tasks, id))
  }

  const checkTaskFrame = (id: number) => {
    setTasks(checkTask(tasks, id))
  }

  return (
    <div className="App">
      <ToDoListContext.Provider value={{ NewTaskFrame: newTaskFrame, DelTaskFrame: delTaskFrame, CheckTaskFrame: checkTaskFrame, tasks, setTasks: setTasks }}>
        <main>
          <h1>Lista de Tarefas: </h1>
          <ToDoInput /> 
          <ToDoList />
        </main>
      </ToDoListContext.Provider>
    </div>
  );
}

export default App;
