import { School } from '../components/School';

const schools: School[] = [
  {
    name: 'LICEO ANTONIO ROSMINI',
    addresses: ['Classico', 'Scientifico', 'Linguistico', 'Scienze Applicate', 'Scientifico Sportivo'],
    logo: `/LogoLiceoRosmini.jpeg`,
    video: 'https://drive.google.com/file/d/140NIpgFof5DWRNyyEm9b3ajjCPu9udDe/view?t=16',
    websiteUrl: 'https://liceorosmini.eu/'
  },
  {
    name: 'LICEO DELLE SCIENZE UMANE “F.FILZI”',
    addresses: ['Scienze Umane', 'Economico Sociale'],
    logo: `/LogoFilzi.png`,
    video: 'https://drive.google.com/file/d/12QsYZ1jz3ZJ9u-hoNVsJEF8Ao9Xvna2Z/view?t=1',
    websiteUrl: 'https://www.liceofilzi.it/'
  },
  {
    name: 'ISTITUTO D’ISTRUZIONE “DON MILANI”',
    addresses: ['Servizi per la Sanità e l\'Assistenza Sociale', '', 'Economico Turismo'],
    logo: `/LogoDonMilani.png`,
    video: 'https://drive.google.com/file/d/17oh6NMuBVr3HIShxC6wSL5PAe1wlY7pz/view',
    websiteUrl: 'http://www.domir.it/it/'
  },
  {
    name: 'ISTITUTO TECNICO TECNOLOGICO “G. MARCONI”',
    addresses: ['Scienze Umane', 'Economico Sociale'],
    logo: `/LogoMarconi.png`,
    video: '',
    websiteUrl: 'https://www.marconirovereto.it/'
  },
  {
    name: 'ITET FONTANA',
    addresses: ['Costruzioni, Ambiente e Territorio', 'Tecnologie del Legno nelle Costruzioni', 
    'Quadriennale CAT 4.0', 'Amministrazione Finanza e marketing', 
    'Relazioni Internazionali per il Marketing', 'Sistemi Informativi Aziendali',
    'Chimica, Materiali e Biotecnologie - articolazione Biotecnologie Ambientali',
    'Amministrazione Finanza e Marketing – Curvatura Sportiva'],
    logo: '/LogoFontana.png',
    video: 'https://drive.google.com/file/d/1p4jzXxtzdWH5xoICshWG95D2x9sI8ESg/view',
    websiteUrl: 'https://fgfontana.eu/'
  },
  {
    name: 'LICEO ARTISTICO DEPERO',
    addresses: ['Grafica', 'Design', 'Audiovisivo-Multimediale'],
    logo: '/LogoLiceoDepero.png',
    video: 'https://drive.google.com/file/d/1pvAesn25sWmh0gWXzSJu39dnvsesZlTU/view?t=1',
    websiteUrl: 'https://www.istitutodellearti.tn.it/liceo-depero-rovereto'
  },
  {
    name: 'CFP OPERA ARMIDA BARELLI',
    addresses: ['Acconciatura', 'Estetica', 'T.O.S.S.'],
    logo: '/LogoBarelli.png',
    video: 'https://drive.google.com/file/d/1HCBQ215sui6fFvI2B4OqVXNMeNcXmOi5/view',
    websiteUrl: 'https://operaarmidabarelli.org/'
  },
  {
    name: 'LICEO INTERNAZIONALE ARCIVESCOVILE',
    addresses: ['Liceo Internazionale LIA'],
    logo: '/LogoArcivescovile.png',
    video: 'https://drive.google.com/file/d/1727afftTOWorGyHe40LYSWEz7AN_6FpG/view',
    websiteUrl: 'https://www.arcivescoviletrento.it/offerta/secondaria-2/rovereto/liceo-internazionale-lia/benvenuto/'
  },
  {
    name: 'POLO GIUSEPPE VERONESI CFP - MADE++',
    addresses: ['MADE', 'STEAM', 'DIGITAL MANUFACTURING DESIGNER'],
    logo: '/LogoVeronesi.png',
    video: 'https://drive.google.com/file/d/1DoV5F6avsv4k1yWBsqoe3oGclc34nWp0/view',
    websiteUrl: 'https://www.poloveronesi.it/'
  },
  {
    name: 'ISTITUTO DI FORMAZIONE PROFESSIONALE ALBERGHIERO',
    addresses: ['Panificazione e Pasticceria', 'Cucina', 'Sala e Bar', 'Capes'],
    logo: '/LogoAlberghiero.png',
    video: 'https://drive.google.com/file/d/1tpFJw2h4syTrfTa8IYz9cRSpOx2qccrz/view',
    websiteUrl: 'https://www.alberghierorovereto.it/'
  },
  {
    name: 'C.F.P. U.P.T. Scuola delle Professioni per il Terziario',
    addresses: [' Operatore dei Servizi d Impresa ', 'Operatore dei Servizi di Vendita', 
    'Operatore dei Servizio e dei Sistemi Logistici', 'Tecnico dei Servizi Amministrativi e Contabili', 
    'Tecnico Commerciale delle Vendite',  'Tecnico della Gestione Amministrativa e Contabile'],
    logo: '/LogoUPT.png',
    video: 'https://drive.google.com/file/d/1LBG4kQdIsGh_PclYn-ZDoJLgJmU07svY/view',
    websiteUrl: 'https://www.cfpupt.it/'
  }

];

const Schools = () => {
  return (
    <div>
      {schools.map((school, index) => (
        <div key={index} className='scuola-container'>
          <img src={school.logo} alt={school.name} />
          <h2 className='text-xl front-semibold mb-2'>{school.name}</h2>
          <ul>
            {school.addresses.map((address, index) => (
              <li key={index}>{address}</li>
            ))}
          </ul>
          <video width="320" height="240" controls>
            <source src={school.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a href={school.websiteUrl} target="_blank" rel="noopener noreferrer">sito ufficiale</a>
        </div>
      ))}
    </div>
  );
};

export default Schools;