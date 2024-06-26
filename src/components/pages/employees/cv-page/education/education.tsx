import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import BoxInner from '@/components/ui/box-inner/box-inner'
import Title from '@/components/ui/title/title'
import { Fragment, ReactNode, useEffect, useState } from 'react'
import { Educations } from '@/types/educations'
import Text from '@/components/ui/text/text'
import Hr from '@/components/ui/hr/hr'
import DescriptionList from '@/components/ui/description-list/description-list'
import dayjs from 'dayjs'
import { useAppDispatch } from '@/hooks'
import { fetchEmployeesEducationsAction } from '@/store/employee-slice/employees-api-actions'
import Spinner from '@/components/ui/spinner/spinner'
import { useParams } from 'react-router-dom'

function Education(): ReactNode {
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
    <Box>
      <BoxToolbar>
        <Title>Образование</Title>
      </BoxToolbar>
      {educations?.map((education, index) => (
        <Fragment key={education.id}>
          {index > 0 && <Hr />}
          <BoxInner>
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
  )
}

export default Education
