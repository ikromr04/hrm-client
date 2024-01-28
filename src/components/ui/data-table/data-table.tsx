/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, Tbody, Td, Th, Thead, Tr } from './styled'

export type DataTableRows = {
  [key: string]: any
}[]

export type DataTableColumns = {
  field: string
  headerName: string
  width?: number
}[]

type DataTableProps = {
  rows: DataTableRows
  columns: DataTableColumns
  stickyHeader?: boolean
}

function DataTable({ rows, columns, stickyHeader }: DataTableProps): JSX.Element {
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