import { Fragment, useEffect } from 'react'
import dayjs from 'dayjs'
import EditEducation from './edit-education/edit-education'
import DeleteEducation from './delete-education/delete-education'
import { Actions } from './styled'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee, getEmployeeEducations } 
  from '@/store/employee-slice/employees-selector'
import { fetchEmployeeEducationsAction } from '@/store/employee-slice/employees-api-actions'
import BoxInner from '@/components/ui/box-inner/box-inner'
import Text from '@/components/ui/text/text'
import Hr from '@/components/ui/hr/hr'
import DescriptionList from '@/components/ui/description-list/description-list'

function Educations(): JSX.Element {
  const educations = useAppSelector(getEmployeeEducations)
  const dispatch = useAppDispatch()
  const employee = useAppSelector(getEmployee)

  useEffect(() => {
    if (
      employee && 
      (!educations || !educations.length || educations[0].userId !== employee.id)
    ) {
      dispatch(fetchEmployeeEducationsAction({ employeeId: employee.id }))
    }
  }, [dispatch, educations, employee])

  if (!educations || !educations.length) {
    return (
      <BoxInner>
        <Text>Нет образования</Text>
      </BoxInner>
    )
  }

  return (
    <>
      {educations.map((education, index) => (
        <Fragment key={education.id}>
          {index > 0 && <Hr/>}
          <BoxInner>
            <Actions>
              <EditEducation education={education}/>
              <DeleteEducation education={education}/>
            </Actions>
            <DescriptionList
              list={{
                'Год поступления': dayjs(education.startedAt).format('D MMM YYYY'),
                'Год окончания': dayjs(education.graduatedAt).format('D MMM YYYY'),
                'Учебное заведение': education.institution,
                'Факультет': education.faculty,
                'Форма обучения': education.form,
                'Специальность': education.speciality,
              }}
            />
          </BoxInner>
        </Fragment>
      ))}
    </>
  )
}

export default Educations
