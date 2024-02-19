import PrivateRoute from '@/components/private-route/private-route'
import PageNavigation from '../page-navigation/page-navigation'
import { Layout, LayoutContainer, LayoutContent, LayoutMain } from './styled'
import { PropsWithChildren, ReactNode } from 'react'
import PageHeader from '../page-header/page-header'
import { useAppSelector } from '@/hooks'
import { getNavigationCollapsedState } from '@/store/app-slice/app-selector'

function PageLayout({ children }: PropsWithChildren): ReactNode {
  const isCollapsed = useAppSelector(getNavigationCollapsedState)

  return (
    <PrivateRoute>
      <Layout>
        <PageHeader />

        <LayoutContent>
          <LayoutContainer>
            <PageNavigation />
            
            <LayoutMain isCollapsed={isCollapsed}>
              {children}
            </LayoutMain>
          </LayoutContainer>
        </LayoutContent>
      </Layout>
    </PrivateRoute>
  )
}

export default PageLayout
