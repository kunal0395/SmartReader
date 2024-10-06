import React, { useState } from "react";

function Chat({ summaryMessage, summary }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleBotClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {isOpen && (
                <div className="bg-white border-4 w-[20%] h-[60dvh] rounded-md p-1 fixed z-30 bottom-[5dvh] right-[3%] flex flex-col items-end">
                        {/* Summary */}
                        {summary && (
                            <div className="w-[100%] h-[85.5%] bg-white border-2 mb-3 flex-row" style={{ overflowY: 'auto' }}>
                                <p className="text-gray-500 text-xs">{summaryMessage}</p>
                                <p className="text-gray-500 text-xs">{summary}</p>
                            </div>
                        )}
                </div>
            )}
            <button
                className="bg-white border-4 border-[color:rgba(255,255,255,0.55)] p-1 rounded-full fixed z-40 bottom-[5dvh] right-[3%]"
                onClick={handleBotClick}
            >
                <img src={"chat.jpg"} alt="robot" className="h-12 " />
            </button>
        </>
    );
}

export default Chat; 


