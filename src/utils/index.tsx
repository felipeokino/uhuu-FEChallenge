export const removeExtension = (str: string): string => {
  const regex = /.\w+/;
  return regex.exec(str)?.[0] ?? str;

};

export const formatImageUrl = (path: string) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original';
  return `${baseUrl}${removeExtension(path)}.jpg`;
};

// Dates

export const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(date));
};