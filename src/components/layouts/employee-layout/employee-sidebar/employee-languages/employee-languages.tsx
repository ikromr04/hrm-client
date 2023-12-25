import LanguagesList from './languages-list/languages-list'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import IconsBox from '@/components/ui/icons-box/icons-box'
import LanguageIcon from '@/components/icons/language-icon'
import Title from '@/components/ui/title/title'
import BoxInner from '@/components/ui/box-inner/box-inner'
import { EditButton } from './styled'
import EditIcon from '@/components/icons/edit-icon'
import Info from '@/components/ui/info/info'
import { useState } from 'react'
import EditModal from './edit-modal/edit-modal'

function EmployeeLanguages(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box>
      <BoxToolbar>
        <IconsBox icon={<LanguageIcon />} />
        <Title small>Знание языков</Title>
        <EditButton type="button" onClick={() => setIsOpen(true)}>
          <EditIcon /> <Info top>Редактировать</Info>
        </EditButton>
        <EditModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </BoxToolbar>

      <BoxInner>
        <LanguagesList/>
      </BoxInner>
    </Box>
  )
}

export default EmployeeLanguages
