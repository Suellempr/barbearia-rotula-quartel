import { useMemo, useState, type FormEvent } from 'react';
import { businessConfig } from '../../data/businessConfig';
import { services } from '../../data/services';
import { useSelectedService } from '../../hooks/useSelectedService';
import { getAvailableSlotsForDate, getMinSelectableDate } from '../../utils/schedule';
import { buildWhatsAppScheduleUrl } from '../../utils/whatsapp';
import styles from './ScheduleForm.module.css';

interface FormErrors {
  name?: string;
  phone?: string;
  serviceId?: string;
  date?: string;
  time?: string;
}

export function ScheduleForm() {
  const { selectedServiceId, setSelectedServiceId } = useSelectedService();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});

  const minDate = useMemo(() => getMinSelectableDate(), []);
  const availableSlots = useMemo(() => getAvailableSlotsForDate(date), [date]);
  const selectedService = services.find((service) => service.id === selectedServiceId);

  function handleDateChange(value: string) {
    setDate(value);
    setTime('');
  }

  function validate(): boolean {
    const nextErrors: FormErrors = {};

    if (!name.trim()) nextErrors.name = 'Informe seu nome.';
    if (!phone.trim()) nextErrors.phone = 'Informe seu telefone.';
    if (!selectedServiceId) nextErrors.serviceId = 'Selecione um serviço.';
    if (!date) nextErrors.date = 'Selecione uma data.';
    else if (availableSlots.length === 0) nextErrors.date = 'Fechado nesta data. Escolha outro dia.';
    if (!time) nextErrors.time = 'Selecione um horário.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    const url = buildWhatsAppScheduleUrl({ service: selectedService, date, time, name });
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <section id="schedule" className={`section ${styles.schedule}`} aria-label="Agendamento">
      <div className="section-inner">
        <div className={styles.wrapper}>
          <div className={styles.intro}>
            <span className="eyebrow">Agendamento</span>
            <h2 className="section-title">Reserve o seu horário</h2>
            <p className="section-lede">
              Preencha os dados abaixo. Ao confirmar, você será direcionado ao WhatsApp com uma
              mensagem já preenchida para finalizar o agendamento com nossa equipe.
            </p>
            <div className={styles.introHours}>
              <span><strong>Segunda a Sexta</strong> — {businessConfig.hours.weekdays.split(': ')[1]}</span>
              <span><strong>Sábado</strong> — {businessConfig.hours.saturday.split(': ')[1]}</span>
              <span><strong>Domingo</strong> — Fechado</span>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="name">
                  Nome
                </label>
                <input
                  id="name"
                  className={styles.input}
                  type="text"
                  placeholder="Seu nome completo"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className={styles.errorText}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="phone">
                  Telefone
                </label>
                <input
                  id="phone"
                  className={styles.input}
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <span id="phone-error" className={styles.errorText}>
                    {errors.phone}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label className={styles.label} htmlFor="service">
                Serviço
              </label>
              <select
                id="service"
                className={styles.select}
                value={selectedServiceId}
                onChange={(event) => setSelectedServiceId(event.target.value)}
                aria-invalid={Boolean(errors.serviceId)}
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name} — R$ {service.price.toFixed(2)}
                  </option>
                ))}
              </select>
              {errors.serviceId && <span className={styles.errorText}>{errors.serviceId}</span>}
            </div>

            <div className={styles.row}>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="date">
                  Data
                </label>
                <input
                  id="date"
                  className={styles.input}
                  type="date"
                  min={minDate}
                  value={date}
                  onChange={(event) => handleDateChange(event.target.value)}
                  aria-invalid={Boolean(errors.date)}
                />
                {errors.date && <span className={styles.errorText}>{errors.date}</span>}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="time">
                  Horário
                </label>
                <select
                  id="time"
                  className={styles.select}
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  disabled={availableSlots.length === 0}
                  aria-invalid={Boolean(errors.time)}
                >
                  <option value="">
                    {date && availableSlots.length === 0 ? 'Fechado nesta data' : 'Selecione um horário'}
                  </option>
                  {availableSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && <span className={styles.errorText}>{errors.time}</span>}
                <span className={styles.hint}>
                  Seg–Sex: {businessConfig.hours.weekdays.split(': ')[1]} · Sáb:{' '}
                  {businessConfig.hours.saturday.split(': ')[1]}
                </span>
              </div>
            </div>

            {selectedService && date && time && (
              <div className={styles.summary}>
                <strong>{selectedService.name}</strong> em{' '}
                <strong>{new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR')}</strong> às{' '}
                <strong>{time}</strong>
              </div>
            )}

            <button type="submit" className={styles.submitButton}>
              Agendar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
