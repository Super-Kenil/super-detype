const LogisticsDetails = () => {
  return (
    <div className="rounded-lg border border-default-200">
      <div className="border-b border-default-200 p-4">
        <h4 className="text-sm font-medium text-default-800">Logistics Details</h4>
      </div>
      <div className="px-4">
        <div className="flex justify-between border-b border-default-200 py-4">
          <h4 className="text-sm text-default-700">Transaction ID :</h4>
          <h4 className="text-sm font-medium text-default-800">#20234567213</h4>
        </div>
        <div className="flex justify-between border-b border-default-200 py-4">
          <h4 className="text-sm text-default-700">Payment Method :</h4>
          <h4 className="text-sm font-medium text-default-800">#20234567213</h4>
        </div>
        <div className="flex justify-between border-b border-default-200 py-4">
          <h4 className="text-sm text-default-700">Card Holder Name :</h4>
          <h4 className="text-sm font-medium text-default-800">Jaylon Calzoni</h4>
        </div>
        <div className="flex justify-between py-4">
          <h4 className="text-sm text-default-700">Card Number :</h4>
          <h4 className="text-sm font-medium text-default-800">1234 4354 4564</h4>
        </div>
      </div>
    </div>
  )
}

export default LogisticsDetails
