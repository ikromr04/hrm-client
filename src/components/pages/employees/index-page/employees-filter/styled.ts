import CaretIcon from '@/components/icons/caret-icon'
import Title from '@/components/ui/title/title'
import styled, { css } from 'styled-components'

export const FilterButton = styled('button')`
  text-decoration: none;
  color: inherit;
  border: none;
  padding: 0 8px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 4px;
  min-height: 32px;
  min-width: 32px;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  cursor: pointer;
`

export const FilterCaret = styled(CaretIcon)`
  transform: rotate(-90deg);
`

export const Form = styled('form').withConfig({
  shouldForwardProp: (props) => !['isOpen'].includes(props),
})<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 3;
  background-color: #ffffff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 8%);
  padding: 0 24px;
  height: 100vh;
  min-width: 240px;
  transform: translateX(100%);
  visibility: hidden;
  color: #212121;
  overflow-y: scroll;
  transition: .3s;

  ${({ isOpen }) => isOpen && css`
    transform: translateX(0);
    visibility: visible;
  `}

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #bdbdbd;
    border-radius: 2px;
  }
`

export const FormTitle = styled(Title)`
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 4;
  padding: 8px 0;
`

export const FormElement = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ButtonWrapper = styled('div')`
  display: flex;
  background-color: #ffffff;
  padding: 8px 0;
  position: sticky;
  bottom: 0;
  margin-top: 300px;
  z-index: 4;
  width: 100%;

  button {
    flex-grow: 1;
  }
`
