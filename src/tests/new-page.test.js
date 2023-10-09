import React from 'react';
import { render, screen } from '@testing-library/react';
import NewPage from '../../pages/new-page.tsx';

test('Text Validation: "Fortaleza"', () => {
  render(<NewPage />);
  const textElements = screen.getAllByText(/Fortaleza/i);
  expect(textElements.length).toBeGreaterThanOrEqual(0);

  const numberOfOccurrences = textElements.length;
  expect(numberOfOccurrences).toBeGreaterThan(0);
  console.log(`Número de ocorrências da palavra "Fortaleza": ${numberOfOccurrences}`);
});
