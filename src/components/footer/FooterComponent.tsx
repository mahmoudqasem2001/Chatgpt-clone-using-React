import React, { useState } from "react";
import PlaneIcon from "../../assets/icons/PlaneIcon";
import CyclicArrows from "../../assets/icons/CyclicArrowsIcon";

const Footer = ({ onMessageSend, onRegenerateMessage, regeneratedMessage }:
  { onMessageSend: Function, onRegenerateMessage: Function, regeneratedMessage: string }) => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      onMessageSend(message);
      setMessage("");
    }
  };
  const handleRegenerateMessage = () => {
    if (regeneratedMessage.trim() !== "") {
      onRegenerateMessage(regeneratedMessage);
      setMessage("");
    }
  }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (message.trim() !== '') {
        onMessageSend(message);
        setMessage('');
      }
    }
  };
  return (
    <div className="fixed md:pl-64 bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent bg-white">
      <form className="mx-2 flex flex-row gap-3 pt-2 last:mb-2 md:last:mb-6 lg:mx-auto lg:max-w-3xl lg:pt-6"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent the form from refreshing the page
          handleSendMessage();
        }}>
        <div className="relative flex h-full flex-1 md:flex-col">
          {/* Input */}
          <div className="flex flex-col w-full py-2 pl-3 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white rounded-md ">
            <textarea
              tabIndex={0}
              value={message}
              onKeyDown={handleKeyDown}
              onChange={handleMessageChange}
              className=" w-full resize-none  bg-transparent pr-7 dark:bg-transparent outline-none overflow-y-hidden h-6 text-stone-500"
            >Send a message</textarea>
            <button onClick={handleSendMessage} className="absolute p-1 rounded-md text-gray-400 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:text-gray-600">
              <PlaneIcon />
            </button>
          </div>
          <div onClick={handleRegenerateMessage} className="ml-1 mt-1.5 md:w-full md:m-auto md:flex md:mb-2 gap-2 justify-center" >
            <div className="text-gray-600 p-1 md:hidden">
              <CyclicArrows />
            </div>
          </div>
        </div>
      </form>
      <div className="px-3 pt-2 pb-3 text-center text-xs text-gray-600 md:px-4 md:pt-3 md:pb-6">
        Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.
        <a href="#" className="underline">
          ChatGPT September 25 Version
        </a>
      </div>
    </div>
  );
};

export default Footer;