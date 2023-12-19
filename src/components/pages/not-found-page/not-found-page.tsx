import Title from '@/components/ui/title/title'
import Text from '@/components/ui/text/text'
import Button from '@/components/ui/button/button'
import HomeIcon from '@/components/icons/home-icon'
import { AppRoute } from '@/const'
import { StyledPage } from './styled'
import notFoundImage from '@/assets/static/404.svg'

function NotFoundPage(): JSX.Element {
  return (
    <StyledPage tagName="main">
      <img
        src={notFoundImage}
        width={300}
        height={200}
        alt="Not found status code"
      />
      <Title>Упс! Страница не найдена :(</Title>
      <Text>
        К сожалению, страница, которую вы ищете, не существует. Если вы уверены,
        что произошла ошибка, то сообщите своему администратору или дайте нам знать.
      </Text>
      <Button href={AppRoute.Home} success>
        <HomeIcon width={16} height={16} /> Вернуться на главную страницу
      </Button>
    </StyledPage>
  )
}

export default NotFoundPage
