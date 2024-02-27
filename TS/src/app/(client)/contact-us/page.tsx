import Image from 'next/image'
import { type Metadata } from 'next'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import { Breadcrumb } from '@/components'
import ContactForm from './ContactForm'
import { contactOtherImg } from '@/assets/data/images'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact us',
}

const ContactUs = () => {
  return (
    <>
      <Breadcrumb title="Contact us" />
      <section className="py-6 lg:py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <h1 className="mb-2 text-2xl font-semibold text-default-800">Contact Information</h1>
              <p className="mb-8 max-w-xl text-sm text-default-600">
                Loremum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis.
              </p>
              <div className="flex items-center justify-center">
                <Image src={contactOtherImg} className="h-full max-w-full" alt="contact" />
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 lg:py-16">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg bg-default-400/10">
              <div className="p-8">
                <Link href="tel:+7867862387444" className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <LuPhone size={20} className="fill-white text-primary" />
                  </span>
                  <h4 className="text-lg font-medium text-default-950">Call Us</h4>
                </Link>
                <Link href="tel:+1234XXXX123" className="mb-2 text-sm text-default-500 block">
                  +1 234 XXXX 123
                </Link>
                <Link href="tel:+1234XXXX567" className="text-sm text-default-500 block">
                  +1 234 XXXX 567
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-default-400/10">
              <div className="p-8">
                <Link href="mailto:demomail123@mail.com" className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <LuMail size={20} className="fill-white text-primary" />
                  </span>
                  <h4 className="text-lg font-medium text-default-950">Email</h4>
                </Link>
                <Link href="mailto:support@coderthemes.com" className="mb-2 text-sm text-default-500 block">
                  support@coderthemes.com
                </Link>
                <Link href="mailto:helpdemo123@mail.com" className="text-sm text-default-500 block">
                  helpdemo123@mail.com
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-default-400/10">
              <div className="p-8">
                <div className="mb-6 flex items-center gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                    <LuMapPin size={20} className="fill-white text-primary" />
                  </span>
                  <h4 className="text-lg font-medium text-default-950">Address</h4>
                </div>
                <p className="mb-2 text-sm text-default-500">37125 Maya Estate Dr, Victoria Road,</p>
                <p className="text-sm text-default-500">Warsaw, Poland - 234834</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUs
