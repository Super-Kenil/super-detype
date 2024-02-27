'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LuSave, LuUndo } from 'react-icons/lu'
import { SelectFormInput, TextAreaFormInput, TextFormInput } from '@/components'

const EditCustomerForm = () => {
  const editCustomerFormSchema = yup.object({
    fname: yup.string().required('Please enter your first name'),
    lname: yup.string().required('Please enter your last name'),
    username: yup.string().required('Please enter your user name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    phoneNo: yup.number().required('Please enter your Phone NO.'),
    country: yup.string().required('Please select your Country'),
    state: yup.string().required('Please select your State/Province'),
    zipCode: yup.string().required('Please select your ZIP/Postal code'),
    description: yup.string().required('Please enter your description'),
  })
  type CustomerFormType = yup.InferType<typeof editCustomerFormSchema>
  const defaultValue: CustomerFormType = {
    fname: 'Tiana',
    lname: 'Geidt',
    username: 'tianageidt',
    email: 'tianageidt@mail.com',
    phoneNo: 9876785457,
    description:
      "Hi, I'm Kaiya Botosh, it has been the industry's standard dummy text since the 1500s when an unknown printer took a galley of type.",
    country: '',
    state: '',
    zipCode: '',
  }

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(editCustomerFormSchema),
    defaultValues: defaultValue,
  })

  const undoChanges = () => {
    reset(defaultValue)
  }
  return (
    <div className="rounded-lg border border-default-200">
      <form onSubmit={handleSubmit(() => {})} className="p-6">
        <div className="mb-6 grid gap-6 lg:grid-cols-2">
          <TextFormInput name="fname" label="First Name" type="text" control={control} fullWidth />
          <TextFormInput name="lname" label="Last Name" type="text" control={control} fullWidth />
          <TextFormInput name="username" label="User Name" type="text" control={control} fullWidth />
          <TextFormInput name="email" label="Email" type="email" control={control} fullWidth />
          <TextFormInput name="phoneNo" label="Phone Number" type="text" control={control} fullWidth />
          <SelectFormInput
            name="country"
            label="Country/Region"
            control={control}
            id="billing-country1"
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
            id="billing-state-province1"
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
            name="zipCode"
            label="ZIP/Postal Code"
            control={control}
            id="billing-zip-code1"
            instanceId="billing-zip-code"
            options={[
              { value: 356123, label: '356123' },
              { value: 350115, label: '350115' },
              { value: 350125, label: '350125' },
              { value: 350135, label: '350135' },
              { value: 350145, label: '350145' },
            ]}
          />
          <TextAreaFormInput name="description" label="Description" rows={5} containerClassName="lg:col-span-2" control={control} fullWidth />
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
    </div>
  )
}

export default EditCustomerForm
