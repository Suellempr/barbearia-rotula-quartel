/**
 * Configuração central da barbearia.
 * Altere os valores abaixo para customizar o site sem tocar nos componentes.
 */
export const businessConfig = {
  name: 'Barbearia Rótula Quartel',
  shortName: 'Rótula Quartel',
  slogan: 'Tradição e precisão desde 2023',

  // Número do WhatsApp no formato internacional, somente dígitos (DDI + DDD + número)
  // NUMERO DO MADSON!!
  whatsappNumber: '554896307169',

  address: {
    street: 'Av. Me. Benvenuta, 22',
    neighborhood: 'Trindade',
    city: 'Florianópolis - SC',
    zip: '88036-500',
    mapsEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221.00143555497!2d-48.52122880518434!3d-27.59281749817619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952739e4f301fd17%3A0x62b58954a21a12ea!2sR%C3%B3tula%20Quartel%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1785523816467!5m2!1spt-BR!2sbr',
  },

  contact: {
    phone: '(48) 99630-7169 ',
    email: 'contato@rotulaquartel.com.br',
    instagram: '@rotulaquartelbarbearia',
    instagramUrl: 'https://www.instagram.com/rotulaquartelbarbearia',
  },

  hours: {
    weekdays: 'Segunda a Sexta: 09h às 20h',
    saturday: 'Sábado: 09h às 15h',
  },

  // Horários disponíveis para agendamento
  schedule: {
    weekdaySlots: [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
      '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
    ],
    saturdaySlots: [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    ],
    // 0 = domingo ... 6 = sábado. Domingo fechado.
    closedWeekday: 0,
  },
};
