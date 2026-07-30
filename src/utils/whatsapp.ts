import { businessConfig } from '../data/businessConfig';
import type { Service } from '../types';

interface BuildScheduleMessageParams {
  service?: Service;
  date: string; // yyyy-mm-dd
  time: string;
  name: string;
}

function formatDateToBR(isoDate: string): string {
  if (!isoDate) return '';
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

/**
 * Monta a mensagem pré-formatada e retorna a URL completa do WhatsApp (wa.me).
 */
export function buildWhatsAppScheduleUrl({
  service,
  date,
  time,
  name,
}: BuildScheduleMessageParams): string {
  const lines = [
    'Olá! Gostaria de agendar um atendimento.',
    '',
    'Serviço:',
    service ? service.name : '(não informado)',
    '',
    'Data:',
    date ? formatDateToBR(date) : '(não informada)',
    '',
    'Horário:',
    time || '(não informado)',
    '',
    'Meu nome é:',
    name || '(não informado)',
  ];

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${text}`;
}

/**
 * URL genérica do WhatsApp (usada no botão flutuante e no rodapé).
 */
export function buildWhatsAppGenericUrl(message = 'Olá! Gostaria de mais informações.'): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${businessConfig.whatsappNumber}?text=${text}`;
}
