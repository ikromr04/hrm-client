import LanguagesList from './languages-list/languages-list'
import EditLanguages from './edit-languages/edit-languages'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import IconsBox from '@/components/ui/icons-box/icons-box'
import LanguageIcon from '@/components/icons/language-icon'
import Title from '@/components/ui/title/title'
import BoxInner from '@/components/ui/box-inner/box-inner'

function EmployeeLanguages(): JSX.Element {
  return (
    <Box>
      <BoxToolbar>
        <IconsBox icon={<LanguageIcon width={16} height={16} />} />
        <Title small>Знание языков</Title>
        <EditLanguages />
      </BoxToolbar>

      <BoxInner>
        <LanguagesList/>
      </BoxInner>
    </Box>
  )
}

export default EmployeeLanguages
