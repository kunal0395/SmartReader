import React from 'react';
import './tooltip.css'; 


function Options({ onSelectOption }) {
    const handleOptionClick = (option) => {
        onSelectOption(option);
    };

    return (
        <div className="flex gap-4 shadow-2xl shadow-black w-44 ml-[-250px]">
            <div className="tooltip" onClick={() => handleOptionClick('summary')}>
                <img src="summary.png" alt="Summary" className="w-10 cursor-pointer" />
                <span className="tooltiptext">Summary</span>
            </div>
            <div className="tooltip" onClick={() => handleOptionClick('translate')}>
                <img src="translate.jpeg" alt="Translate to Hindi" className="w-10 cursor-pointer" />
                <span className="tooltiptext">Translate to Hindi</span>
            </div>
            <div className="tooltip" onClick={() => handleOptionClick('copy')}>
                <img src="copy.png" alt="Copy Text" className="w-10 cursor-pointer" />
                <span className="tooltiptext">Copy Text</span>
            </div>
            <div className="tooltip" onClick={() => handleOptionClick('web-search')}>
                <img src="websearch.jpg" alt="Web Search" className="w-10 cursor-pointer" />
                <span className="tooltiptext">Web Search
                </span>
            </div>
            <div className="tooltip" onClick={() => handleOptionClick('text-to-speech')}>
                <img src="text-to-speech-icon.jpg" alt="Text To Speech" className="w-10 cursor-pointer" />
                <span className="tooltiptext">Text-To-Speech
                </span>
            </div>
        </div>
    );
}

export default Options;
