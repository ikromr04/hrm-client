import styled from 'styled-components'

export const Button = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 28px;
  padding: 4px 16px;
  margin-right: -8px;

  color: #212121;

  border: none;
  border-radius: 4px;
  background-color: transparent;

  transition: .3s;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 4%);
  }
`
