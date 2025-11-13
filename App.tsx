
import React, { useState, useCallback, useEffect } from 'react';
import type { Country, Page } from './types';
import { countriesData } from './constants';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutUsPage from './components/AboutUsPage';
import OpenAccountPage from './components/OpenAccountPage';
import ContactPage from './components/ContactPage';
import CountryDetailModal from './components/CountryDetailModal';
import AiAssistant from './components/AiAssistant';

// FIX: Changed return type from JSX.Element to React.JSX.Element to fix "Cannot find namespace 'JSX'" error.
function App(): React.JSX.Element {
    const [currentPage, setCurrentPage] = useState<Page>('home');
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

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


    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage countries={countriesData} onSelectCountry={handleSelectCountry} />;
            case 'about':
                return <AboutUsPage />;
            case 'open-account':
                return <OpenAccountPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage countries={countriesData} onSelectCountry={handleSelectCountry} />;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
            <NavBar currentPage={currentPage} setCurrentPage={handleSetPage} />
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