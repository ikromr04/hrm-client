import LanguagesList from './languages-list/languages-list'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import IconsBox from '@/components/ui/icons-box/icons-box'
import LanguageIcon from '@/components/icons/language-icon'
import Title from '@/components/ui/title/title'
import BoxInner from '@/components/ui/box-inner/box-inner'
import EditModal from './edit-modal/edit-modal'

function EmployeeLanguages(): JSX.Element {
  return (
    <Box>
      <BoxToolbar>
        <IconsBox icon={<LanguageIcon />} />
        <Title small>Знание языков</Title>
        <EditModal />
      </BoxToolbar>

      <BoxInner>
        <LanguagesList />
      </BoxInner>
    </Box>
  )
}

export default EmployeeLanguages
