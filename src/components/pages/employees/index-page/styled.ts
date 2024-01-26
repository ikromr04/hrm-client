import { StyledInfo } from '@/components/ui/info/styled';
import styled from 'styled-components';

export const Main = styled('main')`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Toolbar = styled('div')`
  background-color: white;
  border-radius: 4px;
  display: flex;
`

export const ActionsList = styled('ul')`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  box-shadow: 0 0 4px rgba(0, 0, 0, 8%);
`

export const ActionsItem = styled('li')`
  position: relative;
`

export const ActionsButton = styled('button')`
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

  &:hover ${StyledInfo},
  &:focus ${StyledInfo} {
    opacity: 1;
    visibility: visible;
  }
`
