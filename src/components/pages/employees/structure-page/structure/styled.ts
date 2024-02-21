import styled from 'styled-components'

export const Wrapper = styled('div')`
  position: relative;
  width: 100%;
  height: calc(100vh - 129px);
  user-select: none;
  overflow: hidden;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`

export const List = styled('ol')`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 64px;
  list-style: none;
  margin: 0;
  padding : 0;
`

export const ListItem = styled('li')`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: max-content;
`

export const Tools = styled('div')`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px;
  background-color: #f1f5f8;
  border-top-left-radius: 4px;
`
