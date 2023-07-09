/**
 * Converts the input value to a string for primitive types and returns an empty string for other types.
 * @param {*} input - The input value to be converted to a string.
 * @returns {string} - The converted string value or an empty string.
 */
export function convertToString(input: unknown): string {
	if (
		typeof input === 'string' ||
		typeof input === 'number' ||
		typeof input === 'boolean'
	) {
		return input.toString();
	} else {
		return '';
	}
}
