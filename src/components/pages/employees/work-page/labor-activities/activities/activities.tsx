import { Fragment, useEffect } from 'react'
import dayjs from 'dayjs'
import { Actions } from './styled'
import EditActivity from './edit-activity/edit-activity'
import DeleteActivity from './delete-activity/delete-activity'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { getEmployee, getEmployeeActivities } 
  from '@/store/employee-slice/employees-selector'
import { fetchEmployeeActivitiesAction } 
  from '@/store/employee-slice/employees-api-actions'
import BoxInner from '@/components/ui/box-inner/box-inner'
import Text from '@/components/ui/text/text'
import Hr from '@/components/ui/hr/hr'
import DescriptionList from '@/components/ui/description-list/description-list'

function Activities(): JSX.Element {
  const activities = useAppSelector(getEmployeeActivities)
  const dispatch = useAppDispatch()
  const employee = useAppSelector(getEmployee)

  useEffect(() => {
    if (
      employee && 
      (!activities || !activities.length || activities[0].userId !== employee.id)
    ) {
      dispatch(fetchEmployeeActivitiesAction({ employeeId: employee.id }))
    }
  }, [activities, dispatch, employee])

  if (!activities || !activities.length) {
    return (
      <BoxInner>
        <Text>Нет опыта работы</Text>
      </BoxInner>
    )
  }

  return (
    <>
      {activities.map((activity, index) => (
        <Fragment key={activity.id}>
          {index > 0 && <Hr/>}
          <BoxInner>
            <Actions>
              <EditActivity activity={activity} />
              <DeleteActivity activity={activity} />
            </Actions>
            <DescriptionList
              list={{
                'Дата принятия': dayjs(activity.hiredAt).format('D MMM YYYY'),
                'Дата уволнения': dayjs(activity.dismissedAt).format('D MMM YYYY'),
                'Организация': activity.organization,
                'Должность': activity.job,
              }}
            />
          </BoxInner>
        </Fragment>
      ))}
    </>
  )
}

export default Activities
