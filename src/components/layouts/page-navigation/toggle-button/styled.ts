import styled, { css } from 'styled-components';

export const StyledButton = styled('button').withConfig({
  shouldForwardProp: (props) => !['isCollapsed'].includes(props),
})<{ isCollapsed: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  width: calc(100% - 16px);
  max-width: 200px;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 8px;
  color: #6c86ab;
  border: none;
  background-color: transparent;
  font-size: 14px;
  margin: 2px 8px;
  font-weight: 500;
  border-radius: 4px;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
  transition: .3s;

  &>svg {
    display: block;
    min-width: 16px;
    transition: .3s;
  }

  &:hover {
    background-color: #f1f5f8;
  }
  ${({ isCollapsed }) => isCollapsed && css`
    max-width: 32px;
    color: transparent;

    svg {
      color: #6c86ab;
      transform: scale(-1);
    }
  `}
`;
