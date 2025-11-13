
import React from 'react';
import { COMPANY_NAME } from '../constants';
import { MapPinIcon, CheckCircleIcon, ClockIcon, UserIcon } from './icons';

const AboutUsPage: React.FC = () => {
    const branches = [
        { country: "Malaysia", city: "Kuala Lumpur", icon: "🇲🇾" },
        { country: "Vietnam", city: "Ho Chi Minh City & Hanoi", icon: "🇻🇳" },
        { country: "China", city: "Shenzhen", icon: "🇨🇳" },
        { country: "Dubai", city: "UAE - Dubai", icon: "🇦🇪" },
    ];

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-blue-900 text-white py-20 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2933&auto=format&fit=crop')] bg-cover bg-center" aria-hidden="true" />
                <h1 className="text-4xl md:text-5xl font-bold relative z-10">About {COMPANY_NAME}</h1>
                <p className="text-blue-200 mt-4 max-w-2xl mx-auto text-lg relative z-10">Bridging borders and simplifying your journey to the world.</p>
            </div>

            <div className="container mx-auto px-6 py-16 max-w-5xl">
                <div className="prose prose-lg prose-slate mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-8">Our Mission</h2>
                    <p className="text-lg text-slate-600 leading-relaxed text-center mb-12">
                        At <strong>{COMPANY_NAME}</strong>, we believe that travel should be exciting, not overwhelming. Our mission is to demystify the complex world of visa applications. Whether you are traveling for leisure, business, or visiting loved ones, our dedicated team of experts ensures your documentation is perfect, your appointments are set, and your journey begins with confidence.
                    </p>
                </div>

                <div className="mb-16">
                    <div className="text-center mb-10">
                        <span className="bg-blue-100 text-blue-700 text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">Global Presence</span>
                        <h2 className="text-3xl font-bold text-slate-900 mt-4">Serving You From 4 Strategic Hubs</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {branches.map((branch) => (
                            <div key={branch.country} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
                                <span className="text-5xl mb-4 block" role="img" aria-label={`${branch.country} flag`}>{branch.icon}</span>
                                <h3 className="text-xl font-bold text-slate-800">{branch.country}</h3>
                                <p className="text-slate-500 flex items-center justify-center mt-2">
                                    <MapPinIcon />
                                    {branch.city} Branch
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Why Choose {COMPANY_NAME}?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-blue-100 p-4 rounded-full text-blue-600 mb-4" aria-hidden="true">
                                <CheckCircleIcon className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                            <p className="text-slate-600">Up-to-date knowledge on ever-changing global immigration policies.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-green-100 p-4 rounded-full text-green-600 mb-4" aria-hidden="true">
                                <ClockIcon />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                            <p className="text-slate-600">Optimized workflows to get your application submitted without delay.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4" aria-hidden="true">
                                <UserIcon />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
                            <p className="text-slate-600">Dedicated consultants who understand your specific travel needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
