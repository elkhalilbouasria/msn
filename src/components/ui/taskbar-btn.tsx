
export default function TaskbarBtn({...props}) {
  return (
    <button onClick={props.onClick} className={props.className}>
        <img src={props.img} alt={props.name}  />
        <span>{props.name === "MSN" ? "MSN Messenger" : props.name}</span>
    </button>
  )
}
