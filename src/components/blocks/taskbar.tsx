import TaskbarActions from "./taskbar-actions";

export default function Taskbar({...props}) {

  return (
    <div className='window-taskbar'>
        <div className='windows-start-btn'>
            <img src="/assets/images/windowsIcon.png" alt=""  />
            <span>start</span>
        </div>
        <div className="window-taskbar-content">
            {props.children}
        </div>
        <TaskbarActions />
     </div>
  )
}
