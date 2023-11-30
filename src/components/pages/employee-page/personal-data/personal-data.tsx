import BoxInner from '../../../ui/box-inner/box-inner'
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar'
import Box from '../../../ui/box/box'
import DescriptionList from '../../../ui/description-list/description-list'
import Title from '../../../ui/title/title'
import BirthDate from './details/birth-date'
import Gender from './details/gender'
import Nationality from './details/nationality'
import Citizenship from './details/citizenship'
import Address from './details/address'
import Email from './details/email'
import Tel1 from './details/tel-1'
import Tel2 from './details/tel-2'
import FamilyStatus from './details/family-status'
import Children from './details/children'
import EditPersonalData from './edit-personal-data/edit-personal-data'

function PersonalData(): JSX.Element {
  return (
    <Box tagName="section">
      <BoxToolbar>
        <Title small>Персональные данные</Title>
        <EditPersonalData />
      </BoxToolbar>

      <BoxInner>
        <DescriptionList
          list={{
            'Дата рождения': <BirthDate />,
            'Пол': <Gender />,
            'Национальность': <Nationality />,
            'Гражданство': <Citizenship />,
            'Адрес': <Address />,
            'Эл. почта': <Email />,
            'Телефон-1': <Tel1 />,
            'Телефон-2': <Tel2 />,
            'Семейное положение': <FamilyStatus />,
            'Дети': <Children />,
          }}
        />
      </BoxInner>
    </Box>
  )
}

export default PersonalData
