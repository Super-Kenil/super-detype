'use client'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LuSearch } from 'react-icons/lu'
import { TextFormInput } from '@/components/form'

const TableSearchBox = () => {
  const searchFilterSchema = yup.object({
    search: yup.string().optional(),
  })

  const { control } = useForm({
    resolver: yupResolver(searchFilterSchema),
    mode: 'onChange',
  })

  return <TextFormInput name="search" control={control} className="max-w-sm" startInnerIcon={<LuSearch />} placeholder="Search..." fullWidth />
}

export default TableSearchBox
