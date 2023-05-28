import { render, screen } from '@testing-library/react';
import { Homepage } from './Homepage';

test('renders Homepage with Banner and User Form', async () => {
  render(<Homepage />);
  // Banner title
  expect(screen.getByText('Eva Health Technologies')).toBeInTheDocument();
  // User Form title
  expect(screen.getByText('Add User Form')).toBeInTheDocument();
});
