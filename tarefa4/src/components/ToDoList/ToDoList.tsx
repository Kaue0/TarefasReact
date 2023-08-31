import { useContext } from "react";
import { ToDoListContext } from "../../contexts/ToDoListContext";
import { Task } from "../../interface/Task";
import "../../css/App.css"

export default function TodoList() {
    const { tasks, CheckTaskFrame, DelTaskFrame } = useContext(ToDoListContext);

  
    return (
        <div className="todolist">
            {tasks.length === 0 
            ? (
                <>
                <p>Você não possui nenhuma tarefa.</p>
                <p>Adicione alguma no campo acima ☝️</p>
                </>
            ) 
            : (
            <ul>
                {tasks.map((task: Task) => (
                <li key={task.id} className={task.achieved ? "achieved-item" : undefined}>
                    <input
                    type="checkbox"
                    checked={task.achieved}
                    onChange={() => {
                        CheckTaskFrame(task.id)
                        task.achieved = !task.achieved
                    }}/>
                    <p className="task-text"> 📝 Tarefa {task.id}: {task.content}</p>
                    <button onClick={() => DelTaskFrame(task.id)}>Deletar</button>
                </li>
                ))}
            </ul>
            )}
        </div>
    );
};