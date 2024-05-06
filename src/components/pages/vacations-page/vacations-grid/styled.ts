import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import Box from '@/components/ui/box/box'
import { StyledButton } from '@/components/ui/button/styled'
import { StyledInput } from '@/components/ui/input/styled'
import styled from 'styled-components'

export const Wrapper = styled(Box)`
  display: grid;
  grid-template-columns: 320px 1fr;
  max-height: calc(100vh - 123px);
  overflow: scroll;
  z-index: 0;

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

export const Column = styled('div')`
  display: flex;
  flex-direction: column;
  
  &:first-child {
    position: sticky;
    left: 0;
    z-index: 1;
    background-color: #fff;
    border-right: 1px solid #dce5ef;
  }
`

export const ColumnToolbar = styled(BoxToolbar)`
  position: sticky;
  top: 0;
  min-width: max-content;
  display: flex;
  gap: 16px;
  height: 48px;
`

export const Search = styled(StyledInput)`
  width: 100%;
  background-color: #fff;
`

export const Row = styled('div')`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  height: 80px;
  border-bottom: 1px solid #dce5ef;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    display: flex;
    border-radius: 50%;
  }
`

export const MonthRow = styled('div')`
  display: grid;
  grid-template-columns: repeat(12, 160px);
  align-items: center;
  gap: 16px;
  padding: 8px 16px;
  height: 80px;
  
  &:not(:last-child) {
    border-bottom: 1px solid #dce5ef;
  }
`

export const Month = styled(StyledButton)`
  min-width: 160px;
`
