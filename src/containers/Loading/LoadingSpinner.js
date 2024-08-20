import React from 'react';
import { useLoading } from '../context/LoadingContext';
import styled from 'styled-components';

const SpinnerOverlay = styled.div`
  display: ${({ loading }) => (loading ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-left-color: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => {
  const { loading } = useLoading();

  return (
    <SpinnerOverlay loading={loading}>
      <Spinner />
    </SpinnerOverlay>
  );
};

export default LoadingSpinner;
