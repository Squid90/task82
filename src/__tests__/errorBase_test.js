import ErrorRepository from '../errorBase';

test('Проверка кода ошибки', () => {
  const expectedDescription = 'Error #1';
  const currentDescription = new ErrorRepository();
  expect(expectedDescription).toEqual(currentDescription.translate(111));
});

test('Проверка ошибки при неизвестном коде', () => {
  const currentDescription = new ErrorRepository();
  expect(() => currentDescription.translate(222)).toThrow('Unknown error');
});
