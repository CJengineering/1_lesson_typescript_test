import { romanNumber } from '.';

test('it should resolve number 1 into roman number', () => {
  // Arrange
  const input = 1;
  // Act
  const output = romanNumber(input);
  // Assert
  expect(output).toBe('I');
});

test('it should resolve number 2 into roman number', () => {
  // Arrange
  const input = 2;
  // Act
  const output = romanNumber(input);
  // Assert
  expect(output).toBe('II');
});

test('it should resolve number 3 into roman number', () => {
  // Arrange
  const input = 3;
  // Act
  const output = romanNumber(input);
  // Assert
  expect(output).toBe('III');
});

test('it should resolve number 4 into roman number', () => {
  // Arrange
  const input = 4;
  // Act
  const output = romanNumber(input);
  // Assert
  expect(output).toBe('IV');
});
