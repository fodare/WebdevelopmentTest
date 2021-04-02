import React, { useState } from "react";

function App() {
   /**
    *setInterval is used to set the interval at which a function is to be
      performed automatically
    **/

   // setInterval(updateTime, 3000);
   let now = new Date().toLocaleTimeString();
   console.log(now);

   const [time, setTime] = useState(now);

   function updateTime() {
      const newTime = new Date().toLocaleTimeString();
      setTime(newTime);
   }

   return (
      <div className="container">
         <h1>{time}</h1>
         <button onClick={updateTime}>Get Time</button>
      </div>
   );
}

export default App;
