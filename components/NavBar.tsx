import React, { useState } from 'react';
import type { Page } from '../types';
import { COMPANY_NAME, AGENT_WHATSAPP } from '../constants';
import { MenuIcon, XIcon, MessageCircleIcon } from './icons';
import Logo from './Logo';

interface NavBarProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    isVisible: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage, setCurrentPage, isVisible }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks: { id: Page, label: string }[] = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'contact', label: 'Contact Us' },
    ];

    const handleNavClick = (page: Page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`bg-blue-900 text-white sticky top-0 z-50 shadow-lg transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div
                        className="flex items-center cursor-pointer group"
                        onClick={() => handleNavClick('home')}
                        role="button"
                        aria-label="Home"
                    >
                        <Logo className="h-12 w-12 border-2 border-white/20 shadow-md" />
                    </div>

                    <div className="hidden md:block">
                        <div className="flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                <button
                                    key={link.id}
                                    onClick={() => handleNavClick(link.id)}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                        currentPage === link.id
                                            ? 'bg-blue-800 text-white shadow-inner'
                                            : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                                    }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <a
                                href={`https://wa.me/${AGENT_WHATSAPP}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center transition-transform hover:scale-105"
                                aria-label="WhatsApp Us"
                            >
                                <MessageCircleIcon className="w-4 h-4 mr-2" />
                                WhatsApp Us
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-700 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-blue-950" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <button
                                key={link.id}
                                onClick={() => handleNavClick(link.id)}
                                className={`w-full text-left block px-3 py-3 rounded-md text-base font-medium ${
                                    currentPage === link.id
                                        ? 'bg-blue-900 text-white'
                                        : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                                }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <a
                            href={`https://wa.me/${AGENT_WHATSAPP}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-left block px-3 py-3 rounded-md text-base font-medium text-green-400 hover:bg-blue-800 flex items-center"
                            aria-label="WhatsApp Us"
                        >
                            <MessageCircleIcon className="w-5 h-5 mr-3" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;