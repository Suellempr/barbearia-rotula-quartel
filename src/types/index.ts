export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface Advantage {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface BusinessHours {
  weekdays: string; // Monday - Friday
  saturday: string;
}

export interface ScheduleFormData {
  name: string;
  phone: string;
  serviceId: string;
  date: string; // yyyy-mm-dd
  time: string; // HH:mm
}
