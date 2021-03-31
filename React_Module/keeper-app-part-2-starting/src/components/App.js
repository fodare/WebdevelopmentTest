import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
   return (
      <div>
         <Header />
         {notes.map((noteItem) => (
            <Note
               Key={noteItem.Key}
               title={noteItem.title}
               content={noteItem.content}
               author={noteItem.Author}
            />
         ))}
         <Footer />
      </div>
   );
}

export default App;
