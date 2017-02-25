/* global it describe */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const emailMultiplexer = require('../index');

describe('email-multiplexer', () => {
  it('should export function', () => {
    expect(emailMultiplexer).to.be.instanceof(Function);
  });

  it('should return all email address variants', () => {
    const variants = [
      'hola@gmail.com',
      'hol.a@gmail.com',
      'ho.la@gmail.com',
      'ho.l.a@gmail.com',
      'h.ola@gmail.com',
      'h.ol.a@gmail.com',
      'h.o.la@gmail.com',
      'h.o.l.a@gmail.com'
    ];
    expect(emailMultiplexer('hola@gmail.com')).to.deep.equal(variants);
  });
});
