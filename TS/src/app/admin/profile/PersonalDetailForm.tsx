'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import { SelectFormInput, TextFormInput } from '@/components'

// styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageCrop)

const PersonalDetailForm = () => {
  const personalDetailsFormSchema = yup.object({
    fName: yup.string().required('Please enter your first name'),
    lName: yup.string().required('Please enter your last Name'),
    userName: yup.string().required('Please enter your user Name'),
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
    phoneNo: yup.number().required('Please enter your Phone NO.'),
    country: yup.string().required('Please select your Country'),
    state: yup.string().required('Please select your State/Province'),
    zipCode: yup.string().required('Please select your ZIP/Postal code'),
  })

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(personalDetailsFormSchema),
  })

  return (
    <div className="mb-6 rounded-lg border border-default-200 p-6">
      <div>
        <h4 className="mb-4 text-xl font-medium text-default-900">Personal Details</h4>
        <div className="grid gap-6 xl:grid-cols-5">
          <div className="xl:col-span-1">
            <div className="mx-auto">
              <FilePond
                className="mx-auto h-44 w-44 lg:h-48 lg:w-48 "
                labelIdle="Add Photo"
                imagePreviewHeight={110}
                imageCropAspectRatio="1:1"
                stylePanelLayout="compact circle"
                styleButtonRemoveItemPosition="center bottom"
              />
            </div>
          </div>
          <div className="xl:col-span-4">
            <form onSubmit={handleSubmit(() => {})} className="grid gap-6 lg:grid-cols-2">
              <TextFormInput name="fName" label="First Name" type="text" placeholder="Enter Your First Name" control={control} fullWidth />
              <TextFormInput name="lName" label="Last Name" type="text" placeholder="Enter Your Last Name" control={control} fullWidth />
              <TextFormInput name="lName" label="User Name" type="text" placeholder="Enter Your User Name" control={control} fullWidth />
              <TextFormInput name="email" label="Email" type="email" placeholder="demoexample@mail.com" control={control} fullWidth />
              <TextFormInput name="phoneNo" label="Phone Number" type="text" placeholder="+1-123-XXX-4567" control={control} fullWidth />
              <SelectFormInput
                name="country"
                label="Country"
                control={control}
                id="billing-country2"
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
                id="billing-state-province2"
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
                id="billing-zip-code2"
                instanceId="billing-zip-code"
                options={[
                  { value: 356123, label: '356123' },
                  { value: 350115, label: '350115' },
                  { value: 350125, label: '350125' },
                  { value: 350135, label: '350135' },
                  { value: 350145, label: '350145' },
                ]}
              />
              <div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-lg border border-primary bg-primary px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-primary-500"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetailForm
