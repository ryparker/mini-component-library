/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '8px',
  },
  medium: {
    height: '12px',
  },
  large: {
    height: '24px',
  },
};

const ProgressBar = ({ value, size }) => {
  const { height } = SIZES[size];
  return (
    <BarBase height={height}>
      <FillBar value={value} />
    </BarBase>
  );
};

const BarBase = styled.div`
  width: 370px;
  height: ${(props) => props.height};
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
`;

const FillBar = styled.div`
  height: 100%;
  background: ${COLORS.primary};
  border-radius: ${(props) => (props.value === 100 ? '8px' : '8px 0 0 8px')};
  width: ${(props) => props.value}%;
`;

export default ProgressBar;
