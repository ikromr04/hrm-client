import styled from 'styled-components'

export const List = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  overflow-y: auto;
  padding: 4px;
  padding-right: 8px;
  margin: -4px;
  margin-right: -16px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 2px;
  }
`

export const ListItem = styled('li')`
  display: flex;
`
