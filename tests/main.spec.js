import { expect } from 'chai';
import { sum, sub, mult, div } from '../src/main';

describe('Calc', () => {

  // smoke tests
  describe('smoke tests', () => {
    it('should exists method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exists method minus', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exists method multiply', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('should exists method divide', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when `sub(6,2)`', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });

    it('should return -4 when `sub(2,6)`', () => {
      expect(sub(2, 6)).to.be.equal(-4);
    });
  });

  describe('mult', () => {
    it('should return 4 when `mult(2,2)`', () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });

  describe('div', () => {
    it('should return 4 when `div(8,2)`', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('should return `It is impossible to divide by zero` when divide by zero', () => {
      expect(div(4, 0)).to.be.equal('It is impossible to divide by zero');
    });
  });

});
