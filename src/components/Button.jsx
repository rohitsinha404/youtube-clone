import React from "react";

const Button = ({ btnConent }) => {
  return (
    <div>
      <div className="px-5 py-2 m-2 bg-[#3e3e3e] rounded-lg hover:shadow-xl hover:bg-gray-500 cursor-pointer ">
        {btnConent}
      </div>
    </div>
  );
};

export default Button;
