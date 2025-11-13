
import React, { useEffect } from 'react';
import type { Country } from '../types';
import { AGENT_WHATSAPP } from '../constants';
import { XIcon, CheckCircleIcon, FileTextIcon, InfoIcon, GlobeIcon, ExternalLinkIcon, MessageCircleIcon } from './icons';

interface CountryDetailModalProps {
    country: Country;
    onClose: () => void;
}

const CountryDetailModal: React.FC<CountryDetailModalProps> = ({ country, onClose }) => {
    
    useEffect(() => {
        const handleEscapeKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [onClose]);
    
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby={`modal-title-${country.id}`}>
            <div
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
                role="button"
                tabIndex={-1}
                aria-label="Close modal"
            />
            
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-in fade-in zoom-in-95 duration-200">
                <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between z-20">
                    <div className="flex items-center">
                        <span className="text-4xl mr-4" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
                        <div>
                            <h2 id={`modal-title-${country.id}`} className="text-2xl font-bold text-slate-900">{country.name}</h2>
                            <p className="text-sm text-slate-500">Visa Application Guide</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
                        aria-label="Close"
                    >
                        <XIcon className="w-6 h-6 text-slate-600" />
                    </button>
                </div>

                <div className="p-6 sm:p-8 space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
                            <h4 className="text-blue-800 font-semibold mb-1 flex items-center">
                                <FileTextIcon className="w-4 h-4 mr-2" /> Primary Visa Type
                            </h4>
                            <p className="text-blue-900 font-medium">{country.visaType}</p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-2xl border border-purple-100">
                            <h4 className="text-purple-800 font-semibold mb-1 flex items-center">
                                <InfoIcon /> Processing Time
                            </h4>
                            <p className="text-purple-900 font-medium">{country.processingTime}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                            <GlobeIcon />
                            Overview
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                            {country.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
                            <FileTextIcon className="w-5 h-5 mr-2 text-blue-600" />
                            Standard Requirements
                        </h3>
                        <ul className="space-y-3">
                            {country.requirements.map((req, index) => (
                                <li key={index} className="flex items-start bg-slate-50 p-3 rounded-xl">
                                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true">
                                        <CheckCircleIcon />
                                    </div>
                                    <span className="text-slate-700">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-4 space-y-4">
                        <a
                            href={`https://wa.me/${AGENT_WHATSAPP}?text=${encodeURIComponent(`Hello Fly View Visa, I need professional assistance with my ${country.name} visa application.`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-green-500/25"
                            aria-label={`Get professional assistance via WhatsApp for ${country.name} visa`}
                        >
                            <MessageCircleIcon className="w-5 h-5 mr-2" />
                            <span>Get Professional Assistance via WhatsApp</span>
                        </a>

                        <div className="relative flex items-center py-2" aria-hidden="true">
                            <div className="flex-grow border-t border-slate-200"></div>
                            <span className="flex-shrink mx-4 text-slate-400 text-sm">OR</span>
                            <div className="flex-grow border-t border-slate-200"></div>
                        </div>

                        <a
                            href={country.applyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold py-3 px-6 rounded-xl transition-all border border-blue-200"
                            aria-label={`Apply directly through official government portal for ${country.name} visa`}
                        >
                            <span>Apply Directly (Official Gov Portal)</span>
                            <ExternalLinkIcon />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryDetailModal;
