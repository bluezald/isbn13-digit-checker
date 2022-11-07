export default function useISBN13CheckDigit() {
  const getCompleteISBN13Code = (barcode) => {
    // convert barcode to array of digit
    const digits = Array.from(String(barcode), Number);
    // reduce by alternatively summing up a product of a digit to 1 and 3
    const products = digits.map((digit, index) => {
      const multiplier = index % 2 === 0 ? 1 : 3;
      return digit * multiplier;
    });
    const total = products.reduce((a, b) => a + b, 0);
    // get modulo of the summed figure
    // Subtract the result to 10 and if the result is 10 then set the final digit to 0
    const result = 10 - (total % 10);
    const lastDigit = result === 10 ? 0 : result;
    return `${barcode}${lastDigit}`;
  };

  return { getCompleteISBN13Code };
}
