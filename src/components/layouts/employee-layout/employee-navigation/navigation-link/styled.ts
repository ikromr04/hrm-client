import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledLink = styled(Link).withConfig({
  shouldForwardProp: (props) => !['isCurrent'].includes(props),
})<{ isCurrent: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  border: none;
  text-decoration: none;
  border-radius: 4px;
  padding: 4px 8px;
  color: #6c86ab;
  cursor: pointer;
  border: 1px solid transparent;
  transition: .3s;

  ${({ isCurrent }) => isCurrent && css`
    border: 1px solid #dce5ef;
    box-shadow: 0px 1px 4px rgba(9,8,61,0.08);
    background-color: white;
    pointer-events: none;
  `}
`;
