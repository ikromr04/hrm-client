import styled from 'styled-components'

export const Actions = styled('div')`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  gap: 4px;
  visibility: visible;
  opacity: 0;
  transition: .3s;
`

export const Card = styled('figure')`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0;
  width: 100%;
  padding: 8px;

  &:hover {
    background-color: #f5f5f5;

    ${Actions} {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const Avatar = styled('img')`
  display: block;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  object-fit: cover;
`
