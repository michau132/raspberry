import React, { Fragment } from 'react';
import styled from 'styled-components';

const ErrorP = styled.p`
  color: red;
`;

const ErrorHoc = Component => (props) => {
  const { fetchError } = props;
  if (fetchError) {
    return (
      <Fragment>
        <ErrorP>Ups something goes wrong</ErrorP>
      </Fragment>
    );
  }
  return (
    <Component {...props} />
  );
};

export default ErrorHoc;
