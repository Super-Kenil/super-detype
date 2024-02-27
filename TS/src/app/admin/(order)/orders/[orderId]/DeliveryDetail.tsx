import { truckIconImg } from '@/assets/data'
import Image from 'next/image'

const DeliveryDetail = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="border-b border-default-200 p-4">
        <h4 className="text-sm font-medium text-default-800">Delivery Details</h4>
      </div>
      <div className="p-6 text-center">
        <Image src={truckIconImg} className="mx-auto mb-3 flex" alt="truck" />
        <h4 className="mb-2 text-base font-medium text-default-800">Jay Logistics</h4>
        <p className="mb-2 text-base font-medium text-default-700">ID: JLST2023477890</p>
        <p className="text-base text-default-700">Payment Mode: Prepaid (Debit Card)</p>
      </div>
    </div>
  )
}

export default DeliveryDetail
