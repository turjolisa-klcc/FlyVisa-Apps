
import type { Country } from './types';

export const AGENT_WHATSAPP = "60109654305";
export const AGENT_EMAIL = "visa@flyviewvisa.site";
export const COMPANY_NAME = "FLY VIEW VISA";
export const LOGO_URL = "http://klcchotescort.com/Fly-Logo.jpg";

export const countriesData: Country[] = [
    {
        id: 'usa',
        name: 'United States',
        flag: '🇺🇸',
        region: 'North America',
        visaType: 'ESTA / B1/B2 Visa',
        processingTime: '3 days (ESTA) to 3+ months (Embassy)',
        description: 'Most travelers need either an ESTA (Visa Waiver Program) or a B1/B2 Tourist Visa obtained via an embassy interview.',
        requirements: [
            'Valid Passport (6 months validity)',
            'DS-160 Application Form (for B1/B2)',
            'Embassy Interview Appointment',
            'Recent digital photograph',
            'Proof of funds and ties to home country'
        ],
        applyLink: 'https://ceac.state.gov/genniv/',
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        flag: '🇬🇧',
        region: 'Europe',
        visaType: 'Standard Visitor Visa',
        processingTime: '3 weeks average',
        description: 'Required for many non-European nationals. Allows stays of up to 6 months for tourism or visiting family.',
        requirements: [
            'Valid Passport',
            'Completed online application form',
            'Biometric appointment (fingerprints/photo)',
            'Bank statements proving financial means',
            'Travel itinerary and accommodation details'
        ],
        applyLink: 'https://www.gov.uk/standard-visitor-visa/apply',
    },
    {
        id: 'schengen',
        name: 'Schengen Area (EU)',
        flag: '🇪🇺',
        region: 'Europe',
        visaType: 'Schengen Visa (Type C)',
        processingTime: '15-45 days',
        description: 'One visa for 27 European countries (France, Germany, Italy, Spain, etc.). Apply at the embassy of your main destination.',
        requirements: [
            'Schengen Visa Application Form',
            'Travel Insurance (€30k coverage)',
            'Round-trip flight reservation',
            'Proof of accommodation (hotel/host)',
            'Proof of financial means',
            'Biometrics at VFS/TLS contact centers'
        ],
        applyLink: 'https://ec.europa.eu/home-affairs/policies/schengen-borders-and-visa/visa-policy/applying-schengen-visa_en',
    },
    {
        id: 'japan',
        name: 'Japan',
        flag: '🇯🇵',
        region: 'Asia',
        visaType: 'Tourist Visa / E-Visa',
        processingTime: '5-10 business days',
        description: 'Many Western nations are visa-exempt. Others must apply for a standard tourist visa or the new E-Visa for select nationalities.',
        requirements: [
            'Visa Application Form',
            'Passport Photo (45mm x 35mm)',
            'Flight Itinerary',
            'Daily schedule of activities in Japan',
            'Proof of sufficient funds'
        ],
        applyLink: 'https://www.mofa.go.jp/j_info/visit/visa/index.html',
    },
    {
        id: 'australia',
        name: 'Australia',
        flag: '🇦🇺',
        region: 'Oceania',
        visaType: 'eVisitor (651) / Visitor Visa (600)',
        processingTime: '2 days to 4 weeks',
        description: 'Strictly digital system. Most westerners need a free eVisitor or paid ETA. Others need a full subclass 600 visitor visa.',
        requirements: [
            'ImmiAccount created online',
            'Valid Passport',
            'Genuine Temporary Entrant (GTE) statement',
            'Health exams (for longer stays)',
            'Proof of funds'
        ],
        applyLink: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-finder/visit',
    },
    {
        id: 'canada',
        name: 'Canada',
        flag: '🇨🇦',
        region: 'North America',
        visaType: 'ETA / Visitor Visa',
        processingTime: 'Typically 1-2 weeks',
        description: 'Visa-exempt nationals need an Electronic Travel Authorization (eTA) for flights. Others need a Temporary Resident Visa (TRV).',
        requirements: [
            'Online IRCC account',
            'Biometrics (fingerprints and photo)',
            'Proof of financial support',
            'Ties to home country (employment letter)',
            'Travel history'
        ],
        applyLink: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada.html',
    },
    {
        id: 'china',
        name: 'China',
        flag: '🇨🇳',
        region: 'Asia',
        visaType: 'L Visa (Tourist)',
        processingTime: '4 business days (regular)',
        description: 'Requires a detailed application. 144-hour visa-free transit is available in certain cities for specific nationalities.',
        requirements: [
            'COVA Online Form completed',
            'Appointment at Visa Application Center',
            'Round-trip air tickets',
            'Hotel booking confirmation for entire stay',
            'Invitation letter (optional but helpful)'
        ],
        applyLink: 'http://cs.mfa.gov.cn/wgrlh/lhqz/lhqzjjs/t1095035.shtml',
    },
    {
        id: 'india',
        name: 'India',
        flag: '🇮🇳',
        region: 'Asia',
        visaType: 'e-Tourist Visa',
        processingTime: '72 hours',
        description: 'Simple online process for most nationalities. Visa is emailed to you; must be printed and shown upon arrival.',
        requirements: [
            'Scanned bio page of passport',
            'Recent digital square photo',
            'Online payment required',
            'Must apply at least 4 days before arrival'
        ],
        applyLink: 'https://indianvisaonline.gov.in/evisa/tvoa.html',
    },
    {
        id: 'brazil',
        name: 'Brazil',
        flag: '🇧🇷',
        region: 'South America',
        visaType: 'Visit Visa (VIVIS)',
        processingTime: '5-15 business days',
        description: 'Re-introducing visa requirements for US, Canadian, and Australian citizens (check latest news). Standard tourist visa for many others.',
        requirements: [
            'Online Visa Application Form (RER)',
            'Passport valid for 6 months',
            'Proof of financial means',
            'Round-trip ticket'
        ],
        applyLink: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular/vistos/visitas-vistos-de-turismo-e-transito',
    },
    {
        id: 'uae',
        name: 'United Arab Emirates',
        flag: '🇦🇪',
        region: 'Middle East',
        visaType: 'Tourist Visa / Visa on Arrival',
        processingTime: '3-4 working days',
        description: 'Many nationalities get free visa on arrival (30 days). Others must apply beforehand, often through airlines (Emirates, Etihad).',
        requirements: [
            'Color passport copy',
            'Color passport photograph',
            'Confirmed flight booking',
            'Application fee'
        ],
        applyLink: 'https://u.ae/en/information-and-services/visa-and-emirates-id',
    },
    {
        id: 'egypt',
        name: 'Egypt',
        flag: '🇪🇬',
        region: 'Africa',
        visaType: 'e-Visa / Visa on Arrival',
        processingTime: '7 days (e-Visa)',
        description: 'E-Visa available for 70+ countries. Others can get visa on arrival at Cairo airport (bring cash USD/EUR) or must apply at embassy.',
        requirements: [
            'Passport valid for 6+ months',
            'Printed e-Visa confirmation',
            'Travel itinerary',
            'Hotel bookings'
        ],
        applyLink: 'https://visa2egypt.gov.eg/',
    },
    {
        id: 'thailand',
        name: 'Thailand',
        flag: '🇹🇭',
        region: 'Asia',
        visaType: 'Visa Exemption / Tourist Visa (TR)',
        processingTime: '5-10 working days (E-Visa)',
        description: 'Many countries get 30-day visa exemption on arrival. Longer stays require a TR visa applied for online (E-Visa system).',
        requirements: [
            'Passport biodata page',
            'Passport photo',
            'Flight confirmation (in and out of Thailand)',
            'Proof of accommodation',
            'Financial proof (bank statement)'
        ],
        applyLink: 'https://thaievisa.go.th/',
    },
    {
        id: 'south_africa',
        name: 'South Africa',
        flag: '🇿🇦',
        region: 'Africa',
        visaType: 'Visitor’s Visa',
        processingTime: '4-8 weeks',
        description: 'Many Western countries are visa exempt for 90 days. Others must apply in person at VFS centers.',
        requirements: [
            'DHA-84 Form',
            'Passport (2 blank pages required)',
            'Yellow fever certificate (if applicable)',
            'Three month bank statement (stamped by bank)',
            'Return flight ticket'
        ],
        applyLink: 'http://www.dha.gov.za/index.php/immigration-services/apply-for-a-south-african-visa',
    },
    {
        id: 'turkey',
        name: 'Turkey',
        flag: '🇹🇷',
        region: 'Europe/Asia',
        visaType: 'E-Visa',
        processingTime: 'Immediate (Under 24h)',
        description: 'Very simple E-Visa system for most eligible nationalities. Some need standard embassy stickers.',
        requirements: [
            'Passport with 6 months validity',
            'Credit/Debit card for payment',
            'Email address for delivery'
        ],
        applyLink: 'https://www.evisa.gov.tr/en/',
    },
    {
        id: 'singapore',
        name: 'Singapore',
        flag: '🇸🇬',
        region: 'Asia',
        visaType: 'SG Arrival Card / Entry Visa',
        processingTime: '3-5 working days (if visa needed)',
        description: 'Most Western travelers only need the SG Arrival Card (SGAC) filled 3 days before. Select nationalities need a pre-approved visa.',
        requirements: [
            'Form 14A (if visa needed)',
            'Passport standard validity',
            'Letter of Introduction (V39A) sometimes required',
            'Flight itinerary'
        ],
        applyLink: 'https://www.ica.gov.sg/enter-transit-depart/entering-singapore/visa_requirements',
    },
    {
        id: 'new_zealand',
        name: 'New Zealand',
        flag: '🇳🇿',
        region: 'Oceania',
        visaType: 'NZeTA / Visitor Visa',
        processingTime: '72 hours (NZeTA)',
        description: 'Visa-waiver countries must get an NZeTA via mobile app or online before flying. Includes IVL tourism levy.',
        requirements: [
            'NZeTA Mobile App (easiest way)',
            'Passport details',
            'Credit card for IVL and NZeTA fee',
            'Photo of yourself'
        ],
        applyLink: 'https://www.immigration.govt.nz/new-zealand-visas',
    },
    {
        id: 'vietnam',
        name: 'Vietnam',
        flag: '🇻🇳',
        region: 'Asia',
        visaType: 'E-Visa',
        processingTime: '3-5 working days',
        description: 'Nearly all nationalities can now use the 90-day E-Visa system. Apply directly on the government portal.',
        requirements: [
            'Passport data page scan',
            'Portrait photo (no glasses)',
            'Entry/Exit checkpoints must be specified',
            'Temporary residential address in Vietnam'
        ],
        applyLink: 'https://evisa.xuatnhapcanh.gov.vn/',
    },
    {
        id: 'indonesia',
        name: 'Indonesia (Bali)',
        flag: '🇮🇩',
        region: 'Asia',
        visaType: 'e-VOA (Visa on Arrival)',
        processingTime: 'Immediate (online)',
        description: 'Travelers to Bali/Jakarta can pre-purchase e-VOA online to skip airport queues, or buy at the counter on arrival.',
        requirements: [
            'Passport with 6 months validity',
            'Return flight ticket',
            'Online payment (Mastercard/Visa/JCB)',
            'Digital passport photo'
        ],
        applyLink: 'https://molina.imigrasi.go.id/',
    }
];
