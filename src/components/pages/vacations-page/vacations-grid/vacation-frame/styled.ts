import styled, { css } from 'styled-components'

export const Frame = styled('div').withConfig({
  shouldForwardProp: (props) => !['isVacation', 'isAdmin'].includes(props),
}) <{ isVacation: boolean, isAdmin?: boolean }>`
  height: calc(100% + 17px);
  margin: -8px;
  border-right: 1px solid #dce5ef;
  border-bottom: 1px solid #dce5ef;

  ${({ isVacation }) => isVacation && css`
    background-color: #66bb6a;
  `}

  ${({ isAdmin }) => isAdmin && css`
    cursor: pointer;

    &:hover {
      background-color: rgba(102, 187, 106, 48%);
    }
  `}
  
  ${({ isVacation, isAdmin }) => isVacation && isAdmin && css`
    &:hover {
      background-color: rgba(255, 93, 93, 80%);
    }
  `}
`
