'use client'
import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { FieldPath, FieldValues, Controller, PathValue } from 'react-hook-form'
import { LuAlertCircle, LuEye, LuEyeOff } from 'react-icons/lu'
import { cn } from '@/utils'
import { FormInputProps } from './TextFormInput'

type BaseInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const PasswordFormInput = <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({
  control,
  name,
  label,
  className,
  labelClassName,
  containerClassName,
  noValidate,
  fullWidth,
  ...other
}: FormInputProps<TFieldValues> & BaseInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

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
          <div className={cn('flex', fullWidth && 'w-full')}>
            <div className={cn('relative', fullWidth && 'w-full')}>
              <input
                {...other}
                {...field}
                type={showPassword ? 'text' : 'password'}
                className={cn(
                  'rounded-e-none rounded-s-lg border border-default-200 px-4 py-2.5 focus:border-primary dark:bg-default-50',
                  className,
                  fullWidth && 'w-full',
                  {
                    'border-red-500 focus:border-red-500': !noValidate && fieldState.error?.message,
                  }
                )}
              />

              {!noValidate && fieldState.error?.message && (
                <div className="pointer-events-none absolute inset-y-0 end-4 flex items-center">
                  <LuAlertCircle size={20} className="text-red-500" />
                </div>
              )}
            </div>
            <button
              className="password-toggle ms-[1px] inline-flex items-center justify-center rounded-e-lg border border-s-0 border-default-200 bg-white px-4 py-2.5 dark:bg-default-50"
              onClick={() => {
                setShowPassword(!showPassword)
              }}
              type="button"
            >
              {showPassword ? <LuEyeOff size={20} className="text-default-600" /> : <LuEye size={20} className="text-default-600" />}
            </button>
          </div>
          {!noValidate && fieldState.error?.message && <p className="mt-2 text-xs text-red-600">{fieldState.error.message}</p>}
        </div>
      )}
      name={name as TName}
    />
  )
}

export default PasswordFormInput
