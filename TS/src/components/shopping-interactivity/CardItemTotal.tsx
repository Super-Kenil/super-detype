'use client'
import { currentCurrency } from '@/common'
import { useShoppingContext } from '@/context'
import { getPreciseCurrency } from '@/helpers'

const CardItemTotal = () => {
  const { getCalculatedOrder } = useShoppingContext()
  return (
    <p>
      {currentCurrency}
      {getPreciseCurrency(getCalculatedOrder().orderTotal)}
    </p>
  )
}

export default CardItemTotal
