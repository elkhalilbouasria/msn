
export default function Popup({...props}) {
  return (
    <div className={props.className}>
        <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">{props.title}</div>
                <div className="title-bar-controls">
                    <button onClick={props.Minimize} aria-label="Minimize"></button>
                    <button onClick={props.Maximize} aria-label="Maximize"></button>
                    <button onClick={props.Close} aria-label="Close"></button>
                </div>
            </div>
            <div className="window-body">
              {props.children}
            </div>
        </div>
    </div>
  )
}
