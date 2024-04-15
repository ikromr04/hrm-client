import { Department } from '@/types/departments'
import { BaseSyntheticEvent, ReactNode, useState } from 'react'
import BoxToolbar from '../box-toolbar/box-toolbar'
import Title from '../title/title'
import { Card, Form, SectionTitle } from './styled'
import EmployeesCard from './employees-card/employees-card'
import { Employee } from '@/types/employees'
import { DepartmentActions } from './styled'
import Info from '../info/info'
import DeleteIcon from '@/components/icons/delete-icon'
import { useAppDispatch } from '@/hooks'
import { deleteDepartmentAction } from '@/store/department-slice/department-api-actions'
import { toast } from 'react-toastify'
import Button from '../button/button'
import EditIcon from '@/components/icons/edit-icon'
import EditForm from './edit-form/edit-form'
import Text from '../text/text'
import Actions from '../actions/actions'
import AdminComponents from '@/components/admin-components/admin-components'

function DepartmentCard({
  department,
  editable = true,
}: {
  department: Department
  editable?: boolean
}): ReactNode {
  const leaders: (Employee & { leader: boolean })[] | undefined = department.employees?.filter(({ leader }) => leader)
  const employees: (Employee & { leader: boolean })[] | undefined = department.employees?.filter(({ leader }) => !leader)
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFormSubmit = (evt: BaseSyntheticEvent) => {
    evt.preventDefault()
    setIsSubmitting(true)
    dispatch(deleteDepartmentAction({
      id: department.id,
      successHandler() {
        toast.success(`${department.title} успешно удален.`)
        setIsSubmitting(false)
      },
    }))
  }

  return (
    <Card tagName="section" editable={editable}>
      <BoxToolbar>
        <Title small>{department.title}</Title>
      </BoxToolbar>
      <AdminComponents>
        {isOpen && <EditForm department={department} isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AdminComponents>
      {!isOpen &&
        <section>
          {isDeleting
            ?
            <Form onSubmit={handleFormSubmit}>
              <Text>Вы уверены что хотите удалить {department.title}?</Text>
              <Actions>
                <Button
                  type="submit"
                  success
                  loading={isSubmitting}
                  disabled={isSubmitting}
                >
                  Удалить
                </Button>
                <Button type="reset" error onClick={() => setIsDeleting(false)}>
                  Отмена
                </Button>
              </Actions>
            </Form>
            :
            <>
              {leaders?.map((leader) => (
                <EmployeesCard
                  key={leader.id}
                  employee={leader} />
              ))}

              {employees?.length ? <>
                <SectionTitle tagName="h3" small warn>Сотрудники</SectionTitle>
                {employees.map((employee) => (
                  <EmployeesCard
                    key={employee.id}
                    employee={employee} />
                ))}
              </> : ''}
            </>}
        </section>
      }
      {!isOpen && !isDeleting && editable &&
        <AdminComponents>
          <DepartmentActions>
            <Button
              onClick={() => setIsDeleting(true)}
              type="button"
              square
              error
            >
              <DeleteIcon />
              <Info left>Удалить {department.title}</Info>
            </Button>
            <Button
              type="button"
              warning
              square
              onClick={() => setIsOpen(true)}
            >
              <EditIcon />
              <Info left>Редактировать {department.title}</Info>
            </Button>
          </DepartmentActions>
        </AdminComponents>}
    </Card>
  )
}

export default DepartmentCard
