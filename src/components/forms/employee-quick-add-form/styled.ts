import styled from 'styled-components';
import Text from '../../ui/text/text';

export const Form = styled('form')`
  width: 560px;
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 16px)/2));
  gap: 16px;
`;

export const SuccessText = styled(Text)`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #2e7d32;
  }
`;

export const ResponseObject = styled('div')`
  position: relative;
  background-color: #f9f9f9;
  border: 1px solid #d2d2d2;
  grid-column: span 2;
  padding: 8px 16px;
  font-size: 14px;
`;

export const CopyButton = styled('button')`
  border: none;
  background-color: transparent;
  position: absolute;
  right: 0;
  top: 0;
  padding: 4px;
  color: #476887;
  cursor: pointer;
`;
