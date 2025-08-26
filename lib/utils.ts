export const calculateTimePassed = (
  day: number,
  month: number,
  year: number
) => {
  const today = new Date();
  const birth = new Date(year, month - 1, day); // month is 0-indexed in Date constructor

  // Calculate the difference in milliseconds
  const timeDiff = today.getTime() - birth.getTime();

  // Convert milliseconds to years (365.25 days to account for leap years)
  const yearsPassed = timeDiff / (1000 * 60 * 60 * 24 * 365.25);

  return yearsPassed;
};
