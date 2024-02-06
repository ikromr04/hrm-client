import styled, { css } from 'styled-components'

export const Table = styled('table')`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 8%);
  max-width: 100%;
  overflow-x: auto;
  max-height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 2px;
  }
`

export const Thead = styled('thead').withConfig({
  shouldForwardProp: (props) => !['stickyHeader'].includes(props),
})<{ stickyHeader?: boolean }>`
  display: flex;
  flex-grow: 1;
  border-radius: 8px 8px 0 0;
  background-color: #f9f9f9;
  min-width: max-content;

  ${({ stickyHeader }) => stickyHeader && css`
    position: sticky;
    top: 0;
  `}
`

export const Tbody = styled('tbody')`
  display: flex;
  flex-direction: column;
  min-width: max-content;
  max-width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 2px;
  }
`

export const Tr = styled('tr')`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-bottom: 1px solid #dce5ef;
`

export const Th = styled('th').withConfig({
  shouldForwardProp: (props) => !['width'].includes(props),
})<{ width?: number }>`
  display: flex;
  padding: 4px 16px;
  padding: 8px 16px;
  justify-content: flex-start;
  flex-grow: 1;

  ${({ width }) => width && css`
    min-width: ${width}px;
    max-width: ${width}px;
  `}
`

export const Td = styled('td').withConfig({
  shouldForwardProp: (props) => !['width'].includes(props),
})<{ width?: number }>`
  display: flex;
  padding: 8px 16px;
  word-break: break-word;
  flex-grow: 1;

  ${({ width }) => width && css`
    min-width: ${width}px;
    max-width: ${width}px;
  `}
`
