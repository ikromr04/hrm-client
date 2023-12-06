import Box from '@/components/ui/box/box'
import CreateEducation from './create-education/create-education'
import Educations from './educations/educations'
import { Toolbar } from './styled'
import IconsBox from '@/components/ui/icons-box/icons-box'
import Title from '@/components/ui/title/title'
import EducationIcon from '@/components/icons/education-icon'

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
