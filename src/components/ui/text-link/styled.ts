import styled from 'styled-components'

export const StyledLink = styled('div')`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  text-decoration: none;
  color: #1971d2;

  &:empty {
    display: none;
  }
`
