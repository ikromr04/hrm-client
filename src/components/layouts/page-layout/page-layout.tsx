import PrivateRoute from '@/components/private-route/private-route'
import PageNavigation from '../page-navigation/page-navigation'
import { LayoutContainer } from './styled'
import { PropsWithChildren } from 'react'
import MainHeader from '../main-header/main-header'

function PageLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <PrivateRoute>
      <MainHeader />

      <LayoutContainer>
        <PageNavigation />
        {children}
      </LayoutContainer>
    </PrivateRoute>
  )
}

export default PageLayout
