import styled from 'styled-components';
import Dropdown from '../../../../ui/dropdown/dropdown';
import { StyledInfo } from '../../../../ui/info/styled';

export const  StyledDropdown = styled(Dropdown)`
  margin-top: 24px;
`;

export const Avatar = styled('img')`
  display: flex;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  min-width: 144px;

  &:hover+${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }
`;
