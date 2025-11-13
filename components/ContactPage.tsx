import React from 'react';
import { COMPANY_NAME, AGENT_WHATSAPP, AGENT_EMAIL } from '../constants';
import { PhoneIcon, MailIcon, MapIcon } from './icons';
import Logo from './Logo';

const ContactPage: React.FC = () => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-16 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We're here to help. Send us a message for any inquiries, and our team will respond promptly.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-blue-900 text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center" aria-hidden="true" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                            <p className="text-blue-200 mb-10">For direct support, use the contact details below. We are available during standard business hours.</p>
                            <div className="space-y-6">
                                <div className="flex items-center">
                                    <PhoneIcon />
                                    <span>+{AGENT_WHATSAPP}</span>
                                </div>
                                <div className="flex items-center">
                                    <MailIcon className="w-6 h-6 text-blue-300 mr-4" />
                                    <span className="break-all">{AGENT_EMAIL}</span>
                                </div>
                                <div className="flex items-start">
                                    <MapIcon />
                                    <span>Global HQ: Kuala Lumpur, Malaysia</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative z-10 mt-12 md:mt-0">
                           <Logo className="h-12 w-12" />
                        </div>
                    </div>
                    
                    <div className="p-8 md:p-12 md:w-3/5">
                        <form action="https://formsubmit.co/visa@flyviewvisa.site" method="POST" className="space-y-6">
                            <input type="hidden" name="_subject" value="New Contact Form Submission from Fly View Visa!" />
                            <input type="hidden" name="_captcha" value="false" />
                            <div>
                                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                                <input required type="text" id="fullName" name="fullName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" autoComplete="name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                                <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" autoComplete="email" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject *</label>
                                <input required type="text" id="subject" name="subject" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Question about Schengen Visa" autoComplete="off" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                                <textarea required id="message" name="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Please type your message here..."></textarea>
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-blue-500/25 mt-4">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;