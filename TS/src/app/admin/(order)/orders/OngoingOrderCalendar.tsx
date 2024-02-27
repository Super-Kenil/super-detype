'use client'
import { useForm } from 'react-hook-form'
import { DateFormInput } from '@/components'

const OngoingOrderCalendar = () => {
  const { control } = useForm({
    defaultValues: {
      date: new Date(),
    },
  })
  return (
    <DateFormInput
      name="date"
      type="date"
      className="block w-full rounded-md border-default-200 bg-transparent px-9 py-2 text-sm font-medium text-default-700 focus:border focus:border-primary"
      control={control}
      options={{ dateFormat: 'd/m/y' }}
    />
  )
}

export default OngoingOrderCalendar
