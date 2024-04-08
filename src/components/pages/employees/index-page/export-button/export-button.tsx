import CaretIcon from '@/components/icons/caret-icon'
import Button from '@/components/ui/button/button'
import { useEmployeesExport } from '@/hooks/use-employees-export'

function ExportButton(): JSX.Element {
  return (
    <Button type="button" onClick={useEmployeesExport()}>
      Экспорт <CaretIcon />
    </Button>
  )
}

export default ExportButton
