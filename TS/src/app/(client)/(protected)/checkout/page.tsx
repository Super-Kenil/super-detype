import { type Metadata } from 'next'
import BillingInformationForm from './BillingInformationForm'
import { Breadcrumb } from '@/components'

export const metadata: Metadata = {
  title: 'Checkout',
}

const Checkout = () => {
  return (
    <>
      <Breadcrumb title="Checkout" subtitle="Order" />
      <section className="py-6 lg:py-10">
        <div className="container">
          <BillingInformationForm />
        </div>
      </section>
    </>
  )
}

export default Checkout
