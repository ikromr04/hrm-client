import PrivateRoute from '@/components/private-route/private-route'
import PageNavigation from '../page-navigation/page-navigation'
import { Layout, LayoutContainer, LayoutContent, LayoutMain } from './styled'
import { PropsWithChildren } from 'react'
import MainHeader from '../main-header/main-header'

function PageLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <PrivateRoute>
      <Layout>
        <MainHeader />

        <LayoutContent>
          <LayoutContainer>
            <PageNavigation />
            
            <LayoutMain>
              {children}
            </LayoutMain>
          </LayoutContainer>
        </LayoutContent>
      </Layout>
    </PrivateRoute>
  )
}

export default PageLayout
