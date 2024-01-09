import EmployeeLayout from '@/components/layouts/employee-layout/employee-layout'
import { EducationActions, Main } from './styled'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import BoxInner from '@/components/ui/box-inner/box-inner'
import Title from '@/components/ui/title/title'
import { Fragment, useEffect, useState } from 'react'
import { Educations } from '@/types/educations'
import Text from '@/components/ui/text/text'
import Hr from '@/components/ui/hr/hr'
import DescriptionList from '@/components/ui/description-list/description-list'
import dayjs from 'dayjs'
import { useAppDispatch } from '@/hooks'
import { fetchEmployeesEducationsAction } from '@/store/employee-slice/employees-api-actions'
import Spinner from '@/components/ui/spinner/spinner'
import CreateModal from './create-modal/create-modal'
import { useParams } from 'react-router-dom'
import EditModal from './edit-modal/edit-modal'
import DeleteModal from './delete-modal/delete-modal'

function EmployeesEducationPage() {
  const [educations, setEducations] = useState<Educations | null>(null)
  const dispatch = useAppDispatch()
  const params = useParams()
  
  useEffect(() => {
    !educations && params.id && dispatch(fetchEmployeesEducationsAction({
      id: params.id,
      successHandler(educations) {
        setEducations(educations)
      },
    }))
  }, [educations, params.id, dispatch])

  return (
    <EmployeeLayout>
      <Main>
        <Box>
          <BoxToolbar>
            <Title>Образование</Title>
            <CreateModal key={educations?.length} setEducations={setEducations} />
          </BoxToolbar>
          {educations?.map((education, index) => (
            <Fragment key={education.id}>
              {index > 0 && <Hr />}
              <BoxInner>
                <EducationActions>
                  <EditModal education={education} setEducations={setEducations} />
                  <DeleteModal education={education} setEducations={setEducations} />
                </EducationActions>
                <DescriptionList
                  list={{
                    'Учебное заведение': education.institution,
                    'Факультет': education.faculty,
                    'Специальность': education.speciality,
                    'Форма обучения': education.form,
                    'Год поступления': dayjs(education.startedAt).format('D MMM YYYY'),
                    'Год окончания': dayjs(education.graduatedAt).format('D MMM YYYY'),
                  }}
                />
              </BoxInner>
            </Fragment>))}
          {!educations &&
            <BoxInner>
              <Spinner />
            </BoxInner>}
          {educations?.length === 0 &&
            <BoxInner>
              <Text>Нет образования</Text>
            </BoxInner>}
        </Box>
      </Main>
    </EmployeeLayout>
  )
}

export default EmployeesEducationPage