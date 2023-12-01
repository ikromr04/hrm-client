import Box from '@/components/ui/box/box'
import Activities from './activities/activities'
import CreateActivity from './create-activity/create-activity'
import { Toolbar } from './styled'
import IconsBox from '@/components/ui/icons-box/icons-box'
import Title from '@/components/ui/title/title'
import EducationIcon from '@/components/icons/education-icon'

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
