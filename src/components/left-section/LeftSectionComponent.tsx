import React, { useEffect, useState } from "react";
import ToggleDrawerIcon from "../../assets/icons/ToggleDrawerIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import PreviousChat from "./internal-components/PreviousChatComponent";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import MyAccountButton from "./internal-components/MyAccountButtonComponent";

const LeftSection = ({ show: propShow = false }) => {
  const [show, setShow] = useState(propShow);
  const [currentChat, setCurrentChat] = useState<string | null>(null);



  useEffect(() => {
    setShow(propShow);
  }, [propShow]);

  const handleToggleDrawer = () => {
    setShow(!show);
  };

  const handleNewChatClick = () => {
    if (currentChat) {
      const data = localStorage.getItem('previousChats');
      if (data) {
        const previousChats = JSON.parse(data);
        previousChats.push(currentChat);
        localStorage.setItem('previousChats', JSON.stringify(previousChats));
      }
      // Clear the current chat
      setCurrentChat(null);
    }
  };

  const handlePreviousChatClick = (chatTitle: string) => {
    setCurrentChat(chatTitle);
  };
  const data = localStorage.getItem('previousChats');

  const previousChats: string[] = data ? JSON.parse(data) : [
    "Tell Me about React", 
    "what is the weather today",
    "what kine of problem you can solve"
  ];

  return (
    <div
      className={`${!show && "hidden"} bg-gray-900 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col h-screen w-64 absolute z-50 `}
    >
      <div className="flex h-full min-h-0 flex-col flex-shrink-0">
        <div className=" flex h-full w-full flex-1 items-start border-white/20">
          <nav className="flex h-full flex-1 flex-col space-y-1 p-2">
            <div className="flex flex-row gap-1">
              <a className="flex basis-4/5 py-3 px-3 flex-shrink-0 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 border border-white/20"
                onClick={() => handleNewChatClick()}>
                <PlusIcon />
                New chat
              </a>
              <a className="flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm rounded-md border dark:border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center bg-gray-900 dark:bg-transparent"
                onClick={()=> setShow(pastShow=> !pastShow)}
              >
                <ToggleDrawerIcon />
              </a>
              {/* <a className={`${!show && "hidden"} flex px-3 min-h-[44px] py-1 gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm rounded-md border dark:border-white/20 hover:bg-gray-500/10 h-11 w-11 flex-shrink-0 items-center justify-center bg-gray-200 dark:bg-transparent`}
                onClick={()=> setShow(pastShow=> !pastShow)}
              >
                <ToggleDrawerIcon />
              </a>   */}
            </div>
            <div className="flex-col flex-1 overflow-y-auto border-b border-white/20">
              <div className="flex flex-col gap-2 text-gray-100 text-sm">
                {previousChats.map((previousChat) => (
                  <PreviousChat
                    key={previousChat}
                    title={previousChat}
                    onClick={() => handlePreviousChatClick(previousChat)}
                  />
                ))}
              </div>
            </div>
            <a className="flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm hover:bg-gray-800 dark:hover:bg-gray-800 rounded-md">
              <span className="flex w-full flex-row flex-wrap-reverse justify-between">
                <span className="flex items-center gap-3">
                  <ProfileIcon />
                  <span className="text-white">Upgrade to Plus</span>
                </span>
              </span>
            </a>
            <MyAccountButton />
          </nav>

        </div>
      </div>
    </div>
  );
};

export default LeftSection;
