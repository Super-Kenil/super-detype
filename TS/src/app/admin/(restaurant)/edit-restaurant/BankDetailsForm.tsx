'use client'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { LuSave, LuUndo } from 'react-icons/lu'
import { TextFormInput } from '@/components'

const BankDetailsForm = () => {
  const businessDetailsFormSchema = yup.object({
    bankName: yup.string().required('Please enter your bank name'),
    branchName: yup.string().required('Please enter your branch name'),
    holderName: yup.string().required('Please enter your account holder name'),
    accountNo: yup.number().required('Please enter your account no.'),
    ifscNo: yup.string().required('Please enter IFSC code'),
  })

  const defaultValue = {
    bankName: 'National Bank of Canada',
    branchName: 'Alberta',
    holderName: 'Kianna Vetrovs',
    accountNo: 378282246310005,
    ifscNo: 'BOFA0MM6205',
  }
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(businessDetailsFormSchema),
    defaultValues: defaultValue,
  })

  const undoChanges = () => {
    reset(defaultValue)
  }

  return (
    <form onSubmit={handleSubmit(() => {})} id="tabBankDetail" className="hidden" role="tabpanel">
      <h4 className="mb-6 text-lg font-medium text-default-900">Step 3:</h4>
      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <TextFormInput name="bankName" type="text" label="Bank Name" control={control} fullWidth />
        <TextFormInput name="branchName" type="text" label="Branch" control={control} fullWidth />
        <TextFormInput name="holderName" type="text" label="Account Holder Name" containerClassName="lg:col-span-2" control={control} fullWidth />
        <TextFormInput name="accountNo" type="text" label="Account Number" control={control} fullWidth />
        <TextFormInput name="ifscNo" type="text" label="IFSC Code" control={control} fullWidth />
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

export default BankDetailsForm
