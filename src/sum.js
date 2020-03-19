const sum = (a, b, ...others) => [a, b, ...others].reduce((total, n) => total + n, 0);

export default sum;


/** ?
 * Add Two Numbers
 * Add Multiple numbers
 * SOlve for edge cases
 */
