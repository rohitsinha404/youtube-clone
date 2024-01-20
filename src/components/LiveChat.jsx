import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateSomeRandomName, genreateRandomComment } from "../helper";
import { IoSend } from "react-icons/io5";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const [userMsg, setUserMsg] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateSomeRandomName(),
          message: genreateRandomComment(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  });

  function commentHandeler(e) {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "You",
        message: userMsg,
      })
    );
    setUserMsg("");
  }

  return (
    <div className="ml-[-2rem]">
      <div className=" rounded-2xl w-full h-[534px] ml-2 p-2  bg-[#222] overflow-y-scroll flex flex-col-reverse no-scrollbar ">
        {chatMessages.map((msg, index) => (
          <ChatMessage key={index} name={msg.name} message={msg.message} />
        ))}
      </div>

      <form onSubmit={commentHandeler} className="w-full pt-2  flex ">
        <input
          type="text"
          placeholder="comment"
          value={userMsg}
          onChange={(event) => setUserMsg(event.target.value)}
          className="w-[90%] ml-2 px-3 py-4 bg-[#222]  rounded-3xl font-semibold focus:bg-[#292929] "
        />
        <button
          className=" hover:bg-slate-200   font-bold  rounded-3xl  w-[10%]  px-3 py-4 items-center text-2xl "
          onClick={commentHandeler}
        >
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
