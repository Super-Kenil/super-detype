'use client'
import { Controller, FieldPath, FieldValues } from 'react-hook-form'
import ReactSelect, { type Props } from 'react-select'
import { LuAlertCircle } from 'react-icons/lu'
import { FormInputProps } from './TextFormInput'
import { cn } from '@/utils'

const SelectFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  control,
  id,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  noValidate,
  fullWidth,
  ...other
}: FormInputProps<TFieldValues> & Props) => {
  return (
    <Controller<TFieldValues, TName>
      control={control}
      name={name as TName}
      render={({ field, fieldState }) => (
        <div className={containerClassName}>
          {label && (
            <label htmlFor={id ?? name} className={cn('mb-2 block text-sm font-medium text-default-900', labelClassName)}>
              {label}
            </label>
          )}
          <div className="relative">
            <ReactSelect
              {...other}
              {...field}
              classNamePrefix={'react-select'}
              unstyled
              id={id ?? name}
              className={cn(
                'block w-full cursor-pointer rounded-lg border border-default-200 bg-transparent focus-within:border focus-within:border-primary dark:bg-default-50',
                className,
                fullWidth && 'w-full',
                {
                  'border-red-500 focus:border-red-500': !noValidate && fieldState.error?.message,
                }
              )}
            />
            {!noValidate && fieldState.error?.message && (
              <div className="pointer-events-none absolute end-12 top-1/2 flex -translate-y-1/2 items-center">
                <LuAlertCircle size={20} className="text-red-500" />
              </div>
            )}
          </div>
          {!noValidate && fieldState.error?.message && <p className="mt-2 text-xs text-red-600">{fieldState.error.message}</p>}
        </div>
      )}
    />
  )
}

export default SelectFormInput
