import ErrorRepository from '../errorBase';

test('Проверка кода ошибки', () => {
  const expectedDescription = 'Error #1';
  const currentDescription = new ErrorRepository(111, 'Error #1');
  expect(expectedDescription).toEqual(currentDescription.translate(111));
});

test('Проверка ошибки при неизвестном коде', () => {
  const currentDescription = new ErrorRepository(111, 'Error #1');
  expect(() => currentDescription.translate(222)).toThrow('Unknown error');
});
