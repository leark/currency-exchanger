import className from '../src/js/className.js';

describe('className', () => {
  let className;

  beforeEach(() => {
    className = new className(x);
  });

  test('should correctly create a className object using x', () => {
    expect(className.x).toEqual(x);
  });
});
