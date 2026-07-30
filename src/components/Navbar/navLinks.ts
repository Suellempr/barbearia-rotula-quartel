export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: 'hero', label: 'Início' },
  { id: 'services', label: 'Serviços' },
  { id: 'gallery', label: 'Galeria' },
  { id: 'about', label: 'História' },
  { id: 'schedule', label: 'Agendamento' },
  { id: 'location', label: 'Localização' },
  { id: 'footer', label: 'Contato' },
];
