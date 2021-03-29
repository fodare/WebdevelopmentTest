import React from "react";

function Card(props) {
   return (
      <div>
         <h2 className="head-name">{props.name}</h2>
         <img src={props.img} alt="avatar_img" className="img-title" />
         <p>{props.tel}</p>
         <p>{props.email}</p>
      </div>
   );
}

export default Card;
