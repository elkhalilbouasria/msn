import React from "react"

type Props = {
  name:string,
  img:string,
  onDoubleClick:React.MouseEventHandler
}


export default function WindowAppBtn({name,img,onDoubleClick}:Props) : JSX.Element {
  return (
    <button onDoubleClick={onDoubleClick} className="window-app-btn">
        <div>
          <img className="window-app-btn-icon" src={img} />
          <img className="window-app-btn-shortcut-icon" src="src/assets/images/shortcutIcon.png" />
        </div>
        <span>{name}</span>
    </button>
  )
}
