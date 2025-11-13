
export type Page = 'home' | 'about' | 'open-account' | 'contact';

export interface Country {
    id: string;
    name: string;
    flag: string;
    region: string;
    visaType: string;
    processingTime: string;
    description: string;
    requirements: string[];
    applyLink: string;
}
