export const getTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const amOrPm = hours >= 12 ? 'pm' : 'am';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const timeString = `${formattedHours}:${formattedMinutes} ${amOrPm}`;
  return timeString;
};
