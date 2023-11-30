import { styled } from 'styled-components';
import Container from '../../ui/container/container';
import MainLogo from '../../ui/main-logo/main-logo';

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

export const HeaderLogo = styled(MainLogo)`
  margin-right: auto;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  gap: 16px;
`;
