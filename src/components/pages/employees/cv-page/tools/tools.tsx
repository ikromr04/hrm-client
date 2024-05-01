import { Fragment, ReactNode, useEffect, useState } from 'react'
import { Equipments } from '@/types/equipments'
import { useAppDispatch } from '@/hooks'
import { useParams } from 'react-router-dom'
import { fetchEmployeesEquipmentsAction } from '@/store/employee-slice/employees-api-actions'
import Box from '@/components/ui/box/box'
import BoxToolbar from '@/components/ui/box-toolbar/box-toolbar'
import Title from '@/components/ui/title/title'
import Hr from '@/components/ui/hr/hr'
import BoxInner from '@/components/ui/box-inner/box-inner'
import DescriptionList from '@/components/ui/description-list/description-list'
import Spinner from '@/components/ui/spinner/spinner'
import Text from '@/components/ui/text/text'

function Tools(): ReactNode {
  const [equipments, setEquipments] = useState<Equipments | null>(null)
  const dispatch = useAppDispatch()
  const params = useParams()

  useEffect(() => {
    !equipments && params.id && dispatch(fetchEmployeesEquipmentsAction({
      id: params.id,
      successHandler(equipments) {
        setEquipments(equipments)
      },
    }))
  }, [equipments, params.id, dispatch])

  return (
    <Box>
      <BoxToolbar>
        <Title>Оборудование</Title>
      </BoxToolbar>
      {equipments?.map((equipment, index) => (
        <Fragment key={equipment.id}>
          {index > 0 && <Hr />}
          <BoxInner>
            <DescriptionList
              list={{
                [equipment.title]: equipment.info,
              }}
            />
          </BoxInner>
        </Fragment>))}
      {!equipments &&
        <BoxInner>
          <Spinner />
        </BoxInner>}
      {equipments?.length === 0 &&
        <BoxInner>
          <Text>Нет</Text>
        </BoxInner>}
    </Box>
  )
}

export default Tools
