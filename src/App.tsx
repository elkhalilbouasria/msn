import "xp.css/dist/XP.css";
import './App.css'
import Taskbar from './components/blocks/taskbar';
import TaskbarBtn from './components/ui/taskbar-btn';
import WindowAppBtn from "./components/ui/window-app-btn";
import { AppsData } from "./lib/data";
import { useState } from "react";
import Popup from "./components/blocks/popup";
import Msn from "./components/blocks/msn";

type AppType = {
  name:string,
  img:string
}

function App() {

  const [currentApps,setCurrentApps] = useState(Array<AppType>);
  const [activeApp,setActiveApp] = useState<AppType>({name:"",img:""})
  const [openedApps,setOpenedApps] = useState(Array<AppType>);

  const handleCurrentApps = (app:AppType)=>{
    console.log(app)
    if(!currentApps.includes(app)){
        setCurrentApps([...currentApps,app])
    }
    if(!openedApps.includes(app)){
      setOpenedApps([...openedApps,app])
    }
    setActiveApp(app);
  }

  const handleActiveApp = (app:AppType)=>{
     setActiveApp(app)
     if(!openedApps.includes(app)){
      setOpenedApps([...openedApps,app])
     }
     else {
      setOpenedApps(openedApps.filter(a => a !=app))
     }
  }

  const handleCloseAppWindow = (closedApp:AppType)=>{
     setCurrentApps(currentApps.filter(app => app != closedApp))
     setOpenedApps(openedApps.filter(app => app != closedApp))
     setActiveApp({name:"",img:""})
  }

  const handleMinimizeAppWindow = (minimizedApp:AppType)=>{
    setOpenedApps(openedApps.filter(app => app !=minimizedApp))
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
               return <TaskbarBtn onClick={()=>handleActiveApp(app)} className={activeApp.name === app.name && openedApps.includes(app) ? "active-app-btn" : "" } name={app.name} img={app.img} key={index} />
             })
           }
        </Taskbar>
        {
           openedApps?.map((app,index)=>{
               return <Popup Close={()=>handleCloseAppWindow(app)} Minimize={()=>handleMinimizeAppWindow(app)} className={openedApps.includes(app) ? "window-popup" : "hide-popup"} title={app.name} key={index}>
                     {app.name === "MSN" ? <Msn></Msn> : app.name}
               </Popup>
           })
        }
      </div>
    </>
  )
}

export default App
