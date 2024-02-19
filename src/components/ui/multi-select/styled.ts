import styled, { css } from 'styled-components'
import Box from '../box/box'

export const Wrapper = styled('div').withConfig({
  shouldForwardProp: (props) => !['open'].includes(props),
})<{ open: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  ${({ open }) => open && css`
    ${Options} {
      opacity: 1;
      visibility: visible;
    }

    ${LabelInner} svg {
      transform: translateY(-50%) scaleY(-1);
    }
  `}
`

export const Label = styled('label')`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const LabelInner = styled('span')`
  position: relative;
  
  svg {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    transition: .3s;
  }
`

export const Span = styled('span')`
  font-size: 12px;
  line-height: 1;
  color: #616161;

  &:empty {
    display: none;
  }
`

export const StyledInput = styled('input').withConfig({
  shouldForwardProp: (props) => !['error'].includes(props),
})<{ error?: string }>`
  display: flex;
  font-size: 15px;
  border-radius: 4px;
  border: 1px solid #e0e0e0;
  background-color: #fafafa;
  width: 100%;
  min-height: 32px;
  max-height: 32px;
  padding: 4px 16px;
  padding-right: 32px;
  color: #616161;
  white-space: nowrap;
  align-items: center;
  overflow: hidden;
  user-select: none;
  cursor: context-menu;
  transition-property: background-color, border;
  transition-duration: .3s;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    background-color: #ffffff;
  }
`

export const Options = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 4;
  width: 100%;
  max-height: 324px;
  display: flex;
  flex-direction: column;
  border-radius: 0 0 8px 8px;
  padding: 8px 0;
  opacity: 0;
  visibility: hidden;
  overflow-y: scroll;
  overflow-x: visible;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-left: 4px solid #bdbdbd;
  }
`

export const Option = styled('button')`
  display: grid;
  grid-template-columns: 18px 1fr;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  color: #212121;
  padding: 4px 8px;
  font-size: 14px;
  cursor: pointer;
  text-align: start;
  transition-property: background-color;
  transition: .3s;

  &:hover {
    background-color: #e1f5fe;
  }
`
