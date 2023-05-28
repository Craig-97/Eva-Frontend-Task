import { useEffect, useRef, useState } from 'react';
import { Alert, Form, Spinner } from 'react-bootstrap';
import { createUser } from '../../api/UserAPI';
import { UserReponse } from '../../types';
import { calculateAge, formatDate } from '../../utils';
import { FormTitle, StyledFormControl, StyledFormGroup, SubmitButton } from './UserFormStyles';

export const UserForm = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>();
  const formRef = useRef<HTMLFormElement>(null);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<string>('');

  // Ensuring timeout is cleared upon component unmount
  useEffect(() => {
    const timeoutId = timeoutRef?.current;
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Reset form fields and validation state
  const handleReset = () => {
    formRef?.current?.reset();
    setValidated(false);
  };

  // Show Success message with user id, disspears after 5 seconds
  const showSuccess = (user: UserReponse) => {
    setSuccessMsg(`User ${user?.id} created successfully`);

    const timeout = setTimeout(() => {
      setSuccessMsg('');
    }, 5000);
    timeoutRef.current = timeout;
  };

  // Checks form is valid, attempts to creates a new user and displays result
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setValidated(true);

    const form = event.currentTarget;

    if (form.checkValidity() === true) {
      const formData = new FormData(form);
      const values = Object.fromEntries(formData.entries()) as { [k in string | number]: string };

      setLoading(true);
      const user = await createUser({
        firstName: values.firstName,
        lastName: values.lastName,
        age: calculateAge(values.dob),
        email: values.email
      });
      setLoading(false);

      if (user) showSuccess(user);
      handleReset();
    }
  };

  return (
    <div>
      <FormTitle>Add User Form</FormTitle>
      <Form ref={formRef} noValidate validated={validated} onSubmit={handleSubmit}>
        {successMsg && <Alert variant="success">{successMsg}</Alert>}

        <StyledFormGroup controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <StyledFormControl
            disabled={loading}
            required
            name="firstName"
            type="text"
            placeholder="First Name"
          />
          <Form.Control.Feedback type="invalid">
            Please enter your first name.
          </Form.Control.Feedback>
        </StyledFormGroup>

        <StyledFormGroup controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <StyledFormControl
            disabled={loading}
            required
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
          <Form.Control.Feedback type="invalid">Please enter your last name.</Form.Control.Feedback>
        </StyledFormGroup>

        <StyledFormGroup controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <StyledFormControl
            disabled={loading}
            required
            type="date"
            name="dob"
            max={formatDate(new Date())}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid date of birth.
          </Form.Control.Feedback>
        </StyledFormGroup>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <StyledFormControl
            disabled={loading}
            required
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid email address.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <SubmitButton disabled={loading} type="submit">
            {!loading ? 'Submit' : <Spinner size="sm" />}
          </SubmitButton>
        </Form.Group>
      </Form>
    </div>
  );
};
