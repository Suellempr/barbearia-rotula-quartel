import { businessConfig } from '../data/businessConfig';

/**
 * Retorna os horários disponíveis para uma data (yyyy-mm-dd), de acordo com o dia da semana.
 * Retorna array vazio para domingo (fechado).
 */
export function getAvailableSlotsForDate(isoDate: string): string[] {
  if (!isoDate) return [];

  const [year, month, day] = isoDate.split('-').map(Number);
  const weekday = new Date(year, month - 1, day).getDay(); // 0 = domingo, 6 = sábado

  if (weekday === businessConfig.schedule.closedWeekday) {
    return [];
  }

  return weekday === 6
    ? businessConfig.schedule.saturdaySlots
    : businessConfig.schedule.weekdaySlots;
}

/**
 * Retorna a data mínima selecionável (hoje) no formato yyyy-mm-dd, para uso no input type="date".
 */
export function getMinSelectableDate(): string {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}
