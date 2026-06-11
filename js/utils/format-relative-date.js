export function formatRelativeDate(dateString) {
  const now = Date.now();

  const target = new Date(dateString).getTime();

  const difference = now - target;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  if (days === 0) return "Today";

  if (days === 1) return "1 day ago";

  if (days < 7) return `${days} days ago`;

  const weeks = Math.floor(days / 7);

  if (weeks === 1) return "1 week ago";

  if (weeks < 5) return `${weeks} weeks ago`;

  const months = Math.floor(days / 30);

  if (months === 1) return "1 month ago";

  if (months < 12) return `${months} months ago`;

  const years = Math.floor(days / 365);

  if (years === 1) return "1 year ago";

  return `${years} years ago`;
}
