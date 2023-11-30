import styled from 'styled-components';
import CaretIcon from '../../../icons/caret-icon';

export const DropdownButton = styled('button')`
  border: 0;
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #000f30;
  cursor: pointer;
`;

export const Avatar = styled('img')`
  object-fit: cover;
  border-radius: 50%;
`;

export const DropdownIcon = styled(CaretIcon)`
  width: 8px;
  fill: #476887;
  transition: .3s;
`;
