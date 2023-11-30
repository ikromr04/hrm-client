import IconsBox from '../../../ui/icons-box/icons-box'
import LanguageIcon from '../../../icons/language-icon'
import Title from '../../../ui/title/title'
import LanguagesList from './languages-list/languages-list'
import Box from '../../../ui/box/box'
import BoxToolbar from '../../../ui/box-toolbar/box-toolbar'
import { memo } from 'react'
import BoxInner from '../../../ui/box-inner/box-inner'
import EditLanguages from './edit-languages/edit-languages'

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

export default memo(EmployeeLanguages)
