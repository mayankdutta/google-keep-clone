import React from "react";

Card = (props) => {
  const cardCSS =
    "p-4 bg-gray-100 shadow-2xl grid grid-rows-3 rounded-3xl gap-y-4";
  return (
    <div className={cardCSS}>
      {props.title}
      {props.des}
      {props.button}
    </div>
  );
};

export default Card;
