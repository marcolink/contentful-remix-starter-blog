export function toReadableDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {year: "numeric", month: "long", day: "numeric"}
    return new Date(dateString).toLocaleDateString(["de-DE"], options)
}
