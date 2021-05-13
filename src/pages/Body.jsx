import React from "react";
import { useState } from "react";

function Body() {
  const cardCSS =
    "p-4 bg-gray-100 shadow-2xl grid grid-rows-3 rounded-3xl gap-y-4";
  const buttonCSS =
    "w-10 h-10 p-1 text-white bg-red-500 rounded-full md:text-2xl justify-self-end shadow-2xl outline-none focus:outline-none";

  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const [arr, setArr] = useState([]);
  const [expand, setExpand] = useState(false);

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
    setData({
      title: "",
      desc: "",
    });
  }

  function del(id) {
    let temp = [];
    arr.forEach((value, index) => {
      if (index !== id) {
        temp.push(value);
      }
    });

    setArr(temp);
    /*
    setArr(() => {
      arr.filter((value, index) => {
        return index !== id;
      });
    });
    */
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
            className="font-light bg-gray-100 border-b-4 border-transparent outline-none md:text-4xl focus:border-yellow-400"
          />
          <input
            onChange={updateDesc}
            type="text"
            value={data.desc}
            placeholder="Write a note"
            className="font-medium bg-gray-100 outline-none"
          />
          <button onClick={done} className={buttonCSS}>
            +
          </button>
        </div>
      </div>

      <div className="mx-8 grid grid-cols-4 gap-x-16 gap-y-4">
        {arr.map((value, index) => {
          return (
            <div key={index} id={index} className={cardCSS}>
              <div className="text-4xl font-light font-medium">
                {value.title}{" "}
              </div>
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