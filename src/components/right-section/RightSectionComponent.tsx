import React, { useEffect, useRef, useState } from "react";
import ChatGptVersionSelector from "./internal-components/ChatGptVersionSelectorComponent";
import Message from "./internal-components/MessageComponent";
import CyclicArrows from "../../assets/icons/CyclicArrowsIcon";
import Footer from "../footer/FooterComponent";
import ToggleDrawerIcon from "../../assets/icons/ToggleDrawerIcon";

interface MessagesInterface {
  text: string;
  isUser: boolean;
}
const RightSection = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<MessagesInterface[]>(() => {
    const storedMessages = localStorage.getItem("messages");
    if (storedMessages) {
      return JSON.parse(storedMessages);
    }
    else {
      return [];
    }
  });

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);


  const handleMessageSend = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      { text: "This is a virtual response from ChatGPT.", isUser: false }

    ]);

  };

  const handleEditMessage = (editedText: string, index: number) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages];
      updatedMessages[index] = { ...updatedMessages[index], text: editedText };
      return updatedMessages;
    });
  };


  const handleRegenerate = (message: string) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, isUser: true },
      { text: "This is a regenerated virtual response from ChatGPT.", isUser: false }
    ]);
  };


  return (
    <div className=" relative flex h-full flex-col  md:pl-64 mb-32">
      <main className="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1 ">
        <div className="flex-1 overflow-hidden">
          <div className=" flex flex-col items-center text-sm h-full md:h-screen overflow-y-auto bg-lightBlack  mt-12 md:m-0">
            <ChatGptVersionSelector />
            <div className="text-gray-800 w-full justify-between md:max-w-2xl lg:max-w-full md:h-full md:flex md:flex-col ">
              <h1 className="text-4xl text-gray-300 font-semibold text-center mt-6 sm:mt-[10vh] ml-auto mr-auto mb-10 sm:mb-16">
                ChatGPT
              </h1>
              <div className="w-full h-full   flex flex-col gap-3.5 md:max-w-2xl lg:max-w-full md:h-full md:flex md:flex-col ">
                <div className="md:flex items-start text-center gap-3.5 flex-col">
                  {messages.map((message, index) => (
                    <Message
                      key={index}
                      text={message.text}
                      isUser={message.isUser}
                      onEdit={handleEditMessage}


                    />
                  ))}
                  <div ref={messagesEndRef}></div>
                </div>
              </div>
            </div>
            <button onClick={() => handleRegenerate(messages[messages.length - 2].text)} className="absolute hidden md:flex bottom-2 right-1/4 text-sm bg-white px-2 py-3 pointer-events-auto cursor-pointer text-black whitespace-nowrap border-0 md:border ">
              <div className="flex w-full gap-2 items-center justify-center">
                <CyclicArrows />
                Regenerate
              </div>
            </button>
          </div>
        </div>
        <Footer onMessageSend={handleMessageSend} onRegenerateMessage={handleRegenerate} regeneratedMessage={messages.length != 0 ? messages[messages.length - 2].text : ""} />
      </main>
    </div>
  );
};

export default RightSection;