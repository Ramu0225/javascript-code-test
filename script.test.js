const fiboEvenSum = require("./even_fibonacci");
const largestPrimeFactor = require("./largest_prime_factor");
const multiplesOf3and5 = require("./project_euler");

describe('fibonacci', () => {
  test('fiboEvenSum(10) to equal 10', () => {
    expect(fiboEvenSum(11)).toBe(10);
  });
});

describe('multiplesof3and5', () => {
  it("mmultiplesOf3and5(49) to equal 543", () => {
    expect(multiplesOf3and5(49)).toBe(543);
  });
});
describe('largestPrimeFactor upto 9-digit', () => {
  it("largestprimeFactor(8) is equal to 2", () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  })
})