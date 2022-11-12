import { render, screen } from '@testing-library/react';
import JsApp from "./component/App";

test('renders learn react link', () => {
  render(<JsApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
