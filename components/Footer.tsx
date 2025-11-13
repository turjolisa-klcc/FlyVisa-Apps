
import React from 'react';
import { COMPANY_NAME, LOGO_URL, AGENT_EMAIL, AGENT_WHATSAPP } from '../constants';
import { MailIcon, MessageCircleIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12 text-center">
            <div className="container mx-auto px-6">
                <div className="flex justify-center mb-6">
                    <div className="bg-white p-3 rounded-full">
                        <img src={LOGO_URL} alt={`${COMPANY_NAME} Logo`} className="h-12 w-auto" />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">{COMPANY_NAME}</h2>
                <p className="mb-6 max-w-md mx-auto text-slate-500">
                    Your trusted partner for seamless global travel and immigration solutions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm">
                    <a href={`mailto:${AGENT_EMAIL}`} className="flex items-center hover:text-white transition-colors" aria-label={`Email to ${AGENT_EMAIL}`}>
                        <MailIcon className="w-4 h-4 mr-2" />
                        {AGENT_EMAIL}
                    </a>
                    <span className="hidden sm:block text-slate-700" aria-hidden="true">|</span>
                    <a href={`https://wa.me/${AGENT_WHATSAPP}`} className="flex items-center hover:text-green-400 transition-colors" aria-label={`WhatsApp to +${AGENT_WHATSAPP.replace(/(\d{2})(\d{2})(\d{3})(\d{4})/, '$1 $2-$3 $4')}`}>
                        <MessageCircleIcon className="w-4 h-4 mr-2" />
                        +{AGENT_WHATSAPP.replace(/(\d{2})(\d{2})(\d{3})(\d{4})/, '$1 $2-$3 $4')}
                    </a>
                </div>
                
                <div className="border-t border-slate-800 pt-8 mt-8">
                    <p className="text-xs max-w-2xl mx-auto mb-4">
                        Disclaimer: Visa requirements change frequently and depend heavily on your nationality. 
                        Always verify information with the official embassy or consulate before booking travel.
                    </p>
                    <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} Global Services. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
