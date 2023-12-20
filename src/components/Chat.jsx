import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { chatData } from "../data/dummy";
import { Button } from ".";

const Chat = () => {
  const { setIsClicked, currentColor } = useStateContext();

  return (
    <div className="bg-white dark:bg-[#42464D] absolute right-1 sm:right-5 md:right-52 top-16 p-8 rounded-lg w-96 nav-item drop-shadow-xl">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <p className="font-semibold text-lg dark:text-gray-200">Messages</p>
          <button
            type="button"
            className="dark:text-white text-xs rounded p-1 px-2 bg-orange"
          >
            5 New
          </button>
        </div>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-secondary-dark-bg"
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="mt-5">
        {chatData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-5 border-b-1 leading-8 border-color p-3 cursor-pointer"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.desc}
                loading="lazy"
                className="rounded-full w-10 h-10"
              />
              <span style={{ background: item.dotColor }} />
            </div>
            <div>
              <p className="font-semibold dark:text-gray-200">{item.message}</p>
              <p className="dark:text-gray-200 text-gray-500 text-sm">
                {item.desc}
              </p>
              <p className="dark:text-gray-200 text-gray-500 text-xs">
                {item.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          borderRadius="10px"
          width="full"
          text="See all messages"
        />
      </div>
    </div>
  );
};

export default React.memo(Chat);
