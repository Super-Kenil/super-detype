'use client'
import { LuSave, LuUndo } from 'react-icons/lu'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { TextAreaFormInput, TextFormInput } from '@/components'

const BusinessDetailForm = () => {
  const businessDetailsFormSchema = yup.object({
    businessName: yup.string().required('Please enter your business name'),
    businessType: yup.string().required('Please enter your business type'),
    contactNO: yup.number().required('Please enter your contact Number'),
    gstNo: yup.string().required('Please enter your GST NO.'),
    website: yup.string().required('Please enter website url'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    description: yup.string().required('Please Enter your description'),
  })

  const defaultValue = {
    businessName: 'Healthy Feast Corner',
    businessType: 'Partnership',
    contactNO: 7465782356,
    gstNo: 'GYOST6472',
    website: 'http://healthyfeastcorner.com',
    email: 'kianna.vetrov@mail.com',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  }

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(businessDetailsFormSchema),
    defaultValues: defaultValue,
  })

  const undoChanges = () => {
    reset(defaultValue)
  }

  return (
    <form onSubmit={handleSubmit(() => {})} id="tabBusinessDetail" className="hidden" role="tabpanel">
      <h4 className="mb-6 text-lg font-medium text-default-900">Step 2:</h4>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <TextFormInput name="businessName" type="text" label="Business Name" control={control} fullWidth />
        <TextFormInput name="businessType" type="text" label="Business Type" control={control} fullWidth />
        <TextFormInput name="contactNO" type="text" label="Contact Number" control={control} fullWidth />
        <TextFormInput name="gstNo" type="text" label="GST Number" control={control} fullWidth />
        <TextFormInput name="website" type="text" label="Website" control={control} fullWidth />
        <TextFormInput name="email" type="email" label="Email" control={control} fullWidth />
        <TextAreaFormInput
          name="description"
          label="Description"
          placeholder="Enter Description"
          rows={5}
          containerClassName="lg:col-span-2"
          control={control}
          fullWidth
        />
      </div>
      <div className="flex flex-wrap justify-end gap-4">
        <button
          type="reset"
          onClick={undoChanges}
          className="inline-flex items-center gap-1 rounded-lg border border-primary bg-transparent px-5 py-2 text-center align-middle text-base font-semibold tracking-wide text-primary duration-500 hover:bg-primary hover:text-white"
        >
          <LuUndo size={20} />
          Cancel
        </button>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
        >
          <LuSave size={20} />
          Save
        </button>
      </div>
    </form>
  )
}

export default BusinessDetailForm
