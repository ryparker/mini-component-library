import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  width: ${(props) => props.value?.length * 17}px;
  height: 43px;
  border-radius: 8px;
  padding: 12px 16px;
  background: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  &:focus {
    color: ${COLORS.black};
  }
`;

export default Select;
