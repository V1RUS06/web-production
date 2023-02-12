import { classNames } from './classNames';

describe('classNames', () => {
  test('with only one params', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';

    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true }, ['class1', 'class2']))
      .toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered';

    expect(classNames('someClass', { hovered: true }, ['class1', 'class2']))
      .toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'someClass class1 class2 scrollable';

    // eslint-disable-next-line max-len
    expect(classNames('someClass', { hovered: false, scrollable: true }, ['class1', 'class2']))
      .toBe(expected);
  });
  test('with mods undefined', () => {
    const expected = 'someClass class1 class2';

    // eslint-disable-next-line max-len
    expect(classNames('someClass', { hovered: undefined }, ['class1', 'class2']))
      .toBe(expected);
  });
});
