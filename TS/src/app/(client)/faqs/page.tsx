import { type Metadata } from 'next'
import { LuMinus, LuPlus } from 'react-icons/lu'
import ContactForm from './ContactForm'
import { Breadcrumb } from '@/components'
import { cn } from '@/utils'
import { faqContent } from './data'

export const metadata: Metadata = {
  title: 'FAQs',
}

const FAQs = () => {
  return (
    <>
      <Breadcrumb title="FAQs" />
      <section className="py-6 lg:py-16">
        <div className="container">
          <h1 className="mb-6 text-4xl font-medium text-default-800">Frequently Asked Questions</h1>
          <div className="grid gap-10 lg:grid-cols-6">
            <div className="lg:col-span-4">
              <div className="hs-accordion-group space-y-4">
                {faqContent.map((faq, idx) => {
                  return (
                    <div
                      key={idx}
                      className={cn(
                        'hs-accordion overflow-hidden rounded-lg border border-default-200 hs-accordion-active:border-primary hs-accordion-active:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.1)]',
                        { active: idx == 0 }
                      )}
                      id={`faq-${idx}`}
                    >
                      <button
                        className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all hs-accordion-active:bg-primary hs-accordion-active:text-white"
                        aria-controls={`faq-accordion-${idx}`}
                      >
                        <h5 className="text-base font-semibold">{faq.title}</h5>
                        <div className="hs-accrdion-active:text-white inline-flex items-center justify-center rounded-full">
                          <LuPlus size={16} className="block hs-accordion-active:hidden" />
                          <LuMinus size={16} className="hidden hs-accordion-active:block" />
                        </div>
                      </button>
                      <div
                        id={`faq-accordion-${idx}`}
                        className={cn('hs-accordion-content w-full overflow-hidden transition-[height] duration-300', { hidden: idx != 0 })}
                        aria-labelledby={`faq-${idx}`}
                      >
                        <div className="px-6 py-4">
                          <p className="mb-4 text-sm font-medium text-default-600">{faq.description}</p>
                          {faq.points && (
                            <ul className="list-disc ps-6 text-default-600">
                              {faq.points.map((point, idx) => {
                                return (
                                  <li key={idx} className="mb-1">
                                    {point}
                                  </li>
                                )
                              })}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-lg bg-primary/10">
                <div className="p-8">
                  <h4 className="mb-2 text-xl font-medium text-default-950">Don’t find your answer, Ask for support.</h4>
                  <p className="mb-6 text-base">
                    Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis primis in faucibu raesent
                    eget sem purus.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQs
