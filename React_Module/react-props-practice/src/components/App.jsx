import React from "react";
import ContactCard from "./Contact";
import contacts from "../contacts";

function App() {
   return (
      <div>
         <h1 className="heading">My Contacts</h1>
         <ContactCard
            name={contacts[0].name}
            img={contacts[0].imgURL}
            tel={contacts[0].phone}
            email={contacts[0].email}
         />
         <ContactCard
            name={contacts[1].name}
            img={contacts[1].imgURL}
            tel={contacts[1].phone}
            email={contacts[1].email}
         />
         <ContactCard
            name={contacts[2].name}
            img={contacts[2].imgURL}
            email={contacts[2].email}
         />
      </div>
   );
}

export default App;
