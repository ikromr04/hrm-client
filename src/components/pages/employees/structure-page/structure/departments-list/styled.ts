import styled from 'styled-components'

export const Hr = styled('div')`
  position: relative;
  display: block;
  width: calc(100% - 318px);
  height: 2px;
  background-color: #9e9e9e;

  &::after {
    content: '';
    position: absolute;
    bottom: 1px;
    left: calc(50% - 1px);
    height: 24px;
    width: 2px;
    background-color: #9e9e9e;
  }
`

export const List = styled('ol')`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 64px;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled('li')`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: max-content;

  &:first-child::before {
    content: "";
    width: 50%;
    height: 16px;
    background-color: #f1f5f8;
    position: absolute;
    top: -32px;
    left: -1px;
  }

  &:last-child::after {
    content: "";
    width: 50%;
    height: 16px;
    background-color: #f1f5f8;
    position: absolute;
    top: -32px;
    right: -1px;
  }
`
