import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { cartData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
import { Button } from ".";

const Cart = () => {
  const [order, setOrder] = useState(1);
  const { currentColor, setIsClicked } = useStateContext();

  const handleIncrementOrder = () => {
    setOrder(order + 1);
  };

  const handleDecrementOrder = () => {
    if (order <= 1) {
      return;
    } else {
      setOrder(order - 1);
    }
  };

  return (
    <div
      className="bg-half-transparent h-screen fixed inset-0"
      style={{ zIndex: 100 }}
    >
      <div className="float-right bg-white h-screen md:w-400 duration-1000 ease-in-out transition-all dark:text-gray-200 dark:bg-[#484B52] p-8">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg">Shopping Cart</p>
          <button
            type="button"
            onClick={() => setIsClicked(false)}
            style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-secondary-dark-bg"
          >
            <MdOutlineCancel />
          </button>
        </div>

        {cartData.map((item, index) => (
          <div key={index}>
            <div>
              <div className="flex items-center gap-5 border-b-1 border-color dark:border-gray-600 p-4">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="rounded-lg h-80 w-24"
                />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-semibold">
                    {item.category}
                  </p>
                  <div className="flex gap-4 mt-2 items-center">
                    <p className="font-semibold text-lg">{`$${
                      item.price * order
                    }`}</p>
                    <div className="flex items-center border-1 border-r-0 border-color rounded">
                      <p
                        onClick={handleDecrementOrder}
                        className="p-2 border-r-1 dark:border-gray-600 border-color text-red-600 cursor-pointer"
                      >
                        <AiOutlineMinus className="cursor-pointer" />
                      </p>
                      <p className="p-2 border-r-1 dark:border-gray-600 border-color text-green-600">
                        {order}
                      </p>
                      <p
                        onClick={handleIncrementOrder}
                        className="p-2 border-r-1 dark:border-gray-600 border-color text-green-600 cursor-pointer"
                      >
                        <AiOutlinePlus />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="my-3">
          <div className="flex justify-between items-center">
            <p className="text-gray-500 dark:text-gray-200">Sub Total</p>
            <p className="font-semibold">$890</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-500 dark:text-gray-200">Total</p>
            <p className="font-semibold">$890</p>
          </div>
        </div>
        <div className="mt-5">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="10px"
            width="full"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);
