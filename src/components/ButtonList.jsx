import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex gap-2  pt-5 mx-auto  ">
      <Button btnConent={"All"} />
      <Button btnConent={"Gaming"} />
      <Button btnConent={"Live"} />
      <Button btnConent={"Computer Programming"} />
      <Button btnConent={"Aaayiien ? "} />
      <Button btnConent={"Baigan"} />
      <Button btnConent={"Bhupendra Jogi"} />
     
      
    </div>
  );
};

export default ButtonList;
