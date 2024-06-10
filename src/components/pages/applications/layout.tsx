import PageLayout from '@/components/layouts/page-layout/page-layout'
import { ReactNode } from 'react'
import { Container, Main, Navigation, NavigationItem, NavigationLink } from './styled'
import { AppRoute } from '@/const'
import { useLocation } from 'react-router-dom'

function ApplicationsLayout({
  children,
}: {
  children: ReactNode;
}): ReactNode {
  const location = useLocation()

  return (
    <PageLayout>
      <Main>
        <Navigation>
          <NavigationItem>
            <NavigationLink
              to={AppRoute.Applications.Prepaid}
              current={AppRoute.Applications.Prepaid === location.pathname}
            >
              Аванс
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              to={AppRoute.Applications.Loan}
              current={AppRoute.Applications.Loan === location.pathname}
            >
              Займ
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink
              to={AppRoute.Applications.Vacation}
              current={AppRoute.Applications.Vacation === location.pathname}
            >
              Отпуск
            </NavigationLink>
          </NavigationItem>
        </Navigation>

        <Container>
          {children}
        </Container>
      </Main>
    </PageLayout>
  )
}

export default ApplicationsLayout
