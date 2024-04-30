import { ReactNode } from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from './styled'

export type DataTableRow = {
  [key: string]: ReactNode
}

export type DataTableRows = DataTableRow[]

export type DataTableColumn = {
  field: string
  header: ReactNode
  width?: number
}

export type DataTableColumns = DataTableColumn[]

function DataTable({
  rows,
  columns,
  stickyHeader,
}: {
  rows: DataTableRows
  columns: DataTableColumns
  stickyHeader?: boolean
}): ReactNode {
  return (
    <Table>
      <Thead stickyHeader={stickyHeader}>
        <Tr>
          {columns.map((column) => (
            <Th key={column.field} width={column.width}>{column.header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, index) => (
          <Tr key={index}>
            {columns.map((column) => (
              <Td key={column.field} width={column.width}>{row[column.field]}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default DataTable
