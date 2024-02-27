'use client'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LuCreditCard, LuDollarSign } from 'react-icons/lu'
import { amazonPaymentImg, paypal2PaymentImg } from '@/assets/data/images'
import { DateFormInput, SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'
import OrderSummary from './OrderSummary'

const BillingInformation = () => {
  const billingFormSchema = yup.object({
    fname: yup.string().required('Please enter your user name'),
    lName: yup.string().required('Please enter your Last Name'),
    companyName: yup.string().optional(),
    address: yup.string().required('Please enter your Address'),
    country: yup.string().required('Please select your Country'),
    state: yup.string().required('Please select your State/Province'),
    city: yup.string().required('Please select your City'),
    zipCode: yup.string().required('Please select your ZIP/Postal code'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    phoneNo: yup.number().required('Please enter your Phone NO.'),
    nameOnCard: yup.string().required('Please enter your Name.'),
    cardNo: yup
      .number()
      .min(16, 'Card number should consist of 16 digits')
      .max(16, 'Card number should not exceed 16 digits')
      .required('Please enter your Card No.'),
    expiryDate: yup.date().required('Please enter Expire date'),
    cvvNo: yup
      .number()
      .max(4, 'CVV number should not exceed 4 digits')
      .min(3, 'CVV number should consist minimum 3 digits')
      .required('Please enter CVV Number'),
    message: yup.string().optional(),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(billingFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(() => {})} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="col-span-1 lg:col-span-2">
        <div className="mb-8">
          <h4 className="mb-6 text-lg font-medium text-default-800">Billing Information</h4>
          <div className="grid gap-6 lg:grid-cols-4">
            <TextFormInput name="fname" type="text" label="First name" placeholder="First Name" control={control} fullWidth />

            <TextFormInput name="lName" type="text" label="Last Name" placeholder="Last Name" control={control} fullWidth />

            <TextFormInput
              name="companyName"
              type="text"
              label="Company Name (Optional)"
              placeholder="Company Name"
              containerClassName="lg:col-span-2"
              control={control}
              fullWidth
            />

            <TextAreaFormInput
              name="address"
              label="Address"
              placeholder="Enter Your Address"
              containerClassName="lg:col-span-4"
              control={control}
              fullWidth
            />

            <SelectFormInput
              name="country"
              label="Country"
              control={control}
              id="billing-country"
              instanceId="billing-country"
              options={[
                { value: 'United States', label: 'United States' },
                { value: 'Canada', label: 'Canada' },
                { value: 'Australia', label: 'Australia' },
                { value: 'Germany', label: 'Germany' },
                { value: 'Bangladesh', label: 'Bangladesh' },
                { value: 'China', label: 'China' },
                { value: 'Argentina', label: 'Argentina' },
                { value: 'Bharat', label: 'Bharat' },
                { value: 'Afghanistan', label: 'Afghanistan' },
                { value: 'France', label: 'France' },
                { value: 'Brazil', label: 'Brazil' },
                { value: 'Belgium', label: 'Belgium' },
                { value: 'Colombia', label: 'Colombia' },
                { value: 'Albania', label: 'Albania' },
              ]}
            />

            <SelectFormInput
              name="state"
              label="State/Province"
              control={control}
              id="billing-state-province"
              instanceId="billing-state-province"
              options={[
                { value: 'Alabama', label: 'Alabama' },
                { value: 'Alaska', label: 'Alaska' },
                { value: 'Arizona', label: 'Arizona' },
                { value: 'Arkansas', label: 'Arkansas' },
                { value: 'California', label: 'California' },
                { value: 'Colorado', label: 'Colorado' },
                { value: 'Connecticut', label: 'Connecticut' },
                { value: 'Delaware', label: 'Delaware' },
                { value: 'Florida', label: 'Florida' },
                { value: 'Gujarat', label: 'Gujarat' },
                { value: 'Iowa', label: 'Iowa' },
                { value: 'Kansas', label: 'Kansas' },
                { value: 'Kentucky', label: 'Kentucky' },
              ]}
            />

            <SelectFormInput
              name="city"
              label="City"
              control={control}
              id="billing-city"
              instanceId="billing-city"
              options={[
                { value: 'Alexander', label: 'Alexander' },
                { value: 'Andalusia', label: 'Andalusia' },
                { value: 'Anniston', label: 'Anniston' },
                { value: 'Athens', label: 'Athens' },
                { value: 'Atmore', label: 'Atmore' },
                { value: 'Auburn', label: 'Auburn' },
                { value: 'Chickasaw', label: 'Chickasaw' },
                { value: 'Clanton', label: 'Clanton' },
                { value: 'Demopolis', label: 'Demopolis' },
                { value: 'Guntersville', label: 'Guntersville' },
                { value: 'Huntsville', label: 'Huntsville' },
                { value: 'Jasper', label: 'Jasper' },
                { value: 'Marion', label: 'Marion' },
              ]}
            />

            <SelectFormInput
              name="zipCode"
              label="ZIP/Postal Code"
              control={control}
              id="billing-zip-code"
              instanceId="billing-zip-code"
              options={[
                { value: 356123, label: '356123' },
                { value: 350115, label: '350115' },
                { value: 350125, label: '350125' },
                { value: 350135, label: '350135' },
                { value: 350145, label: '350145' },
              ]}
            />

            <TextFormInput
              name="email"
              type="text"
              label="Email"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="example@example.com"
              containerClassName="lg:col-span-2"
              control={control}
            />

            <TextFormInput
              name="phoneNo"
              type="text"
              label="Phone Number"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="+1  123-XXX-7890"
              containerClassName="lg:col-span-2"
              control={control}
            />

            <div className="flex items-center">
              <input
                id="shipmentAddress"
                className="h-5 w-5 rounded border-default-200 bg-transparent text-primary focus:ring-0"
                type="checkbox"
                placeholder="+1  123-XXX-7890"
              />
              <label htmlFor="shipmentAddress" className="ms-2 block text-sm text-default-700">
                Ship into different address{' '}
              </label>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h4 className="mb-6 text-lg font-medium text-default-800">Payment Option</h4>
          <div className="mb-5 rounded-lg border border-default-200 p-6 lg:w-5/6">
            <div className="grid grid-cols-2 lg:grid-cols-4">
              <div className="p-6 text-center">
                <label htmlFor="paymentCOD" className="mb-4 flex flex-col items-center justify-center">
                  <LuDollarSign className="mb-4 text-primary" size={24} />
                  <h5 className="text-sm font-medium text-default-700">Cash on Delivery</h5>
                </label>
                <input
                  id="paymentCOD"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                  defaultChecked
                />
              </div>
              <div className="p-6 text-center">
                <label htmlFor="paymentPaypal" className="mb-4 flex flex-col items-center justify-center">
                  <Image src={paypal2PaymentImg} className="mb-4 h-6 w-6" alt="paypal" />
                  <h5 className="text-sm font-medium text-default-700">Paypal</h5>
                </label>
                <input
                  id="paymentPaypal"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                />
              </div>
              <div className="p-6 text-center">
                <label htmlFor="paymentAmazonPay" className="mb-4 flex flex-col items-center justify-center">
                  <Image src={amazonPaymentImg} className="mb-4 h-6 w-6 dark:invert" alt="amazon" />
                  <h5 className="text-sm font-medium text-default-700">Amazon Pay</h5>
                </label>
                <input
                  id="paymentAmazonPay"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                />
              </div>
              <div className="p-6 text-center">
                <label htmlFor="paymentCard" className="mb-4 flex flex-col items-center justify-center">
                  <LuCreditCard className="mb-4 text-primary" size={24} />
                  <h5 className="text-sm font-medium text-default-700">Debit/Credit Card</h5>
                </label>
                <input
                  id="paymentCard"
                  className="h-5 w-5 border-default-200 bg-transparent text-primary focus:ring-0"
                  type="radio"
                  name="paymentOption"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <TextFormInput
              name="nameOnCard"
              type="text"
              label="Name on Card"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="Enter card holder name"
              containerClassName="lg:col-span-2"
              control={control}
            />

            <TextFormInput
              name="cardNo"
              type="text"
              label="Card Number"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="Enter card number"
              containerClassName="lg:col-span-2"
              control={control}
            />

            <DateFormInput
              name="expiryDate"
              type="date"
              label="Expire Date"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="MM/YY"
              control={control}
              options={{
                dateFormat: 'm/y',
              }}
              fullWidth
            />

            <TextFormInput
              name="cvvNo"
              type="text"
              label="CVV"
              className="block w-full rounded-lg border border-default-200 bg-transparent px-4 py-2.5 dark:bg-default-50"
              placeholder="Enter CVV number"
              maxLength={4}
              control={control}
            />
          </div>
        </div>
        <div>
          <h4 className="mb-6 text-lg font-medium text-default-800">Additional Information</h4>

          <TextAreaFormInput
            name="message"
            label="Message (optional)"
            placeholder="Notes about your order, e.g. special notes for delivery"
            control={control}
            fullWidth
          />
        </div>
      </div>

      <OrderSummary />
    </form>
  )
}

export default BillingInformation
