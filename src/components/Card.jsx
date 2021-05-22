import React from "react";

function Card(props) {
  let currTemp = "absolute w-full h-full bg-gray-800 shadow rounded-3xl ";
  let temp = "absolute w-full h-full bg-gray-800 shadow rounded-3xl ";
  const buttonCSS =
    "w-16 h-16 p-2 font-bold text-white bg-red-500 rounded-full shadow-2xl outline-none md:text-4xl justify-self-end focus:outline-none ";

  const del = () => {
    props.deleteItem(props.index);
  };
  return (
    <div
      key={props.index}
      id={props.index}
      className="relative p-4 bg-yellow-400 shadow-2xl grid grid-rows-3 rounded-3xl gap-y-4"
    >
      <div
        className={temp}
        onMouseEnter={() => {
          temp = currTemp + " top-8 left-8";
        }}
        onMouseLeave={() => {
          temp = currTemp + " top-4 left-4";
        }}
        style={{ zIndex: "-1" }}
      ></div>

      <div className="overflow-auto text-4xl font-light font-medium border-b-8 border-gray-800">
        {props.value.title}
      </div>

      <div className="overflow-auto ">{props.value.desc}</div>

      <button
        onClick={() => {
          del();
        }}
        className={buttonCSS}
      >
        -
      </button>
    </div>
  );
}

export default Card;
