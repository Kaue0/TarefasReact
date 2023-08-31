import { useContext, useState } from 'react'
import {ToDoListContext} from '../../contexts/ToDoListContext'
import Message from '../Message/Message'
import "../../css/App.css"

export default function ToDoInput() {

  const { NewTaskFrame } = useContext(ToDoListContext)
  const [taskContent, setTaskContent] = useState<string>('')
  const [message, setMessage] = useState('')
  const [messageFlag, setMessageFlag] = useState<boolean>(false)

  const ContentValidation = () => {
    if (taskContent === null || taskContent.length < 1) { 
        callMessage("Sua tarefa não pode ser vazia.")
        return false
    } else  if (taskContent === null || taskContent.length < 5) {
        callMessage("Sua tarefa deve conter pelo menos 5 caracteres.")
        return false
    } else {
        return true
        
    }
  }

  const submitAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!ContentValidation()) {
      return
    } 

    const newContent = taskContent
    NewTaskFrame(newContent)
    setTaskContent('')
    callMessage("Tarefa adicionada")
  }

  const callMessage = (title: string) => {
    setMessage(title)
    
    setMessageFlag(true);
  
    setTimeout(() => {
        setMessageFlag(false);
    }, 3500);
}


    return (
        <>
            {messageFlag && 
                <Message message={message} />}
            <form
            onSubmit={(e) => submitAction(e)}
            >
            <input
                type="text"
                value={taskContent}
                onChange={(e) => setTaskContent(e.target.value)}
                placeholder='Adicione uma nova tarefa...'
            />
            <button type='submit'>
                +
            </button>
            </form>
        </>
    )
}