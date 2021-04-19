import React, { useState } from "react";

function App() {
   const [fullName, setFullname] = useState({
      fName: "",
      lName: "",
   });

   function handlechange(event) {
      const { value, name } = event.target;

      setFullname((prevValue) => {
         if (name === "fName") {
            return {
               fName: value,
               lName: prevValue.lName,
            };
         } else if (name === "lName") {
            return {
               fName: prevValue.fName,
               lName: value,
            };
         }
      });
   }

   return (
      <div className="container">
         <h1>
            Hello {fullName.fName} {fullName.lName}
         </h1>
         <form>
            <input
               name="fName"
               onChange={handlechange}
               placeholder="First Name"
               value={fullName.fName}
            />
            <input
               name="lName"
               onChange={handlechange}
               placeholder="Last Name"
               value={fullName.lName}
            />
            <button>Submit</button>
         </form>
      </div>
   );
}

export default App;
