import React, { useState ,useEffect } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Chat from "./Chat_";
import Options from "./Options";
import './Chat.css';

function PdfViewer({ pdfFile }) {
    const defaultPluginInstance = defaultLayoutPlugin();
    const [isOptionsOpen, setIsOptionsOpen] = useState(false);
    const [optionsPosition, setOptionsPosition] = useState({ top: 0, left: 0 });
    const [selectedText, setSelectedText] = useState('');
    const [summary, setSummary] = useState('');
    const [summaryMessage, setSummaryMessage] = useState('');

    useEffect(() => {
        // Check for reload 
        const isReload = window.performance
          ? window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD
          : localStorage.getItem('pdfViewerReload') === 'true';
    
        if (isReload) {
          localStorage.removeItem('pdfViewerReload'); 
          window.location.href = '/'; 
        }
      }, []);

    // Text selection
    const handleTextSelection = (e) => {
        const selection = window.getSelection().toString();
        if (selection !== '') {
            setIsOptionsOpen(true);
            setOptionsPosition({ top: e.clientY, left: e.clientX });
            setSelectedText(selection);
        } else {
            setIsOptionsOpen(false);
        }
    };

    // option selection
    const handleSelectOption = async (option) => {
        setIsOptionsOpen(false);
        try {
            //Summary
            if (option === 'summary') {
                const response = await fetch('https://gpt-summarization.p.rapidapi.com/summarize', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-RapidAPI-Key': '325e1b4d8bmsh0cd5132e4a518a9p10cb9ejsnf6373a66970e',
                        'X-RapidAPI-Host': 'gpt-summarization.p.rapidapi.com'
                    },
                    body: JSON.stringify({
                        text: selectedText,
                        num_sentences: 5 // Adjust the lines
                    })
                });
                const data = await response.json();
                const summary = data.summary;
                setSummary(summary);
                setSummaryMessage('Your summary is:');
            } else if (option === 'translate') { //translate
                const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';
                const options = {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Key': '325e1b4d8bmsh0cd5132e4a518a9p10cb9ejsnf6373a66970e',
                        'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
                    },
                    body: new URLSearchParams({
                        from: 'auto',
                        to: 'hi',
                        text: selectedText
                    })
                };

                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Translation failed');
                }

                const data = await response.json();
                const translation = data.trans;
                setSummary(translation);
                setSummaryMessage('Your translation is:');
            } else if (option === 'copy') {
                // Copy the selected text to the clipboard
                try {
                    if (selectedText) {
                        await navigator.clipboard.writeText(selectedText);
                        alert('Text copied to clipboard!');
                    } else {
                        alert('No text selected!');
                    }
                } catch (error) {
                    console.error('Failed to copy text:', error);
                    alert('Failed to copy text!');
                }
            } else if (option === 'web-search') {
                // web search 
                if (selectedText) {
                    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
                    window.open(searchUrl, '_blank');
                } else {
                    alert('No text selected!');
                }
            } else if (option === 'text-to-speech') {
                // Text-to-Speech
                const url = `https://text-to-speech48.p.rapidapi.com/synthesize?lang=en&text=${encodeURIComponent(selectedText)}&speed=0.5`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '325e1b4d8bmsh0cd5132e4a518a9p10cb9ejsnf6373a66970e',
                        'X-RapidAPI-Host': 'text-to-speech48.p.rapidapi.com'
                    }
                };

                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error('Text-to-Speech request failed');
                }

                const blob = await response.blob();
                const audioUrl = URL.createObjectURL(blob);

                const audio = new Audio(audioUrl);
                audio.play();
            }
        } catch (error) {
            console.error(error);
            setSummary('Error occurred');
        }
    };

    return (
        <div className="pdf-container relative">
        <div className="pdf-viewer flex w-full h-screen overflow-hidden relative" onMouseUp={handleTextSelection}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                {pdfFile && (
                    <Viewer fileUrl={pdfFile} plugins={[defaultPluginInstance]} />
                )}
            </Worker>
            {isOptionsOpen && (
                <div style={{ position: 'absolute', top: optionsPosition.top, left: optionsPosition.left }}>
                    <Options onSelectOption={handleSelectOption} />
                </div>
            )}
            <div className="chat-icon absolute bottom-2 md:bottom-8 lg:bottom-12 right-4 md:right-8 lg:right-12">
                <Chat summaryMessage={summaryMessage} summary={summary} />
            </div>
        </div>
    </div>
);
}

export default PdfViewer;
