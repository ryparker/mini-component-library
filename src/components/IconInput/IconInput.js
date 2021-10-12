import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    borderSize: '1px',
    iconSize: '10px',
    fontSize: '14px',
  },
  large: {
    borderSize: '2px',
    iconSize: '16px',
    fontSize: '18px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const { borderSize, iconSize, fontSize } = SIZES[size];
  return (
    <>
      <VisuallyHidden>{label}</VisuallyHidden>

      <Wrapper borderSize={borderSize} width={width}>
        <InlineIcon id={icon} size={iconSize} fontSize={fontSize} />
        <TextInput placeholder={placeholder} iconSize={iconSize} />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: ${(p) => p.width};
  border-bottom: ${(p) => p.borderSize} solid ${COLORS.black};

  :hover {
    border-bottom: 2px solid ${COLORS.black};
  }
`;

const InlineIcon = styled(Icon)`
  display: inline-block;
  color: ${COLORS.gray700};

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  display: inline-block;
  border: none;
  font-size: ${(p) => p.fontSize};
  margin-left: 2px;
  color: ${COLORS.gray700};
  font-weight: bold;
  width: calc(100% - ${(p) => p.iconSize} - 2px);
  padding-bottom: 4px;

  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  ${Wrapper}:hover & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
