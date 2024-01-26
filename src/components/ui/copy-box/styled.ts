import styled from 'styled-components'
import CopyButton from '../copy-button/copy-button'

export const StyledBox = styled('div')`
  position: relative;
  display: flex;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  color: #616161;
`

export const Button = styled(CopyButton)`
  position: absolute;
  top: 0;
  right: 0;
`
