import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const removeExtension = (str: string): string => {
  const regex = /.\w+/;
  return regex.exec(str)?.[0] ?? str;

};

export const formatImageUrl = (path: string) => {
  if (!path) return;
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  return `${baseUrl}${removeExtension(path)}.jpg`;
};

// Dates

export const formatDate = (date: string) => {
  if (new Date(date).getTime())
    return new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(date));
};

export const transformDateToSimpleMonth = (dateString: string) => {
  const date = parseISO(dateString);
  const formattedDate = format(date, 'dd MMM yyyy', {
    locale: ptBR,
  });

  return formattedDate.toUpperCase();
};

export const extractYear = (date: string) => {
  const dateObj = new Date(date);
  return dateObj.getFullYear();
};