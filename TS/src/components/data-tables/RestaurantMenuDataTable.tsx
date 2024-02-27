import Image from 'next/image'
import { FaStar, FaStarHalfStroke } from 'react-icons/fa6'
import { LuMoreVertical } from 'react-icons/lu'
import { DemoFilterDropdown, GoToAddButton } from '@/components'
import { currentCurrency } from '@/common'
import type { ColumnType } from '@/types/util'
import type { CategoryType, DishType } from '@/types/food'

type DataTableProps = {
  images: DishType['images']
  name: DishType['name']
  review: DishType['review']
  category?: CategoryType
}

type RestaurantMenuDataTableProps<T extends DataTableProps> = {
  rows: T[]
  columns: Array<ColumnType<T>>
  title: string
  buttonText: string
  buttonLink: string
}

const RestaurantMenuDataTable = <DataType extends DataTableProps>({
  buttonLink,
  buttonText,
  columns,
  rows,
  title,
}: RestaurantMenuDataTableProps<DataType>) => {
  return (
    <div className="overflow-hidden rounded-lg border border-default-200">
      <div className="border-b border-b-default-200 p-6">
        <h4 className="mb-4 text-xl font-medium text-default-900">{title}</h4>
        <div className="flex flex-wrap items-center gap-4">
          <DemoFilterDropdown filterOptions={['Best Seller', 'High to Low', 'Low to High']} filterType="Popular" />
          <DemoFilterDropdown filterOptions={['Newest', 'Oldest']} filterType="Upload Date" />
          <DemoFilterDropdown filterOptions={['Average', 'Good', 'Best']} filterType="Rating" />
          <div className="ms-auto">
            <GoToAddButton buttonLink={buttonLink} buttonText={buttonText} />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="divide-y divide-default-200 rounded-lg">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-default-200">
                <thead className="bg-default-100/75">
                  <tr>
                    <th scope="col" className="px-4 py-3 pr-0">
                      <div className="flex h-5 items-center">
                        <input
                          id="hs-table-search-checkbox-all"
                          type="checkbox"
                          className="form-checkbox h-5 w-5 rounded border border-default-300 bg-transparent text-primary focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0"
                        />
                        <label htmlFor="hs-table-search-checkbox-all" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </th>
                    {columns.map((column) => (
                      <th
                        key={column.key as string}
                        scope="col"
                        className="whitespace-nowrap px-6 py-3 text-start text-base font-medium text-default-500"
                      >
                        {column.name}
                      </th>
                    ))}
                    <th scope="col" className="whitespace-nowrap px-6 py-3 text-start text-base font-medium text-default-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-default-200">
                  {rows.map((row, idx) => {
                    return (
                      <tr key={idx}>
                        <td className="py-3 pl-4">
                          <div className="flex h-5 items-center">
                            <input
                              id="hs-table-search-checkbox-1"
                              type="checkbox"
                              className="form-checkbox h-5 w-5 rounded border border-default-300 bg-transparent text-primary focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 focus:ring-offset-0"
                            />
                            <label htmlFor="hs-table-search-checkbox-1" className="sr-only">
                              Checkbox
                            </label>
                          </div>
                        </td>
                        {columns.map((column, idx) => {
                          const tableData = row[column.key] as string
                          if (column.key == 'name') {
                            return (
                              <td className="whitespace-nowrap px-6 py-4" key={tableData + idx}>
                                <div className="flex items-start gap-3">
                                  <Image src={row?.images[0] ?? ''} width={48} height={48} className="h-12 w-12 rounded-full" alt={row.name ?? ''} />
                                  <h5 className="text-base font-medium text-default-700">{tableData}</h5>
                                </div>
                              </td>
                            )
                          } else if (column.key == 'review') {
                            return (
                              <td key={idx} className="whitespace-nowrap px-6 py-4 text-base text-default-800">
                                <div className="flex items-center justify-start gap-1">
                                  {Array.from(new Array(Math.floor(row.review.stars ?? 0))).map((_star, idx) => (
                                    <FaStar key={idx} size={18} className="fill-yellow-400 text-yellow-400" />
                                  ))}
                                  {!Number.isInteger(row.review.stars ?? 0) && <FaStarHalfStroke size={18} className="text-yellow-400" />}
                                  {(row.review.stars ?? 0) < 5 &&
                                    Array.from(new Array(5 - Math.ceil(row.review.stars ?? 0))).map((_val, idx) => (
                                      <FaStar key={idx} size={18} className="text-default-400" />
                                    ))}
                                </div>
                              </td>
                            )
                          } else {
                            return (
                              <td key={idx} className="whitespace-nowrap px-6 py-4 text-base text-default-800">
                                {column.key == 'price' && currentCurrency}{' '}
                                {typeof tableData == 'object' && row.category ? row.category.name : tableData}
                              </td>
                            )
                          }
                        })}

                        <td className="whitespace-nowrap px-6 py-4 text-center">
                          <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
                            <button type="button" className="hs-dropdown-toggle inline-flex font-medium text-default-600 transition-all">
                              <LuMoreVertical size={22} />
                            </button>

                            <div className="hs-dropdown-menu z-20 mt-4 hidden min-w-[150px] rounded-lg border border-default-100 bg-white p-1.5 opacity-0 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:bg-default-50">
                              <ul className="flex flex-col gap-1">
                                <li>
                                  <button className="flex w-full items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <button className="flex w-full items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button className="flex w-full items-center gap-3 rounded px-3 py-2 font-normal text-default-600 transition-all hover:bg-default-100 hover:text-default-700">
                                    Delete
                                  </button>
                                </li>
                              </ul>
                            </div>
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
      </div>
    </div>
  )
}

export default RestaurantMenuDataTable
