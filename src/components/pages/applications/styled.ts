import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Main = styled('main')`
  display: flex;
  flex-direction: row-reverse;
  gap: 16px;
  margin-bottom: 72px;
`

export const Navigation = styled('ul')`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 8px;
  height: max-content;

  list-style: none;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 8%);
`

export const NavigationItem = styled('li')``

export const NavigationLink = styled(Link).withConfig({
  shouldForwardProp: (props) => !['current'].includes(props)
}) <{ current: boolean }>`
  display: flex;
  align-items: center;
  min-width: 184px;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 8px;

  font-size: inherit;
  font-weight: inherit;
  text-decoration: none;
  white-space: nowrap;
  color: #6c86ab;
  font-size: 14px;
  font-weight: 500;

  border-radius: 4px;
  background-color: transparent;
  border: none;

  transition-property: color, background-color, width;
  transition-duration: .3s;

  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f8;
  }

  ${({ current }) => current && css`
    color: #476887;
    background-color: #f1f5f8;
  `}
`

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
`

export const Header = styled('header')`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`

export const Application = styled('div')`
  background-color: #ffffff;
  padding: 80px;
  color: #212121;
  line-height: 1.4;
  aspect-ratio: 210/297;
  width: 100%;
  max-width: 784px;
  align-self: center;

  >div {
    &:first-of-type {
      white-space: pre-line;
      width: max-content;
      margin-left: auto;
      margin-bottom: 80px;
    }

    &:nth-of-type(2) {
      margin-bottom: 80px;
    }

    &:nth-of-type(3) {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      div:last-child {
        text-align: end;
      }
    }
  }

  p {
    color: inherit;
    margin-bottom: 8px;
  }
`
