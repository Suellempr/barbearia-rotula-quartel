import type { Service } from '../types';

/**
 * Lista de serviços exibidos na seção "Serviços" e no formulário de agendamento.
 * Para alterar preços ou adicionar novos serviços, edite este arquivo.
 */
export const services: Service[] = [
  {
    id: 'corte-tradicional',
    name: 'Corte Tradicional',
    description:
      'Corte clássico executado à tesoura e navalha, com acabamento impecável e toalha quente.',
    price: 60,
    durationMinutes: 40,
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'barba',
    name: 'Barba',
    description:
      'Modelagem completa de barba com navalha, óleos e finalização com toalha quente.',
    price: 45,
    durationMinutes: 30,
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'corte-barba',
    name: 'Corte + Barba',
    description:
      'O ritual completo: corte tradicional e barba alinhada em uma única sessão.',
    price: 95,
    durationMinutes: 70,
    image:
      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'limpeza-facial',
    name: 'Limpeza Facial',
    description:
      'Limpeza de pele profunda com produtos premium para revitalizar e cuidar da pele.',
    price: 70,
    durationMinutes: 35,
    image:
      'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'depilacao-nariz-orelha',
    name: 'Depilação Nariz e Orelha',
    description:
      'Remoção de pelos com cera quente, rápida e sem desconforto.',
    price: 25,
    durationMinutes: 15,
    image:
      'https://images.unsplash.com/photo-1621607512214-68297480165e?q=80&w=800&auto=format&fit=crop',
  },
];
