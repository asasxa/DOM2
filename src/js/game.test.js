test('imdb formatting', () => {
  const imdb = 9.3;
  expect(imdb.toFixed(2)).toBe('9.30');
});