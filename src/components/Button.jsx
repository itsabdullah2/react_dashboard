import React from "react";

const Button = ({ bgColor, color, text, borderRadius, size, icon }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      icon={icon}
    >
      {text}
    </button>
  );
};

export default Button;
