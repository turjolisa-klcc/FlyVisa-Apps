import React, { useState } from 'react';
import { COMPANY_NAME, AGENT_WHATSAPP, AGENT_EMAIL } from '../constants';
import { PhoneIcon, MailIcon, MapIcon, CheckCircleIcon } from './icons';
import Logo from './Logo';

const OpenAccountPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center px-4 animate-in fade-in zoom-in duration-500">
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full border border-green-100">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
                        <CheckCircleIcon className="w-10 h-10 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">Request Received!</h2>
                    <p className="text-slate-600 mb-8">
                        Thank you for your interest in {COMPANY_NAME}. One of our visa consultants will review your details and contact you shortly via WhatsApp or Email.
                    </p>
                    <button
                        onClick={() => setSubmitted(false)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-8 rounded-xl transition-colors"
                    >
                        Submit Another Request
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 py-16 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Open Your Account</h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Start your journey with us today. Fill out the form below, and we'll set up your client profile to begin managing your visa applications efficiently.
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    <div className="bg-blue-900 text-white p-8 md:p-12 md:w-2/5 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center" aria-hidden="true" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-6">Get in Touch Directly</h3>
                            <p className="text-blue-200 mb-10">Have urgent questions? Reach out to our dedicated support team.</p>
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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                                    <input required type="text" id="firstName" name="firstName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John" autoComplete="given-name" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                                    <input required type="text" id="lastName" name="lastName" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Doe" autoComplete="family-name" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                                <input required type="email" id="email" name="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" autoComplete="email" />
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-2">WhatsApp Number *</label>
                                <input required type="tel" id="whatsapp" name="whatsapp" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="+60 123 456 789" autoComplete="tel" />
                            </div>
                            <div>
                                <label htmlFor="nationality" className="block text-sm font-medium text-slate-700 mb-2">Nationality</label>
                                <select id="nationality" name="nationality" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white" autoComplete="country-name">
                                    <option value="">Select your nationality</option>
                                    <option value="malaysia">Malaysian</option>
                                    <option value="china">Chinese</option>
                                    <option value="vietnam">Vietnamese</option>
                                    <option value="uae">Emirati</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="destination" className="block text-sm font-medium text-slate-700 mb-2">Interested Destination</label>
                                <input type="text" id="destination" name="destination" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="e.g., Australia, USA, Japan" autoComplete="off" />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.01] shadow-lg hover:shadow-blue-500/25 mt-4">
                                Submit Registration Request
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-4">
                                By submitting, you agree to be contacted by {COMPANY_NAME} regarding your visa inquiry.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenAccountPage;