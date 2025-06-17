export function ratingWidthStyle(rating: number): string {
  return `${rating * (100 / 5)}%`;
}
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
