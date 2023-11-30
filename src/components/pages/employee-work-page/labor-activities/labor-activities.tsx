import EducationIcon from '../../../icons/education-icon'
import Box from '../../../ui/box/box'
import IconsBox from '../../../ui/icons-box/icons-box'
import Title from '../../../ui/title/title'
import Activities from './activities/activities'
import CreateActivity from './create-activity/create-activity'
import { Toolbar } from './styled'

function LaborActivities(): JSX.Element {
  return (
    <Box tagName="section">
      <Toolbar>
        <IconsBox icon={<EducationIcon width={16} height={16} />} />
        <Title small>Трудовая деятельность</Title>
        <CreateActivity />
      </Toolbar>
      <Activities />
    </Box>
  )
}

export default LaborActivities
