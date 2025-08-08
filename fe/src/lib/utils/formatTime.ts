export function formatTimeAgo(date: Date | string): string {
  const now = new Date();
  const target = typeof date === "string" ? new Date(date) : date;
  const diff = now.getTime() - target.getTime();

  const diffInMinutes = Math.floor(diff / 1000 / 60);
  const diffInHours = Math.floor(diff / 1000 / 60 / 60);
  const diffInDays = Math.floor(diff / 1000 / 60 / 60 / 24);

  if (diffInMinutes < 1) return "a minute ago";
  if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;

  if (diffInHours === 1) return "an hour ago";
  if (diffInHours < 24) return `${diffInHours} hours ago`;

  if (diffInDays === 1) return "a day ago";
  if (diffInDays <= 3) return `${diffInDays} days ago`;

  return target.toLocaleDateString();
}
