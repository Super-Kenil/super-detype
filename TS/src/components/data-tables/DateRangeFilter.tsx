'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LuCalendarDays } from 'react-icons/lu'
import { DateFormInput } from '@/components/form'

const DateRangeFilter = () => {
  const dateFilterSchema = yup.object({
    filterByDateRange: yup.date().optional(),
  })

  const { control } = useForm({
    resolver: yupResolver(dateFilterSchema),
    mode: 'onChange',
  })

  return (
    <DateFormInput
      name="filterByDateRange"
      control={control}
      className="max-w-[180px]"
      placeholder="01/05/2003"
      startInnerIcon={<LuCalendarDays />}
      options={{
        dateFormat: 'd/m/Y',
      }}
    />
  )
}

export default DateRangeFilter
