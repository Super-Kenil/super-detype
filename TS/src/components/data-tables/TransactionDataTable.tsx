import { currentCurrency } from '@/common'
import type { ColumnType } from '@/types/util'
import { cn, toSentenceCase } from '@/utils'

type DataGridTableProps<T> = {
  rows: T[]
  columns: Array<ColumnType<T>>
  title: string
}

const TransactionDataTable = <DataType extends unknown>({ rows, columns, title }: DataGridTableProps<DataType>) => {
  return (
    <div className="overflow-hidden rounded-lg border border-default-200">
      <h2 className="px-6 py-4 text-lg font-semibold text-default-800">{title}</h2>
      <div className="relative overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-default-200">
              <thead>
                <tr className="bg-default-100 text-start">
                  {columns.map((column) => (
                    <th key={column.key as string} scope="col" className="px-6 py-3 text-start text-sm font-medium text-default-800">
                      {column.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-default-200">
                {rows.map((row, idx) => {
                  return (
                    <tr key={idx}>
                      {columns.map((column, idx) => {
                        const tableData = row[column.key] as string

                        if (column.key == 'status') {
                          const colorClassName =
                            tableData == 'cancelled'
                              ? 'text-red-500 bg-red-500/10'
                              : tableData == 'refunded'
                                ? 'text-yellow-500 bg-yellow-500/10'
                                : 'text-green-500 bg-green-500/10'
                          return (
                            <td key={tableData + idx} className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                              <span className={cn('rounded-md px-3 py-1 text-xs font-medium', colorClassName)}>{toSentenceCase(tableData)}</span>
                            </td>
                          )
                        } else {
                          return (
                            <td key={tableData + idx} className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-600">
                              {column.key == 'amount' && currentCurrency}
                              {tableData}
                            </td>
                          )
                        }
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionDataTable
