import Container from '@/components/ui/container/container';
import { css, styled } from 'styled-components';

export const Layout = styled('div')`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100vw;
`
export const LayoutContent = styled('div')`
  padding-top: 16px;
  overflow-y: auto;
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

export const LayoutMain = styled('div').withConfig({
  shouldForwardProp: (props) => !['isCollapsed'].includes(props),
})<{ isCollapsed: boolean }>`
  width: calc(100% - 64px);
  transition: .3s;

  ${({ isCollapsed }) => !isCollapsed && css`
    width: calc(100% - 216px);
  `}
`
