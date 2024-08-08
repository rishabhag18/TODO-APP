import { useEffect } from "react";
import { useState } from "react";
const DateTime=()=>{
    const [dateTime, setDateTime] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
          const timeNow = new Date();
          const timeDate = {
            Date: timeNow.toLocaleDateString(),
            Time: timeNow.toLocaleTimeString(),
          };
          setDateTime(`${timeDate.Date} - ${timeDate.Time}`);
        }, 1000);
        return () => clearInterval(interval);
      }, []);  
    return (
        <h2 className="date-time">{dateTime}</h2>
    )
}
export default DateTime;