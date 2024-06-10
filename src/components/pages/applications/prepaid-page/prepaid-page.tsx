import { ReactNode, useRef } from 'react'
import ApplicationsLayout from '../layout'
import Title from '@/components/ui/title/title'
import Button from '@/components/ui/button/button'
import { Application, Header } from '../styled'
import { DropdownIcon } from '@/components/layouts/page-header/employee-menu/styled'
import ReactToPrint from 'react-to-print'
import Text from '@/components/ui/text/text'

function PrepaidPage(): ReactNode {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <ApplicationsLayout>
      <Header>
        <Title tagName="h1">
          Заявление на займ
        </Title>
        <ReactToPrint
          trigger={() =>
            <Button type="button">
              Печатать <DropdownIcon />
            </Button>}
          content={() => ref.current} />
      </Header>

      <Application ref={ref}>
        <div contentEditable>
          Главе представительства <br />
          «Evolet Healthcare Limited» <br />
          Мирзоевой С. Ф. <br />
          от сотрудника отдела «______» <br />
          _______________________________
        </div>

        <Text bold uppercase center>
          Заявление
        </Text>

        <div contentEditable>
          Прошу Вас рассмотреть утверждение и предоставление аванса в размере 1000 TJS от заработной платы за месяц август 2024 г., в связи с непредвиденными обстоятельствами, персонального характера.
        </div>

        <div>
          <div contentEditable>«__» август 2024 год</div>
          <div contentEditable>
            С уважением, <br />
            __________________________
          </div>
        </div>
      </Application>
    </ApplicationsLayout>
  )
}

export default PrepaidPage
