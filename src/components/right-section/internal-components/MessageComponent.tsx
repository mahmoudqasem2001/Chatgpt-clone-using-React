import React, { useEffect, useState } from 'react';
import UserImage from '../../../assets/images/me.jpg';
import BotImage from '../../../assets/images/ChatGPT_logo.png'
import EditIcon from '../../../assets/icons/EditIcon';
import CopyIcon from '../../../assets/icons/CopyIcon';
import LikeIcon from '../../../assets/icons/LikeIcon';
import DislikeIcon from '../../../assets/icons/DislikeIcon';
interface MessageProps {
    text: string;
    isUser: boolean;
    onEdit: Function;
    

}
const Message = ({ text, isUser, onEdit }: MessageProps) => {
    const [shown, setShown] = useState<boolean>(false);
    const [editedText, setEditedText] = useState<string>(text);

    useEffect(() => {
        setEditedText(text);
    }, [text]);

    const handleEditSave = (editedText: string) => {

        if (onEdit) {
            onEdit(editedText);
            setShown(false);
        }
    };

    const editMessageOptions = isUser ? (
        shown ? (
            <>
                <textarea
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                />
                <button
                    onClick={() => handleEditSave(editedText)}
                    className="bg-green-200 px-3 rounded-md relative mr-2"
                >
                    <div className="flex w-full gap-2 items-center justify-center">
                        Save &amp; Submit
                    </div>
                </button>
                <button
                    onClick={() => setShown(false)}
                    className="relative text-center border-spacing-2 rounded-md border inline-flex text-sm py-2 px-3 pointer-events-auto"
                >
                    <div className="flex w-full gap-2 items-center justify-center">
                        Cancel
                    </div>
                </button>
            </>
        ) : null
    ) : null;

    const messagePhoto = isUser ? UserImage : BotImage
    const messageBackground = !isUser ? 'bg-gray-100' : ''
    const messageOptions = isUser ?
        <button onClick={() => setShown(true)} className=" p-1 rounded-md disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700">
            <EditIcon />
        </button>
        : <div className="text-gray-400 flex self-end lg:self-center justify-center lg:justify-start mt-2 visible lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 gap-2 md:gap-3">
            <button className="flex ml-auto gap-2 items-center rounded-md p-1 text-xs pl-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400 hover:bg-gray-100 hover:text-gray-700">
                <CopyIcon />
            </button>
            <div className="flex gap-1 ">
                <button className="p-1  rounded-md disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700">
                    <LikeIcon />
                </button>
                <button className="p-1 rounded-md disabled:dark:hover:text-gray-400 dark:hover:text-gray-200 dark:text-gray-400 hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700">
                    <DislikeIcon />
                </button>
            </div>
        </div>

    return (
        <>
            <div className={` ${messageBackground} p-4 justify-center text-base md:gap-6 md:py-6 m-auto w-full`}>
                <div className="flex flex-1 gap-4 text-base mx-auto md:gap-6 md:px-5 lg:px-1 xl:px-5 md:max-w-2xl lg:max-w-[38rem] xl:max-w-3xl }">
                    <div className="flex-shrink-0 flex flex-col relative items-end">
                        <div>
                            <div className="relative flex">
                                <img
                                    src={messagePhoto}
                                    alt="User"
                                    width="36"
                                    height="36"
                                    className="rounded-sm" >
                                </img>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)] ">
                        <div className="flex flex-grow flex-col gap-3 max-w-full">
                            <div className="min-h-[20px] flex flex-col items-start gap-3 whitespace-pre-wrap break-words overflow-x-auto">
                                {isUser ? (
                                    <div onClick={() => setShown(true)}>{editedText}</div>
                                ) : (
                                    editedText
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between empty:hidden lg:block">
                            <div className="text-gray-400 flex self-end lg:self-center justify-center mt-2 visible lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 gap-2 md:gap-3">
                                {messageOptions}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-2 flex justify-center w-full">
                {editMessageOptions}
            </div>
        </>
    );
};



export default Message;
