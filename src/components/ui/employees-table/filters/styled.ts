import styled from 'styled-components'

export const Input = styled('input')`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  padding: 8px;
  border: none;
  background-color: #fff;
  height: 28px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 24%);
  border-radius: 4px;
  opacity: 0;
  transition: .3s;

  &:hover,
  &:focus,
  &:not(:placeholder-shown) {
    opacity: 1;
  }
`
