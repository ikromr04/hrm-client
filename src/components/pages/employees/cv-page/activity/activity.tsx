import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import BoxInner from '@/components/ui/box-inner/box-inner'
import Title from '@/components/ui/title/title'
import { Fragment, ReactNode, useEffect, useState } from 'react'
import Text from '@/components/ui/text/text'
import Hr from '@/components/ui/hr/hr'
import DescriptionList from '@/components/ui/description-list/description-list'
import { useAppDispatch } from '@/hooks'
import { fetchEmployeesActivitiesAction } from '@/store/employee-slice/employees-api-actions'
import Spinner from '@/components/ui/spinner/spinner'
import { useParams } from 'react-router-dom'
import { Activities } from '@/types/activities'
import dayjs from 'dayjs'

function Activity(): ReactNode {
  const [activities, setActivities] = useState<Activities | null>(null)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    !activities && params.id && dispatch(fetchEmployeesActivitiesAction({
      id: params.id,
      successHandler(activities) {
        setActivities(activities)
      },
    }))
  }, [activities, params.id, dispatch])

  return (
    <Box>
      <BoxToolbar>
        <Title>Трудовая деятельность</Title>
      </BoxToolbar>
      {activities?.map((activity, index) => (
        <Fragment key={activity.id}>
          {index > 0 && <Hr />}
          <BoxInner>
            <DescriptionList
              list={{
                'Организация': activity.organization,
                'Должность': activity.job,
                'Начало работы': dayjs(activity.hiredAt).format('D MMM YYYY'),
                'Дата уволнения': dayjs(activity.dismissedAt).format('D MMM YYYY'),
              }}
            />
          </BoxInner>
        </Fragment>))}
      {!activities &&
        <BoxInner>
          <Spinner />
        </BoxInner>}
      {activities?.length === 0 &&
        <BoxInner>
          <Text>Без опыта</Text>
        </BoxInner>}
    </Box>
  )
}

export default Activity
