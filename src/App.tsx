import "xp.css/dist/XP.css";
import './App.css'
import Taskbar from './components/blocks/taskbar';
import TaskbarBtn from './components/ui/taskbar-btn';
import WindowAppBtn from "./components/ui/window-app-btn";
import { AppsData } from "./lib/data";
import { useState } from "react";

type AppType = {
  name:string,
  img:string
}

function App() {

  const [currentApps,setCurrentApps] = useState(Array<AppType>);
  const [activeApp,setActiveApp] = useState<AppType>({name:"",img:""})
  
  const handleCurrentApps = (app:AppType)=>{
    if(!currentApps.includes(app)){
        setCurrentApps([...currentApps,app])
    }
    setActiveApp(app);
  }

  const handleActiveApp = (app:AppType)=>{
    setActiveApp(app)
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
               return <TaskbarBtn onClick={()=>handleActiveApp(app)} className={activeApp.name === app.name ? "active-app-btn" : "" } name={app.name} img={app.img} key={index} />
             })
           }
        </Taskbar>
      </div>
    </>
  )
}

export default App
