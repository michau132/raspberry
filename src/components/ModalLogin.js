/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { compose } from 'recompose';
import LoadingHOC from '../hoc/LoadingHOC';
import ErrorHoc from '../hoc/ErrorHoc';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h4`
  letter-spacing: 2px;
  margin-bottom: 30px;
`;

const Input = styled.input`
  text-align: center;
  margin-bottom: ${({ borderError }) => (borderError ? 0 : '30px')};
  border: none;
  border-bottom: 1px solid ${({ borderError }) => (borderError ? ' red' : 'rgb(14, 1, 3)')};
  width: 235px;
  
  :focus {
    outline: none;
    border-bottom: 1px solid blue;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  color: #fff;
  background-color: #a83a5e;
  cursor: pointer;
  border: none;
  word-spacing: 3px;
  padding: 15px 90px;
  border-radius: 60px;
`;

const ErrorTextStyle = styled.span`
  color: red;
`;


const ModalLogin = ({
  onFormSubmit, updateValue, emailValue, passwordValue, error,
}) => {
  const errorText = <ErrorTextStyle>This field can&apos;t be empty</ErrorTextStyle>;
  const isEmailValueError = error && !emailValue.length;
  const isPasswordValueError = error && !passwordValue.length;
  return (
    <Form onSubmit={onFormSubmit}>
      <Title>Are you Raspberry Knight?</Title>
      <Input
        type="email"
        placeholder="Email"
        value={emailValue}
        onChange={updateValue}
        autoFocus
        borderError={isEmailValueError}
      />
      {isEmailValueError && errorText}
      <Input
        type="password"
        placeholder="Password"
        value={passwordValue}
        onChange={updateValue}
        borderError={isPasswordValueError}
      />
      {isPasswordValueError && errorText}
      <Button type="submit">log in</Button>
    </Form>
  );
};

export default compose(
  LoadingHOC,
  ErrorHoc,
)(ModalLogin);
