
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { BoltIcon, XIcon, SendIcon, UserIcon } from './icons';
import { COMPANY_NAME } from '../constants';

interface Message {
    sender: 'user' | 'model';
    text: string;
}

const AiAssistant: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const [history, setHistory] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [streamingResponse, setStreamingResponse] = useState('');
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const chatSession = ai.chats.create({
                // FIX: Updated model name to follow API guidelines for gemini flash lite.
                model: 'gemini-flash-lite-latest',
                config: {
                    systemInstruction: `You are an expert visa assistant for a company called ${COMPANY_NAME}. Provide concise and helpful answers to user questions about travel visas. Keep your answers short, friendly, and to the point. Start with a friendly greeting.`,
                },
            });
            setChat(chatSession);
            setHistory([]);
            setStreamingResponse('');
        }
    }, [isOpen]);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [history, streamingResponse]);


    const handleSendMessage = async () => {
        if (!userInput.trim() || !chat || loading) return;

        const text = userInput;
        setUserInput('');
        setLoading(true);

        const updatedHistory: Message[] = [...history, { sender: 'user', text }];
        setHistory(updatedHistory);
        setStreamingResponse('');

        try {
            const result = await chat.sendMessageStream({ message: text });
            let streamedText = '';
            for await (const chunk of result) {
                streamedText += chunk.text;
                setStreamingResponse(streamedText);
            }
            setHistory([...updatedHistory, { sender: 'model', text: streamedText }]);
        } catch (error) {
            console.error('Gemini API error:', error);
            setHistory([...updatedHistory, { sender: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setLoading(false);
            setStreamingResponse('');
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-[101]"
                aria-label={isOpen ? "Close AI Assistant" : "Open AI Assistant"}
            >
                {isOpen ? <XIcon className="w-6 h-6" /> : <BoltIcon className="w-6 h-6" />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[calc(100%-3rem)] sm:w-96 h-[60vh] bg-white rounded-2xl shadow-2xl flex flex-col z-[100] animate-in fade-in slide-in-from-bottom-4 duration-200">
                    <header className="bg-blue-900 text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center">
                            <BoltIcon className="w-5 h-5 mr-2" />
                            <h3 className="font-bold">AI Visa Assistant</h3>
                        </div>
                    </header>
                    <div ref={chatContainerRef} className="flex-grow p-4 overflow-y-auto space-y-4">
                        {history.map((msg, index) => (
                           <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                                {msg.sender === 'model' && <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600"><BoltIcon className="w-5 h-5" /></div>}
                                <div className={`p-3 rounded-2xl max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-slate-100 text-slate-800 rounded-bl-none'}`}>
                                   <p className="text-sm">{msg.text}</p>
                                </div>
                                 {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500"><UserIcon className="w-5 h-5"/></div>}
                            </div>
                        ))}
                        {streamingResponse && (
                             <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600"><BoltIcon className="w-5 h-5" /></div>
                                <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 rounded-bl-none max-w-[80%]">
                                   <p className="text-sm">{streamingResponse}<span className="inline-block w-1 h-4 bg-slate-600 animate-pulse ml-1"></span></p>
                                </div>
                            </div>
                        )}
                         {loading && !streamingResponse && (
                             <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-600"><BoltIcon className="w-5 h-5" /></div>
                                <div className="p-3 rounded-2xl bg-slate-100 text-slate-800 rounded-bl-none max-w-[80%] flex items-center space-x-1.5">
                                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-0"></span>
                                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-150"></span>
                                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-300"></span>
                                </div>
                            </div>
                        )}
                    </div>
                    <footer className="p-3 border-t border-slate-200">
                        <div className="relative">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask a visa question..."
                                className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                disabled={loading}
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={loading || !userInput.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition"
                                aria-label="Send message"
                            >
                                <SendIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </footer>
                </div>
            )}
        </>
    );
};

export default AiAssistant;