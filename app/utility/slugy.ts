

export function generateSlug(text: string):string {
    return  text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "");
}