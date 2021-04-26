import React, { useState } from "react";

function ToDoItem(props) {
   function handleClick() {}

   return (
      <div onClick={props.onChecked}>
         <li>{props.text}</li>
      </div>
   );
}

export default ToDoItem;
