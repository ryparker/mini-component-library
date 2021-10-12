import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    borderThickness: 1,
    iconSize: 16,
    fontSize: 14,
    height: 24,
  },
  large: {
    borderThickness: 2,
    iconSize: 24,
    fontSize: 18,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = SIZES[size];

  if (!styles) {
    throw new Error(`Invalid IconInput size: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          // @ts-ignore - TS doesn't like CSS vars
          '--size': styles.iconSize + 'px',
        }}
      >
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          // @ts-ignore - TS doesn't like CSS vars
          '--width': width + 'px',
          // Scale height with user default font-size.
          '--height': styles.height / 16 + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
          '--font-size': styles.fontSize / 16 + 'rem',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: auto 0;
  height: var(--size);
`;

const TextInput = styled.input`
  width: var(--width);
  height: var(--height);
  padding-left: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  outline-offset: 2px;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
