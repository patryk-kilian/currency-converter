/**
 * Formats a number by removing trailing zeros after the decimal point.
 * If the number has no decimal places, it returns it as an integer.
 *
 * @param num - The number to format
 * @returns A string representation of the formatted number
 */
export const formatNumber = (num: number): string => {
  return num.toFixed(2).replace(/\.?0+$/, '');
};

/**
 * Parses a string to a number and formats it by removing trailing zeros.
 * Returns an empty string if the input is empty or not a valid number.
 *
 * @param str - The string to parse and format
 * @returns A string representation of the formatted number or an empty string
 */
export const formatStringNumber = (str: string): string => {
  if (str === '' || isNaN(Number(str))) {
    return '';
  }
  return formatNumber(parseFloat(str));
};

/**
 * Validates if the input string is a valid number or an empty string.
 * Allows for numbers with up to two decimal places.
 *
 * @param value - The string to validate
 * @returns True if the input is valid, false otherwise
 */
export const isValidNumberInput = (value: string): boolean => {
  return /^$|^\d*\.?\d{0,2}$/.test(value);
};
