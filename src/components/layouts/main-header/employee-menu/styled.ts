import CaretIcon from '@/components/icons/caret-icon';
import styled from 'styled-components';

export const Dropdown = styled('div')`
  position: relative;
`

export const StyledButton = styled('button')`
  border: 0;
  padding: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #212121;
  cursor: pointer;
`;

export const Avatar = styled('img')`
  object-fit: cover;
  border-radius: 50%;
`;

export const DropdownIcon = styled(CaretIcon)`
  width: 8px;
  transition: .3s;
`;
