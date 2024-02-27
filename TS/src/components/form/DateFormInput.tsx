'use client'
import { type ReactNode } from 'react'
import { FieldPath, FieldValues, Controller, PathValue } from 'react-hook-form'
import DatePicker, { DateTimePickerProps } from 'react-flatpickr'
import { LuAlertCircle } from 'react-icons/lu'
import { cn } from '@/utils'
import { FormInputProps } from './TextFormInput'

type ExtendedDateFormInput = {
  startInnerIcon?: ReactNode
}

const DateFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  control,
  id,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  noValidate,
  fullWidth,
  type,
  startInnerIcon,
  ...other
}: FormInputProps<TFieldValues> & ExtendedDateFormInput & DateTimePickerProps) => {
  return (
    <Controller<TFieldValues, TName>
      control={control}
      defaultValue={'' as PathValue<TFieldValues, TName>}
      render={({ field, fieldState }) => (
        <div className={cn(containerClassName, 'relative', fullWidth && 'w-full')}>
          {label && (
            <label className={cn('mb-2 block text-sm font-medium text-default-900', labelClassName)} htmlFor={name}>
              {label}
            </label>
          )}
          <div className={cn('relative', fullWidth && 'w-full')}>
            <DatePicker
              {...other}
              {...field}
              value={field.value ?? ''}
              className={cn(
                'form-input rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50 ',
                { 'w-full': fullWidth },
                { 'ps-10': startInnerIcon },
                {
                  'border-red-500 focus:border-red-500': !noValidate && fieldState.error?.message,
                },
                className
              )}
              onChange={([date]) => {
                field.onChange(date)
              }}
            />

            {!noValidate && fieldState.error?.message && (
              <div className="pointer-events-none absolute inset-y-0 end-4 flex items-center">
                <LuAlertCircle size={20} className="text-red-500" />
              </div>
            )}

            {startInnerIcon && <span className="absolute start-3 top-1/2 -translate-y-1/2">{startInnerIcon}</span>}
          </div>
          {!noValidate && fieldState.error?.message && <p className="mt-2 text-xs text-red-600">{fieldState.error.message}</p>}
        </div>
      )}
      name={name as TName}
    />
  )
}

export default DateFormInput
