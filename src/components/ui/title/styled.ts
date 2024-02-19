import { css, styled } from 'styled-components'

export const StyledTitle = styled('h2').withConfig({
  shouldForwardProp: (props) => !['small', 'large'].includes(props),
})<{ small?: boolean, large?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
  color: #212121;

  ${({ small }) => small && css`
    font-size: 16px;
  `}

  ${({ large }) => large && css`
    font-size: 24px;
  `}
`
