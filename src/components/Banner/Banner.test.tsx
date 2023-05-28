import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';

test('renders Banner with image, title and subtitle', async () => {
  render(<Banner />);
  // Image
  expect(screen.getByAltText('Eva Health Technologies logo')).toBeInTheDocument();
  // Title
  expect(screen.getByText('Eva Health Technologies')).toBeInTheDocument();
  // Subtitle
  expect(screen.getByText('Smarter health and wellbeing records')).toBeInTheDocument();
});
