export function toReadableDate(dateString: string, locale = "de-DE"): string {
    const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString([locale], options)
}
