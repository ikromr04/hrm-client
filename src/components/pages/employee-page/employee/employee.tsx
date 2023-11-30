import Title from '../../../ui/title/title'
import DescriptionList from '../../../ui/description-list/description-list'
import Box from '../../../ui/box/box'
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar'
import BoxInner from '../../../ui/box-inner/box-inner'
import EditEmployee from './edit-employee/edit-employee'
import Name from './employee-info/name'
import Surname from './employee-info/surname'
import Patronymic from './employee-info/patronymic'
import Login from './employee-info/login'
import StartedWorkAt from './employee-info/started-work-at'
import Job from './employee-info/job'
import Position from './employee-info/position'

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
