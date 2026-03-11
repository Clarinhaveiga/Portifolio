export interface Work {
  id: string;
  title: string;
  year: string;
  medium: string;
  image: string;
}

export interface PressItem {
  id: string;
  title: string;
  publication: string;
  year: string;
  link: string;
  type: 'Article' | 'Interview' | 'Publication';
}

export interface CVItem {
  year: string;
  title: string;
  location?: string;
}

export const works: Work[] = [
  {
    id: '1',
    title: 'Silent Structures I',
    year: '2023',
    medium: 'Silver gelatin print',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Ephemeral Light',
    year: '2023',
    medium: 'Mixed media installation',
    image: 'https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Memory of Water',
    year: '2022',
    medium: 'Sculptural glass',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Unspoken Words',
    year: '2022',
    medium: 'Silver gelatin print',
    image: 'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'The Void Between',
    year: '2021',
    medium: 'Installation',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '6',
    title: 'Traces of Time',
    year: '2021',
    medium: 'Found objects',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop',
  },
];

export const pressItems: PressItem[] = [
  {
    id: '1',
    title: 'The Poetics of Silence: Clara Veiga at Galeria Aura',
    publication: 'Artforum',
    year: '2023',
    link: '#',
    type: 'Article',
  },
  {
    id: '2',
    title: 'Interview: Clara Veiga on Memory and Materiality',
    publication: 'Contemporary Art Review',
    year: '2022',
    link: '#',
    type: 'Interview',
  },
  {
    id: '3',
    title: 'New Perspectives in Contemporary Sculpture',
    publication: 'Flash Art',
    year: '2021',
    link: '#',
    type: 'Publication',
  },
];

export const cvData = {
  education: [
    { year: '2018', title: 'MFA in Visual Arts, Goldsmiths, University of London' },
    { year: '2015', title: 'BFA in Fine Arts, University of São Paulo' },
  ],
  exhibitions: [
    { year: '2023', title: 'Silent Structures (Solo), Galeria Aura, São Paulo' },
    { year: '2022', title: 'The Void (Group), Tate Modern, London' },
    { year: '2021', title: 'Traces (Solo), Galeria Municipal, Lisbon' },
    { year: '2020', title: 'Contemporary Echoes (Group), MoMA, New York' },
  ],
  residencies: [
    { year: '2022', title: 'Delfina Foundation, London' },
    { year: '2019', title: 'Pivô Arte e Pesquisa, São Paulo' },
  ],
  awards: [
    { year: '2023', title: 'Prêmio PIPA (Nominee)' },
    { year: '2018', title: 'Goldsmiths MFA Scholarship' },
  ],
  collections: [
    { year: '', title: 'Pinacoteca do Estado de São Paulo' },
    { year: '', title: 'Private Collections in London, Lisbon, and New York' },
  ],
};
