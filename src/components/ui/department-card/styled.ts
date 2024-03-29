import styled, { css } from 'styled-components'
import Title from '../title/title'
import Box from '../box/box'

export const DepartmentActions = styled('div')`
  position: absolute;
  left: calc(100% + 4px);
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  visibility: hidden;
  opacity: 0;
  transition: .3s;
`

export const Card = styled(Box).withConfig({
  shouldForwardProp: (props) => !['editable'].includes(props),
})<{ editable: boolean }>`
  position: relative;
  min-width: 320px;
  max-width: 320px;
  min-height: 100px;
  padding-bottom: 8px;

  ${({ editable }) => editable && css`
    &::before {
      content: "";
      height: 24px;
      width: 2px;
      background-color: #9e9e9e;
      position: absolute;
      top: -25px;
      left: calc(50% - 1px);
    }
  `}

  &:hover {
    ${DepartmentActions} {
      visibility: visible;
      opacity: 1;
    }
  }
`

export const SectionTitle = styled(Title)`
  font-weight: 300;
  margin: 0 16px;
`

export const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  cursor: context-menu;
`
