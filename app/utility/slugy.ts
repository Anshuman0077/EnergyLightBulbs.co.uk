

export function generateSlug(text: string, index?: number): string {
  const base = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
  return index !== undefined ? `${base}-${index}` : base;
}