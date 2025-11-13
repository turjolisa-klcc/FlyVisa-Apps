
import React, { useState, useCallback, useEffect, useRef } from 'react';
import type { Country, Page } from './types';
import { countriesData } from './constants';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import ContactPage from './components/ContactPage';
import CountryDetailModal from './components/CountryDetailModal';
import AiAssistant from './components/AiAssistant';

// FIX: Changed return type from JSX.Element to React.JSX.Element to fix "Cannot find namespace 'JSX'" error.
function App(): React.JSX.Element {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const lastScrollY = useRef(0);

    const handleSetPage = useCallback((page: Page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    }, []);

    const handleSelectCountry = useCallback((country: Country | null) => {
        setSelectedCountry(country);
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedCountry]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const navbarHeight = 80; // Approximate height of the navbar

            // If scrolling up, or if we're near the top of the page, show the navbar.
            if (currentScrollY < lastScrollY.current || currentScrollY < navbarHeight) {
                setIsNavVisible(true);
            } else {
                // If scrolling down and past the navbar, hide it.
                setIsNavVisible(false);
            }

            // Update the last scroll position.
            lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage countries={countriesData} onSelectCountry={handleSelectCountry} />;
            case 'about':
                return <AboutUsPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage countries={countriesData} onSelectCountry={handleSelectCountry} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
            <NavBar currentPage={currentPage} setCurrentPage={handleSetPage} isVisible={isNavVisible} />
            <main className="flex-grow">
                {renderPage()}
            </main>
            <Footer />
            {selectedCountry && (
                <CountryDetailModal
                    country={selectedCountry}
                    onClose={() => handleSelectCountry(null)}
                />
            )}
            <AiAssistant />
        </div>
    );
}

export default App;