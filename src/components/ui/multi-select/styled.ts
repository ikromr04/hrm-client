import styled, { css } from 'styled-components';
import Box from '../box/box';

export const Wrapper = styled('div').withConfig({
  shouldForwardProp: (props) => !['open'].includes(props),
})<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ open }) => open && css`
    ${SelectedOptions} {
      border-radius: 4px 4px 0 0;
    }

    ${Options} {
      opacity: 1;
      visibility: visible;
    }
  `}
`;

export const Inner = styled('div')`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled('span')`
  font-size: 12px;
  color: #000f30;
  font-weight: 400;

  &:empty {
    display: none;
  }
`;

export const SelectedOptions = styled('div').withConfig({
  shouldForwardProp: (props) => !['error'].includes(props),
})<{ error?: string }>`
  display: flex;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #E5ECF3;
  background-color: #F6F9FB;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 16px;
  white-space: nowrap;
  align-items: center;
  overflow: hidden;
  transition: .3s;

  ${({ error }) => error && css`
    border: 1px solid #f44336;
  `};

  &:hover {
    border: 1px solid #D3DFEB;
    background-color: #EDF2F7;
  }

  &:focus {
    outline: none;
    background-color: #F6F9FB;
    border: 1px solid #0085ff;
    box-shadow: none;
  }
`;

export const SelectedOption = styled('div')`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Options = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: none;
  font-size: 14px;
  border-radius: 0 0 4px 4px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
`;

export const Option = styled('label')`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e3f2fd;
  }
`;

export const ErrorMessage = styled('span')`
  font-size: 12px;
  color: #f44336;

  &:empty {
    display: none;
  }
`;
