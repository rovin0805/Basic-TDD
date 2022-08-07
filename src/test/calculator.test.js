const Calculator = require('../calculator.js');

describe('Calculator Test', () => {
  let cal;

  beforeEach(() => {
    cal = new Calculator();
  });

  it('inits with 0', () => {
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    cal.set(0);
    expect(cal.value).toBe(0);
  });

  it('clears', () => {
    cal.set(7);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('adds', () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  it('subtracts', () => {
    cal.set(1);
    cal.subtract(2);
    expect(cal.value).toBe(-1);
  });

  it('multiplies', () => {
    cal.set(1);
    cal.multiply(2);
    expect(cal.value).toBe(2);
  });

  describe('divides', () => {
    it('0/0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBeNaN();
    });

    it('1/0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4/2 === 2', () => {
      cal.set(4);
      cal.divide(2);
      expect(cal.value).toBe(2);
    });
  });
});
