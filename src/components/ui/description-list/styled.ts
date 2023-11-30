import styled, { css } from 'styled-components';

export const Dl = styled('dl').withConfig({
  shouldForwardProp: (props) => !['detailed', 'detailedInverse'].includes(props),
})<{ detailed?: boolean, detailedInverse?: boolean }>`
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 16px;
  font-size: 14px;
  color: #1d1d1d;

  ${({ detailed, detailedInverse }) => (detailed || detailedInverse) && css`
    display: flex;
    flex-direction: column;
    gap: 0;
    font-weight: 500;
  `}

  ${({ detailed }) => detailed && css`
    ${Dt} {
      font-size: 12px;
      margin-bottom: 2px;
    }

    ${Dd} {
      font-size: 14px;
      margin-bottom: 2px;

      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }
  `}

  ${({ detailedInverse }) => detailedInverse && css`
    ${Dt} {
      color: #1d1d1d;
      margin-bottom: 2px;
      font-weight: 500;
    }

    ${Dd} {
      font-size: 12px;
      color: #6c86ab;

      &:not(:last-of-type) {
        margin-bottom: 16px;
      }
    }
  `}
`;

export const Dt = styled('dt')`
  color: #6c86ab;
  `;

export const Dd = styled('dd')`
  margin: 0;
`;
