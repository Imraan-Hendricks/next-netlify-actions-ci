export function formatTimeLong(
  date: Date,
  {
    locales = 'en-ZA',
    timeZone = 'Africa/Johannesburg',
  }: { locales?: Intl.LocalesArgument; timeZone?: string } = {},
) {
  return date.toLocaleString(locales, {
    timeZone: timeZone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}
