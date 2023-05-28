import { act, fireEvent, render, screen } from '@testing-library/react';
import { UserForm } from './UserForm';

describe('UserForm', () => {
  // Mock createUser API call
  beforeEach(() => {
    jest
      .spyOn(global, 'fetch')
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve({ id: 123456789 }) })
        ) as jest.Mock
      );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders form with title, fields and submit button', async () => {
    render(<UserForm />);
    // Form Title
    expect(screen.getByText('Add User Form')).toBeInTheDocument();
    // First name input
    expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    // Last name input
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument();
    // Date of birth input
    expect(screen.getByLabelText('Date of Birth')).toBeInTheDocument();
    // Email address input
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    // Submit button
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  test('renders form and submits, expect errors to be displayed for each field', async () => {
    render(<UserForm />);

    const submitButton = screen.getByRole('button', { name: /Submit/i });

    fireEvent.click(submitButton);

    // Field Errors
    expect(screen.getByText('Please enter your first name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter your last name.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid date of birth.')).toBeInTheDocument();
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  test('renders form and submits inalid email address, dsiplays error', async () => {
    render(<UserForm />);

    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    // Add invalid email and click submit
    fireEvent.change(emailInput, { target: { value: 'craig' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument();
  });

  test('renders form and submits future date of birth. displays error', async () => {
    render(<UserForm />);

    const dobInput = screen.getByLabelText('Date of Birth');
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    // Add invalid date and click submit
    fireEvent.change(dobInput, { target: { value: '2050-01-01' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('Please enter a valid date of birth.')).toBeInTheDocument();
  });

  test('renders form, submits fields with valid data', async () => {
    render(<UserForm />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const dobInput = screen.getByLabelText('Date of Birth');
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByRole('button', { name: /Submit/i });

    // Add valid data to inputs
    fireEvent.change(firstNameInput, { target: { value: 'Craig' } });
    fireEvent.change(lastNameInput, { target: { value: 'Baxter' } });
    fireEvent.change(dobInput, { target: { value: '1997-09-08' } });
    fireEvent.change(emailInput, { target: { value: 'craig@example.com' } });

    fireEvent.click(submitButton);

    // Submit button becomes disabled
    expect(submitButton).toHaveAttribute('disabled');

    // Wait for success message to be displayed
    await screen.findByText('User 123456789 created successfully');

    // Check form fields have been reset
    expect(firstNameInput).toHaveValue('');
    expect(lastNameInput).toHaveValue('');
    expect(dobInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
  });
});
