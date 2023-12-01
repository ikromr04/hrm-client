import PageHeader from '../page-header/page-header'
import PageNavigation from '../page-navigation/page-navigation'
import { LayoutContainer } from './styled'
import { PropsWithChildren } from 'react'

function PageLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <PageHeader />

      <LayoutContainer>
        <PageNavigation />
        {children}
      </LayoutContainer>
    </>
  )
}

export default PageLayout
