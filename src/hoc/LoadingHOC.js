import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  position: absolute; 
  top: 28%;
  left: 36%;
  transform: translate(-50%, -50%);
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid red;
  width: 120px;
  height: 120px;
  animation: ${spin} 2s linear infinite;
`;


const LoadingHOC = Component => (props) => {
  const { loading } = props;
  return (
    <div>
      {loading ? <LoadingSpinner /> : <Component {...props} />}
    </div>
  );
};

export default LoadingHOC;
