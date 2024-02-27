import Image from 'next/image'
import { currentCurrency } from '@/common'
import type { ColumnType } from '@/types/util'

type DataTableProps = {
  images: string[]
  price: number
  quantity: number
}

type OrderDetailsDataTableProps<T extends DataTableProps> = {
  rows: T[]
  columns: Array<ColumnType<T>>
}

const OrderDetailsDataTable = <DataType extends DataTableProps>({ columns, rows }: OrderDetailsDataTableProps<DataType>) => {
  return (
    <div className="overflow-hidden rounded-lg border border-default-200">
      <div className="relative overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-default-200">
              <thead className="bg-default-400/10">
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.key as string}
                      scope="col"
                      className="whitespace-nowrap px-5 py-3 text-start text-xs font-medium uppercase text-default-500"
                    >
                      {column.name}
                    </th>
                  ))}
                  <th scope="col" className="whitespace-nowrap px-5 py-3 text-start text-xs font-medium uppercase text-default-500">
                    Sub Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-default-200">
                {rows.slice(0, 3).map((row, idx) => {
                  return (
                    <tr key={idx}>
                      {columns.map((column, idx) => {
                        const tableData = row[column.key] as string

                        if (column.key == 'name') {
                          return (
                            <td className="min-w-[190px] whitespace-nowrap px-5 py-3" key={tableData + idx}>
                              <div className="flex items-center gap-2">
                                <Image src={row.images[0]} width={72} height={72} className="h-18 w-18" alt="onion" />
                                <h4 className="text-sm font-medium text-default-800">{tableData}</h4>
                              </div>
                            </td>
                          )
                        } else {
                          return (
                            <td key={idx} className="whitespace-nowrap px-5 py-3 text-sm text-default-800">
                              {column.key == 'price' && currentCurrency}
                              {column.key == 'quantity' && 'x'}
                              {tableData}
                            </td>
                          )
                        }
                      })}
                      <td className="whitespace-nowrap px-5 py-3 text-sm text-default-800">
                        {currentCurrency}
                        {row.price * row.quantity}
                      </td>
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

export default OrderDetailsDataTable
