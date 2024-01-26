import SquareCheckIcon from '@/components/icons/square-check-icon';
import SquareIcon from '@/components/icons/square-icon';
import styled, { css } from 'styled-components';

export const Label = styled('label').withConfig({
  shouldForwardProp: (props) => !['large', 'bold'].includes(props),
})<{ large?: boolean, bold?: boolean }>`
  display: flex;
  align-items: center;
  max-width: max-content;
  gap: 4px;
  cursor: pointer;

  ${({ large }) => large && css`
    font-size: 16px;

    ${CheckedIcon},
    ${UncheckedIcon} {
      width: 22px;
      height: 22px;
    }
  `}

  ${({ bold }) => bold && css`
    font-weight: 600;
  `}

  input:disabled+span {
    color: #bdbdbd;
    cursor: context-menu;
  }
`

export const CheckedIcon = styled(SquareCheckIcon)`
  display: none;

  input:checked+span & {
    display: block;
  }
`

export const UncheckedIcon = styled(SquareIcon)`
  display: block;

  input:checked+span & {
    display: none;
  }
`
