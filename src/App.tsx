import "xp.css/dist/XP.css";
import './App.css'
import Taskbar from './components/blocks/taskbar';
import TaskbarBtn from './components/ui/taskbar-btn';
import WindowAppBtn from "./components/ui/window-app-btn";
import { AppsData } from "./lib/data";
import { useState } from "react";
import Popup from "./components/blocks/popup";

type AppType = {
  name:string,
  img:string
}

function App() {

  const [currentApps,setCurrentApps] = useState(Array<AppType>);
  const [activeApp,setActiveApp] = useState<AppType>({name:"",img:""})
  const [isMinimized,setIsMinized] = useState(false)

  const handleCurrentApps = (app:AppType)=>{
    if(!currentApps.includes(app)){
        setCurrentApps([...currentApps,app])
    }
    setIsMinized(false)
    setActiveApp(app);
  }

  const handleActiveApp = (app:AppType)=>{
    if(app == activeApp){
      setIsMinized(!isMinimized)
    }
    if(app != activeApp){
       setIsMinized(false)
    }
    setActiveApp(app)
  }

  const handleCloseAppWindow = ()=>{
     setCurrentApps(currentApps.filter(app => app != activeApp))
     setActiveApp({name:"",img:""})
  }

  const handleMinimizeAppWindow = ()=>{
    setIsMinized(true);
  }

  return (
    <>
      <div className='screen'>
        <div className='window-main'>
          {
            AppsData?.map((app,index)=>{
               return <WindowAppBtn onDoubleClick={()=>handleCurrentApps(app)} name={app.name} img={app.img} key={index} />
            })
          }
        </div>
        <Taskbar>
           {
             currentApps?.map((app,index)=>{
               return <TaskbarBtn onClick={()=>handleActiveApp(app)} className={activeApp.name === app.name && !isMinimized ? "active-app-btn" : "" } name={app.name} img={app.img} key={index} />
             })
           }
        </Taskbar>
        <Popup className={activeApp.name !="" && !isMinimized  ? "window-popup" : "hide-popup"} title={activeApp.name} Close={handleCloseAppWindow} Minimize={handleMinimizeAppWindow}>
           {currentApps?.map((app,index)=>{
               if(activeApp==app){
                return <span key={index}>{app.name}</span>
               }
           })}
        </Popup>
      </div>
    </>
  )
}

export default App
