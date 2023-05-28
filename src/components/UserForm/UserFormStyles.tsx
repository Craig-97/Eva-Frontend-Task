import styled from 'styled-components';
import { COLORS } from '../../styles';
import { Button, Form } from 'react-bootstrap';

export const FormTitle = styled.h2`
  color: ${COLORS.PRIMARY};
  margin-bottom: 1.25rem;
`;

export const StyledFormGroup = styled(Form.Group)`
  margin-bottom: 1rem;
`;

export const StyledFormControl = styled(Form.Control)`
  &:focus {
    border-color: ${COLORS.PRIMARY};
    box-shadow: 0 0 0 0.25rem ${COLORS.PRIMARY_SHADOW};
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1.25rem;
  border-color: ${COLORS.PRIMARY};
  background-color: ${COLORS.PRIMARY};

  &:hover,
  &:focus {
    background-color: ${COLORS.SECONDARY};
  }

  &:disabled {
    border-color: ${COLORS.PRIMARY};
    background-color: ${COLORS.PRIMARY};
  }
`;
