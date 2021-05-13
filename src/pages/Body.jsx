import React from "react";
import { useState } from "react";

function Body() {
  const cardCSS =
    "p-4 bg-gray-100 shadow-2xl grid grid-rows-3 rounded-3xl gap-y-4 ";
  const mainCardCSS =
    "p-4 bg-gray-100 shadow-2xl grid grid-rows-3 rounded-3xl gap-y-4 ";
  const buttonCSS =
    "w-16 h-16 p-2 font-bold text-white bg-red-500 rounded-full shadow-2xl outline-none md:text-4xl justify-self-end focus:outline-none ";
  const [data, setData] = useState({
    title: "",
    desc: "",
  });
  const [arr, setArr] = useState([]);
  const [expand, setExpand] = useState(false);
  const [expArr, setExpArr] = useState([]);

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

    setExpArr(() => {
      return [...expArr, false];
    });

    setData({
      title: "",
      desc: "",
    });
  }

  function del(id) {
    let temp = [];
    let tempExp = [];
    arr.forEach((value, index) => {
      if (index !== id) {
        temp.push(value);
        tempExp.push(false);
      }
    });

    setArr(temp);
    setExpArr(tempExp);

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
      <div className="my-5 grid justify-items-center grid-rows-1 ">
        <div
          className={mainCardCSS}
          onMouseEnter={() => {
            setExpand(true);
          }}
          onMouseLeave={() => {
            setExpand(false);
          }}
        >
          {expand ? (
            <input
              onChange={updateTitle}
              type="text"
              value={data.title}
              placeholder="Title"
              className="overflow-auto font-light bg-gray-100 border-b-4 border-transparent outline-none md:text-4xl focus:border-yellow-400"
            />
          ) : null}
          <input
            onChange={updateDesc}
            type="text"
            value={data.desc}
            placeholder="Write a note"
            className="overflow-auto font-medium bg-gray-100 outline-none"
          />
          {expand ? (
            <button onClick={done} className={buttonCSS}>
              +
            </button>
          ) : null}
        </div>
      </div>

      <div className="mx-8 grid grid-cols-4 gap-x-16 gap-y-8">
        {arr.map((value, index) => {
          return (
            <div
              /*
              onMouseEnter={() => {
                expArr[index] = true;
                setExpArr(expArr);
              }}
              onMouseLeave={() => {
                expArr[index] = false;
                setExpArr(expArr);
              }}
               */
              key={index}
              id={index}
              className="relative p-4 bg-yellow-400 shadow-2xl grid grid-rows-3 rounded-3xl gap-y-4"
            >
              <div
                className="absolute w-full h-full bg-gray-800 shadow rounded-3xl top-4 left-4"
                style={{ zIndex: "-1" }}
              ></div>

              <div className="overflow-auto text-4xl font-light font-medium border-b-8 border-gray-800">
                {value.title}
              </div>

              <div className="overflow-auto ">{value.desc}</div>

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
