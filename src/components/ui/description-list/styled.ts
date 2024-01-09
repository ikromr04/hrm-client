import styled, { css } from 'styled-components';

export const Dl = styled('dl').withConfig({
  shouldForwardProp: (props) => !['detailed', 'detailedInverse'].includes(props),
})<{ detailed?: boolean, detailedInverse?: boolean }>`
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
`;

export const Dt = styled('dt')`
  color: #90a4ae;
`;

export const Dd = styled('dd')`
  margin: 0;
`;
