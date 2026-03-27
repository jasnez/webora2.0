export interface ContactConfig {
  email: string;
  phone: string;
  whatsapp: string | null;
  location: string;
  hours: string;
  linkedin: string | null;
  twitter: string | null;
  response: string;
}

export const CONTACT: ContactConfig = {
  email: "info@webora.ba",
  phone: "+387 62 341 256",
  whatsapp: null,
  location: "Sarajevo, Bosna i Hercegovina",
  hours: "Pon–Pet, 09:00–17:00",
  linkedin: null,
  twitter: null,
  response: "24h",
};
