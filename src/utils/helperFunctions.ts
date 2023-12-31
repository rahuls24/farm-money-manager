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
/**
 * It should only use for mocking the api
 * delayForGivenTime is a function that returns a new promise after a certain amount of time
 * @param {number} time - The time in milliseconds for which the promise should be delayed
 * @returns {Promise<number>} - Returns a promise that resolves with a value of 24
 */
export function delayForGivenTime(time: number): Promise<number> {
	return new Promise((res, rej) => {
		setTimeout(() => {
			res(24);
		}, time);
	});
}
