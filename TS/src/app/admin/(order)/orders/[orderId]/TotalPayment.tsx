import { currentCurrency } from '@/common'

const TotalPayment = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="border-b border-default-200 p-4">
        <h4 className="text-sm font-medium text-default-800">Total Payment :</h4>
      </div>
      <div className="px-4">
        <div className="flex justify-between border-b border-default-200 py-4">
          <h4 className="text-sm text-default-700">Subtotal :</h4>
          <h4 className="text-sm font-medium text-default-800">{currentCurrency}365.00</h4>
        </div>
        <div className="flex justify-between border-b border-default-200 py-4">
          <h4 className="text-sm text-default-700">Discount :</h4>
          <h4 className="text-sm font-medium text-default-800">20%</h4>
        </div>
        <div className="flex justify-between border-b border-default-200 py-4">
          <h4 className="text-sm text-default-700">Shipping :</h4>
          <h4 className="text-sm font-medium text-default-800">Free</h4>
        </div>
        <div className="flex justify-between py-4">
          <h4 className="text-lg text-default-700">Total :</h4>
          <h4 className="text-lg font-medium text-default-800">{currentCurrency}84.00</h4>
        </div>
      </div>
    </div>
  )
}

export default TotalPayment
