import PrivateRoute from '@/components/private-route/private-route'
import PageHeader from '../page-header/page-header'
import PageNavigation from '../page-navigation/page-navigation'
import { LayoutContainer } from './styled'
import { PropsWithChildren } from 'react'

function PageLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <PrivateRoute>
      <PageHeader />

      <LayoutContainer>
        <PageNavigation />
        {children}
      </LayoutContainer>
    </PrivateRoute>
  )
}

export default PageLayout
