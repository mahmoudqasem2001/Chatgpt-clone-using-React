import ChatIcon from "../../../assets/icons/ChatIcon";


const PreviousChat = ({ title, onClick }: { title: string; onClick: () => void }) => {
    const handleClick = () => {
        onClick();
    };
    return (
        <div
            className="flex p-3 items-center gap-3 relative rounded-md hover:bg-gray-800 dark:hover:bg-[#2A2B32] cursor-pointer break-all bg-gray-900 hover:pr-4 dark:bg-gray-900"
            onClick={handleClick}
        >
            <ChatIcon />
            <div className="flex-1 text-ellipsis max-h-5 overflow-hidden break-all relative">
                {title}
                <div className="absolute inset-y-0 right-0 w-8 z-10 dark:from-gray-900 from-gray-50 group-hover:from-gray-100 dark:group-hover:from-[#2A2B32]"></div>
            </div>
        </div>
    );
};

export default PreviousChat;
