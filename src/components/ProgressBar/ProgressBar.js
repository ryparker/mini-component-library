/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '8px',
    padding: '0',
    radius: '4px',
  },
  medium: {
    height: '12px',
    padding: '0',
    radius: '4px',
  },
  large: {
    height: '24px',
    padding: '4px',
    radius: '8px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Invalid ProgressBar size: ${size}`);
  }

  return (
    <BarBase
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      style={{
        // @ts-ignore - TS doesn't like CSS vars
        '--height': styles.height,
        '--padding': styles.padding,
        '--radius': styles.radius,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <FillBar
        // @ts-ignore - TS doesn't like CSS vars
        style={{ '--width': value + '%' }}
      />
    </BarBase>
  );
};

const BarBase = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  /* Trim off corners when progress bar is near full */
  overflow: hidden;
`;

const FillBar = styled.div`
  height: 100%;
  background: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
  width: var(--width);
`;

export default ProgressBar;
