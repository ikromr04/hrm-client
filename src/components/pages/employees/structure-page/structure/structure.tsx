import { useAppDispatch, useAppSelector } from '@/hooks'
import { fetchDepartmentsTreeAction } from '@/store/department-slice/department-api-actions'
import { getDepartmentsTree } from '@/store/department-slice/department-selector'
import { MouseEvent, ReactNode, WheelEvent, useEffect, useState } from 'react'
import { List, ListItem, Tools, Wrapper } from './styled'
import DepartmentCard from '@/components/ui/department-card/department-card'
import DepartmentsList from './departments-list/departments-list'
import Spinner from '@/components/ui/spinner/spinner'
import Button from '@/components/ui/button/button'
import Info from '@/components/ui/info/info'
import RotateIcon from '@/components/icons/rotate-icon'

type Position = {
  x: number
  y: number
}

function Structure(): ReactNode {
  const departments = useAppSelector(getDepartmentsTree)
  const dispatch = useAppDispatch()
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [initialPosition, setInitialPosition] = useState<Position>({ x: 0, y: 0 })
  const [scale, setScale] = useState<number>(1)
  
  useEffect(() => {
    !departments && dispatch(fetchDepartmentsTreeAction())
  }, [departments, dispatch])

  const handleMouseDown = (evt: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true)
    setInitialPosition({
      x: evt.clientX - position.x,
      y: evt.clientY - position.y
    })
  }

  const handleMouseMove = (evt: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: evt.clientX - initialPosition.x,
        y: evt.clientY - initialPosition.y
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (evt: WheelEvent<HTMLDivElement>) => {
    if (evt.ctrlKey) {
      const delta = evt.deltaY
      const newScale = scale + delta * 0.01

      const minScale = 0.1
      const maxScale = 4
      if (newScale >= minScale && newScale <= maxScale) {
        setScale(newScale)
      }
    }
  }

  const handleResetClick = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
    setInitialPosition({ x: 0, y: 0 })
    setIsDragging(false)
  }

  return (
    <Wrapper
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
    >
      <List 
        style={{
          top: position.y,
          left: position.x,
          transform: `scale(${scale})`,
        }}
      >
        <ListItem>
          <DepartmentCard
            department={{
              id: '',
              title: 'Эволет',
              employees: [{
                id: '',
                name: 'Сайёра',
                surname: 'Мирзоева',
                login: '',
                avatar: '',
                startedWorkAt: new Date(),
                departments: [],
                jobs: [{ id: '', title: 'Руководитель'}],
                positions: [],
                languages: [],
                next: '',
                previous: '',
                leader: true,
              }]}}
              editable={false} />
          
          {!departments
            ? <Spinner />
            : <DepartmentsList departments={departments} /> }
        </ListItem>
      </List>
      <Tools>
        <Button
          type="button"
          large
          square
          outlined
          onClick={handleResetClick}
        >
          <RotateIcon left width={20} height={20} />
          <Info left>Сбросить</Info>
        </Button>
      </Tools>
    </Wrapper>
  )
}

export default Structure
