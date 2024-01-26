import styled, { css } from 'styled-components';

export const Dl = styled('dl').withConfig({
  shouldForwardProp: (props) => !['detailed', 'detailedInverse', 'columns'].includes(props),
})<{ detailed?: boolean, detailedInverse?: boolean, columns?: number }>`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;

  ${({ detailed, detailedInverse }) => (detailed || detailedInverse) && css`
    display: flex;
    flex-direction: column;
    gap: 0;
    font-weight: 500;
  `}

  ${({ detailed }) => detailed && css`
    ${Dt} {
      font-size: 13px;
      margin-bottom: 2px;
    }

    ${Dd} {
      margin-bottom: 2px;

      &:not(:last-of-type) {
        margin-bottom: 8px;
      }
    }
  `}

  ${({ detailedInverse }) => detailedInverse && css`
    ${Dt} {
      margin-bottom: 2px;
      color: inherit;
    }

    ${Dd} {
      font-size: 13px;
      color: #90a4ae;

      &:not(:last-of-type) {
        margin-bottom: 8px;
      }
    }
  `}

  ${({ columns }) => columns && css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  `}
`;

export const Item = styled('div')``

export const Dt = styled('dt')`
  color: #90a4ae;
`;

export const Dd = styled('dd')`
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
`;
