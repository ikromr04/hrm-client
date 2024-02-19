/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react'
import { Table, Tbody, Td, Th, Thead, Tr } from './styled'

export type DataTableRows = {
  [key: string]: any
}[]

export type DataTableColumns = {
  field: string
  headerName: string
  width?: number
}[]

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
            <Th key={column.field} width={column.width}>{column.headerName}</Th>
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
