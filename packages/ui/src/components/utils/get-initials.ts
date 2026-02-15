/**
 * Extracts up to two initials from a full name string.
 */
export function getInitials(name: string | undefined): string {
    if (!name) return ''

    const words = name.trim().split(/\s+/) // `\s+` matches one or more whitespace characters
    if (words.length === 0) return ''

    const first = words[0]?.[0] ?? ''
    const last = words.length > 1 ? (words[words.length - 1]?.[0] ?? '') : ''

    return (first + last).toUpperCase()
}
