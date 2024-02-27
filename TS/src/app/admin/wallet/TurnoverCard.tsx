import { currentCurrency } from '@/common'
import { LuTrendingDown, LuTrendingUp } from 'react-icons/lu'

type TurnoverCardType = {
  title: string
  amount: number
  isPositive?: boolean
  change: number
}

const TurnoverCard = ({ title, amount, change, isPositive }: TurnoverCardType) => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="p-6">
        <p className="mb-6 text-base font-medium text-default-600">{title}</p>
        <h3 className="mb-6 text-2xl font-semibold text-default-900">
          {currentCurrency} {amount}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
              isPositive ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
            } `}
          >
            {isPositive ? <LuTrendingUp size={20} /> : <LuTrendingDown size={20} />}
          </span>
          <span className="text-lg font-medium text-default-500">{change}%</span>
        </div>
      </div>
    </div>
  )
}

export default TurnoverCard
