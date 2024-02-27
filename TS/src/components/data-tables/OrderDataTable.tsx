import Image from 'next/image'
import Link from 'next/link'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { DemoFilterDropdown } from '@/components'
import { cn, toSentenceCase } from '@/utils'
import { currentCurrency } from '@/common'
import type { ColumnType } from '@/types/util'
import type { DishType } from '@/types/food'

type DataTableProps = {
  id: string
  dish?: DishType
}

type OrderDataTableProps<T extends DataTableProps> = {
  rows: T[]
  columns: Array<ColumnType<T>>
  title: string
}

const sortFilterOptions = ['Ascending', 'Descending']

const statusFilterOptions = ['All', 'Paid', 'Cancelled', 'Refunded']

const OrderDataTable = <DataType extends DataTableProps>({ rows, columns, title }: OrderDataTableProps<DataType>) => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="overflow-hidden p-6 ">
        <div className="flex flex-wrap items-center gap-4 sm:justify-between lg:flex-nowrap">
          <h2 className="text-xl font-semibold text-default-800">{title}</h2>
          <div className="flex flex-wrap items-center justify-end gap-2">
            <DemoFilterDropdown filterType="Sort" filterOptions={sortFilterOptions} />

            <DemoFilterDropdown filterType="Status" filterOptions={statusFilterOptions} />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="w-full divide-y divide-default-200">
              <thead className="bg-default-100">
                <tr className="text-start">
                  {columns.map((column) => (
                    <th key={column.key as string} className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800">
                      {column.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-default-200">
                {rows.map((row, idx) => {
                  const dish = row.dish
                  return (
                    <tr key={idx}>
                      {columns.map((column) => {
                        const tableData = row[column.key] as string
                        if (column.key == 'dish_id') {
                          return (
                            <td key={tableData + idx} className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800">
                              <div className="flex items-center gap-4">
                                <div className="shrink">
                                  <div className="h-18 w-18">
                                    <Image src={dish?.images[0] ?? ''} className="h-full max-w-full" width={72} height={72} alt={dish?.name ?? ''} />
                                  </div>
                                </div>
                                <div className="grow">
                                  <p className="mb-1 text-sm text-default-500">{dish?.name}</p>
                                  <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                      {Array.from(new Array(Math.floor(dish?.review.stars ?? 0))).map((_star, idx) => (
                                        <FaStar key={idx} size={18} className="fill-yellow-400 text-yellow-400" />
                                      ))}
                                      {!Number.isInteger(dish?.review.stars) && <FaStarHalfStroke size={18} className="text-yellow-400" />}
                                      {(dish?.review.stars ?? 0) < 5 &&
                                        Array.from(new Array(5 - Math.ceil(dish?.review.stars ?? 0))).map((_val, idx) => (
                                          <FaStar key={idx} size={18} className="text-default-400" />
                                        ))}
                                    </div>
                                    <h6 className="mt-1 text-xs text-default-500">({dish?.review.count})</h6>
                                  </div>
                                </div>
                              </div>
                            </td>
                          )
                        } else if (column.key == 'status') {
                          const colorClassName =
                            tableData == 'paid'
                              ? 'bg-green-500/10 text-green-500'
                              : tableData == 'refunded'
                                ? 'bg-pink-500/10 text-pink-500'
                                : 'bg-yellow-500/10 text-yellow-500'
                          return (
                            <td key={tableData + idx} className="px-6 py-4">
                              <span className={cn('rounded-md px-3 py-1 text-xs font-medium', colorClassName)}>{toSentenceCase(tableData)}</span>
                            </td>
                          )
                        } else if (column.key == 'id') {
                          return (
                            <td
                              key={tableData + idx}
                              className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500 hover:text-primary-500"
                            >
                              <Link href={`/admin/orders/${row.id.slice(1)}`}>{row.id.toUpperCase()}</Link>
                            </td>
                          )
                        } else {
                          return (
                            <td key={tableData + idx} className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500">
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

export default OrderDataTable
