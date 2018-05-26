'use strict';

const ifo = require('./index.js');

describe('ifo-od', () => {
  it('should run ifo no expression', () => {
    let val = [];
    ifo(() => {
      val.push('ifo');
    });
    expect(val).toMatchObject(['ifo']);
  });

  it('should run ifo, not od', () => {
    let val = [];
    ifo(() => true, () => {
      val.push('ifo');
    }).od(() => {
      val.push('od');
    });
    expect(val).toMatchObject(['ifo']);
  });

  it('should run od, not ifo', () => {
    let val = [];
    ifo(() => false, () => {
      val.push('ifo');
    }).od(() => {
      val.push('od');
    });
    expect(val).toEqual(['od']);
  });

  it('shoult run conditional od', () => {
    let val = [];
    ifo(() => false, () => {
      val.push('ifo');
    }).od(() => true, () => {
      val.push('od1');
    }).od(() => {
      val.push('od2');
    });
    expect(val).toEqual(['od1']);
  });
});
