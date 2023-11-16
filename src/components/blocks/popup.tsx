import { useState } from "react"

export default function Popup({...props}) {
  

  // FIXME: fix drag 

  const [windowPosition,setWindowPosition] = useState({top:50,left:50})

  const handleOnWindowDrag = (x: number,y:number)=>{
     setWindowPosition({top:y,left:x})
  }
  
  return (
    <div className={props.className}>
        <div onDragEnd={(e)=>handleOnWindowDrag(e.clientX,e.clientY)} className="window" draggable style={{top:windowPosition.top+"px",left:windowPosition.left+"px"}}>
            <div className="title-bar" >
                <div className="title-bar-text">{props.title}</div>
                <div className="title-bar-controls">
                    <button onClick={props.Minimize} aria-label="Minimize"></button>
                    <button onClick={props.Maximize} aria-label="Maximize"></button>
                    <button onClick={props.Close} aria-label="Close" draggable={false}></button>
                </div>
            </div>
            <div className="window-body" >
              {props.children}
            </div>
            <div className="status-bar">
              <p className="status-bar-field">Press F1 for help</p>
              <p className="status-bar-field">Slide 1</p>
              <p className="status-bar-field">CPU Usage: 14%</p>
            </div>
        </div>
    </div>
  )
}
