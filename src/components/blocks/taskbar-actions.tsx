import { useEffect, useState } from "react";

export default function TaskbarActions() {
  
  const date = new Date();
  const [currentDate,setCurrentDate] = useState(date.getHours() +" : "+ date.getMinutes());
  
  useEffect(()=>{
     const updateInterval = setInterval(() => {
         const d = new Date(); 
         setCurrentDate(d.getHours() +" : "+ d.getMinutes());
       }, 6000); // Update the time every second
        return () => {
          clearInterval(updateInterval); // Clear the interval when the component is unmounted
        };
  },[currentDate])

  return (
    <div className="window-taskbar-actions">
        <span>EN</span>
        <div>
            <img src="src/assets/images/pcIcon.png" alt=""  />
            <span>{currentDate}</span>
        </div>
    </div>
  )
}
