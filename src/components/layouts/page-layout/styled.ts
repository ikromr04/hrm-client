import Container from '@/components/ui/container/container';
import { styled } from 'styled-components';

export const Layout = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
  background-color: #f1f5f8;
`
export const LayoutContent = styled('div')`
  padding-top: 16px;
  overflow-y: scroll;
  overflow-x: hidden;

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

export const LayoutContainer = styled(Container)`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

export const LayoutMain = styled('div')`
  width: 100%;
  margin-bottom: 120px;
`
