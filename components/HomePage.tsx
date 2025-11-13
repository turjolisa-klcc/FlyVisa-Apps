
import React, { useState, useMemo } from 'react';
import type { Country } from '../types';
import { COMPANY_NAME } from '../constants';
import { SearchIcon, GlobeIcon, ArrowRightIcon, FileTextIcon, InfoIcon } from './icons';

interface HomePageProps {
    countries: Country[];
    onSelectCountry: (country: Country) => void;
}

const HomePage: React.FC<HomePageProps> = ({ countries, onSelectCountry }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('All');

    const regions = useMemo(() => ['All', ...new Set(countries.map(c => c.region))], [countries]);

    const filteredCountries = useMemo(() => {
        return countries.filter(country => {
            const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesRegion = selectedRegion === 'All' || country.region === selectedRegion;
            return matchesSearch && matchesRegion;
        });
    }, [countries, searchTerm, selectedRegion]);

    const handleCountryCardKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, country: Country) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onSelectCountry(country);
        }
    }

    return (
        <div className="animate-in fade-in duration-500">
            <header className="bg-blue-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2948&auto=format&fit=crop')] bg-cover bg-center" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-950/95" aria-hidden="true" />
                <div className="container mx-auto px-6 py-24 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                            Explore the World with<br/>
                            <span className="text-blue-300">{COMPANY_NAME}</span>
                        </h1>
                        <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                            Apply now through our online platform and enjoy professional, fast, and reliable visa consultant services for destinations across the globe.
                        </p>
                        <div className="max-w-xl mx-auto relative">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none" aria-hidden="true">
                                <SearchIcon />
                            </div>
                            <input
                                type="text"
                                id="search-input"
                                placeholder="Where are you travelling next?"
                                className="w-full pl-14 pr-4 py-4 rounded-full text-lg text-slate-800 shadow-2xl focus:ring-4 focus:ring-blue-500/30 focus:outline-none transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                aria-label="Search for destination"
                            />
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 -mt-8 relative z-20">
                <div className="flex flex-wrap gap-2 justify-center mb-10" id="region-filters" role="group" aria-label="Filter countries by region">
                    {regions.map(region => (
                        <button
                            key={region}
                            onClick={() => setSelectedRegion(region)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                                selectedRegion === region
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
                            }`}
                            aria-pressed={selectedRegion === region}
                            aria-label={`Filter by ${region}`}
                        >
                            {region}
                        </button>
                    ))}
                </div>

                <div className="text-center mb-8 text-slate-500" aria-live="polite">
                    Showing {filteredCountries.length} destinations
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredCountries.length > 0 ? filteredCountries.map(country => (
                        <div
                            key={country.id}
                            onClick={() => onSelectCountry(country)}
                            onKeyDown={(e) => handleCountryCardKeyDown(e, country)}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 overflow-hidden cursor-pointer transition-all duration-300 group transform hover:-translate-y-1"
                            role="button"
                            tabIndex={0}
                            aria-label={`View details for ${country.name}`}
                        >
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-4xl mb-2 block" role="img" aria-label={`${country.name} flag`}>{country.flag}</span>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                                            {country.name}
                                        </h3>
                                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md mt-1 inline-block">
                                            {country.region}
                                        </span>
                                    </div>
                                    <div className="bg-slate-50 p-2 rounded-full group-hover:bg-blue-100 transition-colors" aria-hidden="true">
                                        <ArrowRightIcon />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-slate-600 flex items-center">
                                        <FileTextIcon className="w-4 h-4 mr-2 text-slate-400" />
                                        <span className="font-medium truncate">Primary Visa Type: {country.visaType}</span>
                                    </p>
                                    <p className="text-sm text-slate-600 flex items-center">
                                        <InfoIcon />
                                        <span>Processing Time: {country.processingTime}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )) : (
                        <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100 col-span-full">
                            <GlobeIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" />
                            <h3 className="text-2xl font-bold text-slate-700 mb-2">No destinations found</h3>
                            <p className="text-slate-500">Try adjusting your search for "{searchTerm}"</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default HomePage;
