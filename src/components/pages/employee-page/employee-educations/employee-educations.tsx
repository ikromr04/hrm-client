import EducationIcon from '../../../icons/education-icon'
import Box from '../../../ui/box/box'
import IconsBox from '../../../ui/icons-box/icons-box'
import Title from '../../../ui/title/title'
import CreateEducation from './create-education/create-education'
import Educations from './educations/educations'
import { Toolbar } from './styled'

function EmployeeEducations(): JSX.Element {
  return (
    <Box tagName="section">
      <Toolbar>
        <IconsBox icon={<EducationIcon width={16} height={16} />} />
        <Title small>Образование</Title>
        <CreateEducation />
      </Toolbar>
      <Educations />
    </Box>
  )
}

export default EmployeeEducations
