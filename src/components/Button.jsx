import React from "react";

const Button = ({ btnConent }) => {
  return (
    <div>
      <div className="px-5 py-2 m-2 bg-gray-200 rounded-lg hover:shadow-xl hover:bg-slate-200 ">
        {btnConent}
      </div>
    </div>
  );
};

export default Button;
