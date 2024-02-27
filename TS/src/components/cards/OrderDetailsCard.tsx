type OrderCardDetailsProps = {
  title: string
  name: string
  address: string
  email: string
  phoneNo: string
}

const OrderDetailsCard = ({ address, email, name, phoneNo, title }: OrderCardDetailsProps) => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="border-b border-default-200 p-4">
        <h4 className="text-sm font-medium text-default-800">{title}</h4>
      </div>
      <div className="p-4">
        <h4 className="mb-1 text-base font-medium text-default-800">{name}</h4>
        <p className="mb-4 text-sm text-default-600">{address}</p>
        <h4 className="mb-1 text-base font-medium text-default-800">Email</h4>
        <p className="mb-4 text-sm text-default-600">{email}</p>
        <h4 className="mb-1 text-base font-medium text-default-800">Phone</h4>
        <p className="mb-4 text-sm text-default-600">{phoneNo}</p>
      </div>
    </div>
  )
}

export default OrderDetailsCard
