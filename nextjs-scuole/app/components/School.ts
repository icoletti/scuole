//Il codice definisce un'interfaccia chiamata "School" che descrive le proprietà di una scuola. Queste proprietà includono il nome della scuola, un array di indirizzi, una stringa per il logo, 
//una stringa per il video e una stringa per l'URL del sito web della scuola.

export interface School {
    name: string;
    addresses: string[];
    logo: string;
    video: string;
    websiteUrl: string;
}