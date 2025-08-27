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

/**
 * Formats a date string to "Jan 2025" format
 * @param dateString - Date string in "YYYY-MM-DD" format
 * @returns Formatted date string like "Jan 2025" or "Present" if invalid
 */
export const formatDateToMonthYear = (dateString: string): string => {
  // Parse the date string manually to avoid timezone issues
  const [year, month, day] = dateString.split("-").map(Number);

  // Create date using local timezone (month is 0-indexed in Date constructor)
  const date = new Date(year, month - 1, day);

  // Check if date is valid
  if (isNaN(date.getTime())) {
    return "Present";
  }

  const monthName = date.toLocaleDateString("en-US", { month: "short" });
  const yearValue = date.getFullYear();

  return `${monthName} ${yearValue}`;
};

/**
 * Calculates the duration between start and end dates in months and years
 * @param startDate - Start date string in "YYYY-MM-DD" format
 * @param endDate - End date string in "YYYY-MM-DD" format or "Present"
 * @returns Object with years and months, or "Present" if endDate is "Present"
 */
export const calculateDuration = (
  startDate: string,
  endDate: string
): { years: number; months: number } | "Present" => {
  if (endDate === "Present") {
    return "Present";
  }

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Check if dates are valid
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return { years: 0, months: 0 };
  }

  // Calculate difference in months
  const yearDiff = end.getFullYear() - start.getFullYear();
  const monthDiff = end.getMonth() - start.getMonth();

  let totalMonths = yearDiff * 12 + monthDiff;

  // Adjust for day differences
  if (end.getDate() < start.getDate()) {
    totalMonths--;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months };
};

/**
 * Formats duration in a human-readable format
 * @param duration - Duration object with years and months, or "Present"
 * @param startDate - Start date for calculating current duration if ongoing
 * @returns Formatted duration string like "2 years 3 months" or "1 year 5 months" for ongoing
 */
export const formatDuration = (
  duration: { years: number; months: number } | "Present",
  startDate?: string
): string => {
  if (duration === "Present" && startDate) {
    // Calculate current duration for ongoing positions
    const start = new Date(startDate);
    const today = new Date();

    // Calculate difference in months
    const yearDiff = today.getFullYear() - start.getFullYear();
    const monthDiff = today.getMonth() - start.getMonth();

    let totalMonths = yearDiff * 12 + monthDiff;

    // Adjust for day differences
    if (today.getDate() < start.getDate()) {
      totalMonths--;
    }

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0 && months === 0) return "Less than 1 month";
    if (years === 0) return `${months} month${months === 1 ? "" : "s"}`;
    if (months === 0) return `${years} year${years === 1 ? "" : "s"}`;
    return `${years} year${years === 1 ? "" : "s"} ${months} month${
      months === 1 ? "" : "s"
    }`;
  }

  if (duration === "Present") return "Present";

  const { years, months } = duration;
  if (years === 0 && months === 0) return "Less than 1 month";
  if (years === 0) return `${months} month${months === 1 ? "" : "s"}`;
  if (months === 0) return `${years} year${years === 1 ? "" : "s"}`;
  return `${years} year${years === 1 ? "" : "s"} ${months} month${
    months === 1 ? "" : "s"
  }`;
};

/**
 * Calculates the time left to live by subtracting current age from 80 years
 * @param day - Birth day
 * @param month - Birth month
 * @param year - Birth year
 * @returns Number of years left to live (80 - current age)
 */
export const calculateTimeLeft = (day: number, month: number, year: number) => {
  const currentAge = calculateTimePassed(day, month, year);
  const yearsLeft = 80 - currentAge;
  return Math.max(0, yearsLeft); // Ensure it doesn't go negative
};
