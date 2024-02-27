import Image from 'next/image'
import Link from 'next/link'
import { LuEye, LuPencil, LuTrash2 } from 'react-icons/lu'
import { DemoFilterDropdown } from '@/components/filter'
import GoToAddButton from './GoToAddButton'
import { cn, toSentenceCase } from '@/utils'
import { currentCurrency } from '@/common'
import { getCategoryById } from '@/helpers'
import type { ColumnType } from '@/types/util'
import type { CategoryType, DishType } from '@/types/food'

type DataTableProps = {
  category_id: DishType['category_id']
  images: DishType['images']
  category?: {
    name: CategoryType['name']
  }
}

type DishDataTableProps<T extends DataTableProps> = {
  rows: T[]
  columns: Array<ColumnType<T>>
  title: string
  buttonText: string
  buttonLink: string
}

const DishDataTable = <DataType extends DataTableProps>({ rows, columns, title, buttonText, buttonLink }: DishDataTableProps<DataType>) => {
  const sortFilterOptions = ['Ascending', 'Descending', 'Trending', 'Recent']

  return (
    <>
      <div className="overflow-hidden px-6 py-4 ">
        <div className="flex flex-wrap items-center justify-between gap-4 md:flex-nowrap">
          <h2 className="text-xl font-semibold text-default-800">{title}</h2>
          <div className="flex flex-wrap items-center gap-4">
            <DemoFilterDropdown filterType="Sort" filterOptions={sortFilterOptions} />

            <GoToAddButton buttonText={buttonText} buttonLink={buttonLink} />
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-default-200">
              <thead className="bg-default-100">
                <tr className="text-start">
                  {columns.map((column) => (
                    <th key={column.key as string} className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800">
                      {column.name}
                    </th>
                  ))}
                  <th className="whitespace-nowrap px-6 py-3 text-start text-sm font-medium text-default-800">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-default-200">
                {rows.map((row, idx) => {
                  return (
                    <tr key={idx}>
                      {columns.map(async (column) => {
                        const tableData = row[column.key] as string
                        const category = column.key == 'category_id' && (await getCategoryById(row['category_id']))
                        if (column.key == 'name') {
                          return (
                            <td key={tableData + idx} className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-800">
                              <Link href="/admin/dishes/1008" className="flex items-center gap-3">
                                <div className="h-12 w-12 shrink">
                                  <Image src={row.images[0]} height={48} width={48} alt={tableData} className="h-full max-w-full" />
                                </div>
                                <p className="text-base text-default-500 transition-all hover:text-primary">{tableData}</p>
                              </Link>
                            </td>
                          )
                        } else if (column.key == 'status') {
                          const colorClassName =
                            tableData == 'published'
                              ? 'bg-green-500/10 text-green-500'
                              : tableData == 'reviewing'
                                ? 'bg-yellow-500/10 text-yellow-500'
                                : 'bg-pink-500/10 text-pink-500'
                          return (
                            <td key={tableData + idx} className="px-6 py-4">
                              <span className={cn('rounded-md px-3 py-1 text-xs font-medium', colorClassName)}>{toSentenceCase(tableData)}</span>
                            </td>
                          )
                        } else {
                          return (
                            <td key={tableData + idx} className="whitespace-nowrap px-6 py-4 text-sm font-medium text-default-500">
                              {column.key == 'price' && currentCurrency}
                              {category ? category['name'] : tableData}
                            </td>
                          )
                        }
                      })}
                      <td className="px-6 py-4">
                        <div className="flex gap-3">
                          <LuPencil size={20} className="cursor-pointer transition-colors hover:text-primary" />
                          <LuEye size={20} className="cursor-pointer transition-colors hover:text-primary" />
                          <LuTrash2 size={20} className="cursor-pointer transition-colors hover:text-red-500" />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default DishDataTable
