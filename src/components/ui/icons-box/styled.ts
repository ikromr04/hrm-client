import styled, { css } from 'styled-components';

export const StyledIconsBox = styled('span').withConfig({
  shouldForwardProp: (props) => !['color'].includes(props),
})<{ color?: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  min-width: 32px;
  max-width: 32px;
  min-height: 32px;
  max-height: 32px;
  background-color: #f1f5f8;
  border-radius: 4px;
  color: #00b950;

  ${({ color }) => color && css`
    color: ${color};
  `}
`;
