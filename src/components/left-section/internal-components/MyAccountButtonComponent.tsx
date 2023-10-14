import { useState } from "react";
import UserImage from '../../../assets/images/me.jpg';
import AccountOptions from "./AccountOptionsComponent";
import ThreeDotsIcon from "../../../assets/icons/ThreeDotsIcon";
const MyAccountButton = () => {
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);


    const handleAccountButtonClick = () => {
        setIsAccountDropdownOpen(!isAccountDropdownOpen);
    };

    return (
        <>
        {isAccountDropdownOpen && (
            <div className=" bottom-full z-20 mb-1 w-full  rounded-md bg-gray-700 pb-1.5 pt-1 outline-none dark:bg-gray-950 opacity-100 translate-y-0">
            <AccountOptions/>
            </div>
          )}
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-sm transition-colors duration-200 hover:bg-gray-800 group-ui-open:bg-gray-100 dark:hover:bg-gray-800 dark:group-ui-open:bg-gray-800"
            type="button"
            onClick={handleAccountButtonClick}
        >
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center rounded">
                    <div className="relative flex">
                        <img
                            src={UserImage}
                            alt="User"
                            width="32"
                            height="32"
                            className="rounded-sm">
                        </img>
                    </div>
                </div>
            </div>
            <div className="grow overflow-hidden text-ellipsis whitespace-nowrap text-left text-gray-700 dark:text-white">
                <div className="font-semibold text-white">Mahmoud Qasem</div>
                <div className="text-xs text-gray-500"></div>
            </div>
            <ThreeDotsIcon />
        </button>
        </>
    );
}

export default MyAccountButton