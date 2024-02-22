import styled from 'styled-components'

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
  }
`

export const Avatar = styled('img')`
  display: block;
  min-width: 48px;
  min-height: 48px;
  border-radius: 50%;
  object-fit: cover;
`
