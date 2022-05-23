import { render, screen } from '@testing-library/react';
import Signin from '../Signin';

test('renders learn react link', () => {
  render(<Signin />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  const headerElement = screen.getByRole("heading", { name: "Signin with Email"});
  expect(headerElement).toBeInTheDocument();
});