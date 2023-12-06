import EditEmployee from './edit-employee/edit-employee'
import Name from './employee-info/name'
import Surname from './employee-info/surname'
import Patronymic from './employee-info/patronymic'
import Login from './employee-info/login'
import StartedWorkAt from './employee-info/started-work-at'
import Job from './employee-info/job'
import Position from './employee-info/position'
import Box from '@/components/ui/box/box'
import Title from '@/components/ui/title/title'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import BoxInner from '@/components/ui/box-inner/box-inner'
import DescriptionList from '@/components/ui/description-list/description-list'

function Employee(): JSX.Element {
  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Сотрудник</Title>
        <EditEmployee />
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Имя': <Name />,
            'Фамилия': <Surname />,
            'Отчество': <Patronymic />,
            'Логин': <Login />,
            'Начало работы': <StartedWorkAt />,
            'Должность': <Job />,
            'Позиция': <Position />,
          }}
        />
      </BoxInner>
    </Box>
  )
}

export default Employee
