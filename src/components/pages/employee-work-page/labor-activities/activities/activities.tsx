import { Fragment, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import {
  getEmployee,
  getEmployeeActivities
} from '../../../../../store/employees-slice/employees-selector'
import Text from '../../../../ui/text/text'
import Hr from '../../../../ui/hr/hr'
import DescriptionList from '../../../../ui/description-list/description-list'
import dayjs from 'dayjs'
import {
  fetchEmployeeActivitiesAction
} from '../../../../../store/employees-slice/employees-api-actions'
import BoxInner from '../../../../ui/box-inner/box-inner'
import { Actions } from './styled'
import EditActivity from './edit-activity/edit-activity'
import DeleteActivity from './delete-activity/delete-activity'

function Activities(): JSX.Element {
  const activities = useAppSelector(getEmployeeActivities)
  const dispatch = useAppDispatch()
  const employee = useAppSelector(getEmployee)

  useEffect(() => {
    if (employee && (!activities || !activities.length || activities[0].userId !== employee.id)) {
      dispatch(fetchEmployeeActivitiesAction({ employeeId: employee.id }))
    }
  }, [employee])

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
