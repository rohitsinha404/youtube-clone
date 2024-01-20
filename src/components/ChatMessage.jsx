import React from "react";
import { FaUser } from "react-icons/fa";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-2 border-b  p-2 px-3 ">
      <div className="col-span-1">
        <FaUser className="text-2xl  " />
      </div>
      <span className="font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
