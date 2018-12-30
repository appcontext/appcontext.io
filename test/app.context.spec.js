'use strict';

const expect = require('chai').expect;
const AppContext = require('../lib');

describe('app.context.js tests', () => {
  describe('#AppContext', () => {
    afterEach(() => {
      AppContext.reset();
    })

    it('expect to set and get the resource', () => {
      // arranges
      const resource = {};
      AppContext.set('test', resource);

      // acts
      const result = AppContext.get('test');

      // asserts
      expect(result).to.equal(resource);
    });

    it('expect to determine whether the context contains a resource', () => {
      // arranges
      AppContext.set('test', undefined);

      // acts
      const positive = AppContext.contains('test');
      const negative = AppContext.contains('others');

      // asserts
      expect(positive).to.be.true;
      expect(negative).to.be.false;
    });

    it('expect to reset the context', () => {
      // arranges
      AppContext.set('test', undefined);

      // acts
      const positive = AppContext.contains('test');
      AppContext.reset();
      const negative = AppContext.contains('test');

      // asserts
      expect(positive).to.be.true;
      expect(negative).to.be.false;
    });
  });
});
