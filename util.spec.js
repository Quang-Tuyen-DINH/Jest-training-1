const { checkAndGenerate, createElement } = require('./util');

test('should output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)');
});

test('should generate a valid text output', () => {
  const text = createElement('li', 29);
  expect(text).toBe('Max (29 years old)');
});