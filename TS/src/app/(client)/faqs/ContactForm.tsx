'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextAreaFormInput, TextFormInput } from '@/components'

const ContactForm = () => {
  const contactFormSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    subject: yup.string().required('Please enter your subject'),
    message: yup.string().required('Please enter your message'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactFormSchema),
  })

  return (
    <form onSubmit={handleSubmit(() => {})}>
      <TextFormInput
        name="email"
        label="Email"
        labelClassName="sr-only"
        className="block bg-white"
        placeholder="Email Address"
        type="email"
        containerClassName="mb-4"
        control={control}
        fullWidth
      />
      <TextFormInput
        name="subject"
        label="Subject"
        labelClassName="sr-only"
        className="block bg-white"
        placeholder="Subject"
        type="email"
        containerClassName="mb-4"
        control={control}
        fullWidth
      />
      <TextAreaFormInput
        name="message"
        label="Message (Optional)"
        labelClassName="sr-only"
        className="block bg-white"
        placeholder="Message (Optional)"
        rows={5}
        containerClassName="mb-4"
        control={control}
        fullWidth
      />
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-lg bg-primary px-10 py-2.5 text-center font-medium text-white transition-all hover:bg-primary-500"
        >
          Contact us
        </button>
      </div>
    </form>
  )
}

export default ContactForm
