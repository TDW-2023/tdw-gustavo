import React from "react";
import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import NewPage from "../../pages/new-page";

test('Text Validation: "Fortaleza"', () => {
  render(<NewPage />);
  const textElements = screen.getAllByText(/Fortaleza/i);
  expect(textElements.length).toBeGreaterThanOrEqual(0);

  const numberOfOccurrences: number = textElements.length;
  expect(numberOfOccurrences).toBeGreaterThan(0);
  console.log(
    `Número de ocorrências da palavra "Fortaleza": ${numberOfOccurrences}`,
  );
});

test("Snapshot for NewPage", () => {
  const component = renderer.create(<NewPage />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
