import Helper from '../src/helper.js';

describe('isValid function should', () => {
  const params = {
    imageURL: 'https://localhost:3999/img/tea-pot.svg',
    text: 'This is the cake!',
    color1: '#F77E75',
    color2: '#E46B6',
    link: 'https://github.com/AlexTogar/banner_creator',
  };

  test('return boolean', () => {
    expect(typeof Helper.isValid('imageURL', params.imageURL)).toBe('boolean');
  });
  test('return true if the color is valid', () => {
    expect(Helper.isValid('color1', params.color1)).toBeTruthy();
  });
  test('return false if the color is incorrect', () => {
    expect(Helper.isValid('color2', params.color2)).toBeFalsy();
  });
  //etc
});
