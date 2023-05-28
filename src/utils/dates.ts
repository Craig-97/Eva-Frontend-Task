// Returns dd-mm-yyyy format string from Date() object
export const formatDate = (date: Date) => date?.toISOString().split('T')[0];

// Returns age as a number from a date string
export const calculateAge = (date: string) => {
  const dob = new Date(date);
  let timeDiff = Math.abs(Date.now() - dob.getTime());
  return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
};
