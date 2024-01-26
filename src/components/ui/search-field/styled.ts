import styled from 'styled-components';

export const Wrapper = styled('div')`
  position: relative;
  display: flex;
  flex-grow: 1;
`;

export const Icon = styled('span')`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #898989;
`;

export const Input = styled('input')`
  display: flex;
  align-items: center;
  background-color: transparent;
  width: 100%;
  min-height: 32px;
  padding: 0;
  border: 0;
  font-size: 14px;
  padding-left: 32px;
  padding-right: 16px;

  &::placeholder {
    color: #898989;
  }
`;
