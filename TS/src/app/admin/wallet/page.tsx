import Image from 'next/image'
import { type Metadata } from 'next'
import { LuChevronDown, LuTrendingUp, LuWallet } from 'react-icons/lu'
import TurnoverCard from './TurnoverCard'
import { BreadcrumbAdmin, TransactionDataTable, WalletDetailsCard } from '@/components'
import { currentCurrency } from '@/common'
import { avatar1Img, avatar3Img, avatar4Img, avatar5Img, avatar6Img } from '@/assets/data/images'
import { transactionHistoryData } from '@/assets/data'
import type { TransactionType } from '@/types/other'
import type { ColumnType } from '@/types/util'

export const metadata: Metadata = {
  title: 'Wallet',
}

const Wallet = () => {
  const columns: Array<ColumnType<TransactionType>> = [
    {
      key: 'asset',
      name: 'Assets',
    },
    {
      key: 'type',
      name: 'Type',
    },
    {
      key: 'date',
      name: 'Date',
    },
    {
      key: 'status',
      name: 'Status',
    },
    {
      key: 'amount',
      name: 'Amount',
    },
  ]
  return (
    <div className="w-full lg:ps-64">
      <div className="page-content space-y-6 p-6">
        <BreadcrumbAdmin title="Wallet" subtitle="Admin" link="/admin/dashboard" />
        <div className="grid gap-6 xl:grid-cols-4">
          <div className="xl:col-span-3">
            <div className="mb-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <WalletDetailsCard />
              </div>
              <div className="xl:col-span-1">
                <div className="space-y-6">
                  <TurnoverCard title="Received Amount" amount={23568.0} change={23} isPositive />
                  <TurnoverCard title="Expenditure Amount" amount={5631.5} change={5} />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1">
              <TransactionDataTable<TransactionType> title="Transaction history" rows={transactionHistoryData} columns={columns} />
            </div>
          </div>
          <div className="xl:col-span-1">
            <div className="rounded-lg border border-default-200">
              <div className="p-6">
                <div className="mb-6 rounded-lg border border-default-100 bg-white shadow dark:bg-default-100">
                  <div className="w-full p-4">
                    <span className="flex w-full flex-wrap items-center justify-start gap-4">
                      <span className="shrink">
                        <span className="inline-flex h-12 w-12 overflow-hidden rounded-full">
                          <Image src={avatar3Img} className="h-full max-w-full rounded-full" alt="avatar" />
                        </span>
                      </span>
                      <div className="flex w-full items-center">
                        <span className="grow text-start">
                          <span className="block text-lg font-medium text-default-950">Kaiya Botosh</span>
                          <span className="block text-xs font-medium text-default-950">demoexample@mail.com</span>
                        </span>
                        <span className="shrink">
                          <LuChevronDown size={20} />
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <h6 className="mb-2 text-lg font-semibold text-default-600">Total Balance</h6>
                  <h3 className="mb-2 text-3xl font-semibold text-default-900">{currentCurrency}81,957.50</h3>
                  <div className="mb-6 flex items-center justify-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                      <LuTrendingUp size={16} />
                    </span>
                    <span className="text-base font-medium text-default-500">23.47%</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-10 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500">
                      Sent
                    </button>
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-10 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500">
                      Received
                    </button>
                  </div>
                </div>
                <div className="mb-6 rounded-lg border border-default-100 bg-white shadow dark:bg-default-100">
                  <div className="p-4">
                    <h6 className="mb-3 text-lg font-semibold text-default-900">Quick transfer</h6>
                    <div className="mb-6 flex flex-wrap items-center gap-2 2xl:flex-nowrap">
                      <div className="flex cursor-pointer flex-col items-center gap-1">
                        <div className="h-12 w-12">
                          <Image src={avatar3Img} className="rounded-full" alt="avatar" />
                        </div>
                        <p className="text-xs font-medium text-default-700">Hanna</p>
                      </div>
                      <div className="flex cursor-pointer flex-col items-center gap-1">
                        <div className="h-12 w-12">
                          <Image src={avatar4Img} className="rounded-full" alt="avatar" />
                        </div>
                        <p className="text-xs font-medium text-default-700">Alena</p>
                      </div>
                      <div className="flex cursor-pointer flex-col items-center gap-1">
                        <div className="h-12 w-12">
                          <Image src={avatar6Img} className="rounded-full" alt="avatar" />
                        </div>
                        <p className="text-xs font-medium text-default-700">Angel</p>
                      </div>
                      <div className="flex cursor-pointer flex-col items-center gap-1">
                        <div className="h-12 w-12">
                          <Image src={avatar5Img} className="rounded-full" alt="avatar" />
                        </div>
                        <p className="text-xs font-medium text-default-700">Jhon</p>
                      </div>
                      <div className="flex cursor-pointer flex-col items-center gap-1">
                        <div className="h-12 w-12">
                          <Image src={avatar1Img} className="rounded-full" alt="avatar" />
                        </div>
                        <p className="text-xs font-medium text-default-700">Jocelyn</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="grow">
                        <input
                          type="text"
                          className="block w-full rounded-lg border-default-200 bg-transparent px-4 py-2.5 text-sm focus:border-orange-500 focus:ring-0"
                          placeholder={'0'}
                        />
                      </div>
                      <div className="shrink">
                        <button className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-10 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500">
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h6 className="relative mb-3 inline-block text-lg font-semibold text-default-900">
                    Due <span className="absolute start-full top-1 inline-flex h-2 w-2 items-center rounded-full bg-primary" />
                  </h6>
                  <div className="mb-4 flex w-full flex-wrap items-start gap-4 sm:flex-nowrap">
                    <div className="shrink">
                      <span className="inline-flex h-12 w-12 overflow-hidden rounded-full">
                        <Image src={avatar3Img} className="h-full max-w-full rounded-full" alt="avatar" />
                      </span>
                    </div>
                    <div className="flex w-full items-center">
                      <span className="grow text-start">
                        <span className="block text-lg font-medium text-default-900">Madelyn Torff</span>
                        <span className="mb-0.5 block text-xs font-medium text-default-600">Just sent you {currentCurrency}500</span>
                        <span className="inline-block border-b border-primary text-xs font-medium text-primary">Click for more detail</span>
                      </span>
                      <button className="flex items-center justify-center gap-1 rounded-lg border border-primary px-3 py-1 text-center text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white">
                        Pay now
                      </button>
                    </div>
                  </div>
                  <div className="mb-4 flex w-full flex-wrap items-start gap-4 sm:flex-nowrap">
                    <div className="shrink">
                      <span className="inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-yellow-500/20 text-yellow-500">
                        <LuWallet size={24} />
                      </span>
                    </div>
                    <div className="flex w-full items-center">
                      <span className="grow text-start">
                        <span className="block text-lg font-medium text-default-900">Madelyn Torff</span>
                        <span className="mb-0.5 block text-xs font-medium text-default-600">Just sent you {currentCurrency}500</span>
                      </span>
                      <button className="flex items-center justify-center gap-1 rounded-lg border border-primary px-3 py-1 text-center text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary hover:text-white">
                        Pay now
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2">
                    <button className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500">
                      Remind Me Later{' '}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet
