import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";
import { userProfileData } from "../data/dummy";
import avatar from "../data/avatar.jpg";

const UserProfile = () => {
  const { setIsClicked } = useStateContext();

  return (
    <div className="absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96 drop-shadow-xl nav-item">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <button
          type="button"
          onClick={() => setIsClicked(false)}
          style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-secondary-dark-bg"
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="flex items-center gap-5 mt-6 border-color border-b-1 pb-6">
        <img
          src={avatar}
          alt="userProfile"
          className="rounded-full h-24 w-24"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200">
            Michael Roberts
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            Administrator
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400 font-semibold">
            info@shop.com
          </p>
        </div>
      </div>

      <div>
        {userProfileData.map((item, index) => (
          <div
            key={index}
            className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer dark:hover:over:bg-[#42464D]"
          >
            <button
              type="button"
              style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              className="text-xl rounded-lg p-3 hover:bg-light-gray"
            >
              {item.icon}
            </button>

            <div>
              <p className="font-semibold dark:text-gray-200">{item.title}</p>
              <p className="text-gray-500 text-sm dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(UserProfile);
