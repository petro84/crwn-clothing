import React from 'react';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...formProps }) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...formProps} />
    {label ? (
      <FormInputLabel className={formProps.value.length ? 'shrink' : ''}>
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
