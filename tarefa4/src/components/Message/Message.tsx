interface Props {
    message: string
}

const Message = ({message}: Props) => {
  return (

    <div className="message">{message}</div>

  )
}
export default Message