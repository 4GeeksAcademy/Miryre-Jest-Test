// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

// 1️⃣ Test the sum function
test('adds 14 + 9 to equal 23', () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

// 2️⃣ Test euro to dollar conversion
test("3.5 euros should be approximately 3.745 dollars", () => {
  const euros = 3.5;
  const expected = 3.5 * 1.07; // Assuming 1 euro = 1.07 dollars
  expect(fromEuroToDollar(euros)).toBeCloseTo(expected, 2);
});

// 3️⃣ Test yen to pound conversion (correct description and expected value!)
test("3.5 yen should be approximately 0.02188 pounds", () => {
  const yen = 3.5;
  const expected = 3.5 * 0.00625; // Assuming 1 yen = 0.00625 pounds (confirm this rate!)
  expect(fromYenToPound(yen)).toBeCloseTo(expected, 4);
});

// 4️⃣ Test dollar to yen conversion
test("3.5 dollars should be approximately 511.61 yen", () => {
  const dollars = 3.5;
  const expected = 3.5 / 1.07 * 156.5; // dollars → euros → yen conversion
  expect(fromDollarToYen(dollars)).toBeCloseTo(expected, 2);
});
