import React, { useState } from "react";

function App() {
   const [count, setcount] = useState(0);

   function increment() {
      // Increse the value of count
      setcount(count + 1);
   }

   function decrement() {
      // Decrease the value of count
      setcount(count - 1);
   }

   return (
      <div className="container">
         <h1>{count}</h1>
         <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
      </div>
   );
}

export default App;
