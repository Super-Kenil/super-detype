'use client'
import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react'
import { FieldPath, FieldValues, Controller, PathValue } from 'react-hook-form'
import { LuAlertCircle } from 'react-icons/lu'
import { cn } from '@/utils'
import { FormInputProps } from './TextFormInput'

type BaseInputProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

const TextAreaFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  control,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  noValidate,
  fullWidth,
  rows,
  ...other
}: FormInputProps<TFieldValues> & BaseInputProps) => {
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
            <textarea
              {...other}
              {...field}
              rows={rows ?? 3}
              className={cn('rounded-lg border border-default-200 px-4 py-2.5 dark:bg-default-50', className, fullWidth && 'w-full', {
                'border-red-500 focus:border-red-500': !noValidate && fieldState.error?.message,
              })}
            />
            {!noValidate && fieldState.error?.message && (
              <div className="pointer-events-none absolute inset-y-0 end-4 flex items-center">
                <LuAlertCircle size={20} className="text-red-500" />
              </div>
            )}
          </div>
          {!noValidate && fieldState.error?.message && <p className="mt-2 text-xs text-red-600">{fieldState.error.message}</p>}
        </div>
      )}
      name={name as TName}
    />
  )
}
export default TextAreaFormInput
