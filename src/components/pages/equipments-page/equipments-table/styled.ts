import styled from 'styled-components'

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 100%;
  max-height: calc(100vh - 123px);
`

export const Avatar = styled('img')`
  display: block;
  border-radius: 50%;
  width: 64px;
  height: 64px;
`
