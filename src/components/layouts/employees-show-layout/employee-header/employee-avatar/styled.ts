import Dropdown from '@/components/ui/dropdown-menu/dropdown-menu';
import { StyledInfo } from '@/components/ui/info/styled';
import styled from 'styled-components';

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
