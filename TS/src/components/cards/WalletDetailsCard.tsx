'use client'
import { WalletCardSwiper } from '@/components'
import { useToggle } from '@/hooks'
import { cardsData } from '@/assets/data'
import { currentCurrency } from '@/common'

const WalletDetailsCard = () => {
  const { isOpen: isActive, toggle: toggleActive } = useToggle(true)

  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <h3 className="mb-6 text-lg font-semibold text-default-800">Card Details</h3>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 divide-y divide-default-200 xl:grid-cols-3 xl:divide-x xl:divide-y-0">
          <div className="col-span-1 lg:col-span-2">
            <WalletCardSwiper cards={cardsData} />

            <div className="px-6">
              <div className="space-y-2">
                <div className="relative flex h-2 w-full overflow-hidden rounded-full bg-default-200">
                  <div
                    className="flex h-full w-[35%] items-center justify-center rounded-full bg-primary text-white"
                    role="progressbar"
                    aria-valuenow={35}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="font-medium text-default-400">Weekly payment limit</div>
                  <div className="text-sm font-medium text-default-950">
                    <span className="text-default-400">{currentCurrency}1200.10</span> / {currentCurrency}4000
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-1">
            <div className="pt-10 text-start xl:ps-10 xl:pt-0 xl:text-end">
              <h1 className="text-2xl font-semibold text-primary">{currentCurrency}2850.75</h1>
              <p className="mb-6 text-base">Current Balance</p>
              <h2 className="text-xl font-semibold text-green-500">{currentCurrency}4595.50</h2>
              <p className="mb-6 text-base">Income</p>
              <h2 className="mb-1 text-lg font-semibold text-red-500">{currentCurrency}412.40</h2>
              <p className="mb-6 text-base">Outgoing</p>
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="hs-basic-usage"
                  className="relative h-7 w-[3.25rem] cursor-pointer appearance-none rounded-full border-2 border-transparent bg-default-200 transition-colors duration-200 ease-in-out before:inline-block before:h-6 before:w-6 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:transition before:duration-200 before:ease-in-out checked:!bg-green-500 checked:bg-none checked:before:translate-x-full focus:ring-0 focus:ring-transparent"
                  onChange={() => toggleActive()}
                  defaultChecked
                />
                <label htmlFor="hs-basic-usage" className="sr-only">
                  switch
                </label>
              </div>
              <p className="text-base"> Card {isActive ? 'Activated' : 'Deactivated'} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletDetailsCard
