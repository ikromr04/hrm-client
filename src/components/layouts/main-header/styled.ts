import Container from '@/components/ui/container/container';
import Dropdown from '@/components/ui/dropdown/dropdown';
import { DropdownMenu } from '@/components/ui/dropdown/styled';
import { styled } from 'styled-components';

export const Header = styled('header')`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 8px 0;
  background-color: white;
  border-bottom: 1px solid #dce5ef;
  box-shadow: 0 0px 4px rgba(0,0,0,0.05);
  margin-bottom: 16px;
  transition: .3s;

  .modal-shown & {
    transform: translateY(-100%);
  }
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const QuickAddDropdown = styled(Dropdown)`
  ${DropdownMenu} {
    top: calc(100% + 2px);
  }
`;
