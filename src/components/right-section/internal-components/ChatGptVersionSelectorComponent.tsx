import React from "react";
import FlashIcon from "../../../assets/icons/FlashIcon";
import StarsIcon from "../../../assets/icons/StartsIcon";
import LockIcon from "../../../assets/icons/LockIcon";

const ChatGptVersionSelector = () => {
    return (
        <>
            <div className="px-2 w-full flex flex-col py-2 md:py-6 sticky top-0 ">
                <div className="relative flex flex-col items-stretch justify-center gap-2 sm:items-center">
                    <div className="relative flex rounded-xl bg-gray-100 p-1 text-gray-900 dark:bg-gray-900">
                        <ul className="flex w-full list-none gap-1 sm:w-auto">
                            <li className="group/toggle w-full">
                                <button type="button" className="w-full cursor-pointer">
                                    <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-black/10 bg-white text-gray-900 shadow-[0_1px_7px_0px_rgba(0,0,0,0.06)] hover:!opacity-100 dark:border-[#4E4F60] dark:bg-gray-700 dark:text-gray-100">
                                        <span className="max-w-sm:hidden relative">
                                            <FlashIcon />
                                        </span>
                                        <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">GPT-3.5</span>
                                    </div>
                                </button>
                            </li>
                            <li className="group/toggle w-full">
                                <button type="button" className="w-full cursor-pointer">
                                    <div className="group/button relative flex w-full items-center justify-center gap-1 rounded-lg border py-3 outline-none transition-opacity duration-100 sm:w-auto sm:min-w-[148px] md:gap-2 md:py-2.5 border-transparent text-gray-500 hover:text-gray-800 hover:dark:text-gray-100">
                                        <span className="max-[370px]:hidden relative">
                                            <StarsIcon />
                                        </span>
                                        <span className="truncate text-sm font-medium md:pr-1.5 pr-1.5">GPT-4</span>
                                        <LockIcon />
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChatGptVersionSelector