import React from "react";
import { useState } from "react";

function Body() {
  const cardCSS =
    "p-4 bg-gray-500 shadow-2xl grid grid-rows-3 rounded-3xl gap-y-4";
  const buttonCSS =
    "w-10 h-10 p-1 text-white bg-red-500 rounded-full md:text-2xl justify-self-end shadow-2xl";

  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const [arr, setArr] = useState([
    {
      title: "",
      desc: "",
    },
  ]);

  function updateTitle(event) {
    setData(function (prev) {
      return { title: event.target.value, desc: prev.desc };
    });
  }
  function updateDesc(event) {
    setData(function (prev) {
      return { title: prev.title, desc: event.target.value };
    });
  }

  function done() {
    setArr(function () {
      return [...arr, data];
    });
    setData("");
  }

  function del(id) {
    console.log("value of id is : " + id);

    setArr((oldData) => {
      oldData.filter((value, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <div className="my-5 grid justify-items-center grid-rows-1">
        <div className={cardCSS}>
          <input
            onChange={updateTitle}
            type="text"
            value={data.title}
            placeholder="Title"
            className="font-light md:text-4xl "
          />
          <input
            onChange={updateDesc}
            type="text"
            value={data.desc}
            placeholder="Write a note"
            className=""
          />
          <button onClick={done} className={buttonCSS}>
            +
          </button>
        </div>
      </div>

      <div className="mx-4 grid grid-cols-4 gap-x-4 gap-y-4">
        {arr.map((value, index) => {
          console.log("value of value is " + value.title);
          console.log("value of index is " + index);
          return (
            <div key={index} id={index} className={cardCSS}>
              <div className="">{value.title} </div>
              <div className=""> {value.desc}</div>
              <button
                onClick={() => {
                  del(index);
                }}
                className={buttonCSS}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Body;
