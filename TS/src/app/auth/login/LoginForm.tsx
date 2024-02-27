'use client'
import Link from 'next/link'
import React from 'react'
import { LuCopy, LuLock, LuMail, LuShield, LuUser } from 'react-icons/lu'
import useLogin from './useLogin'
import { PasswordFormInput, TextFormInput } from '@/components'

const LoginForm = () => {
  const { loading, login, control, changeUserRole } = useLogin()

  return (
    <>
      <form onSubmit={login}>
        <TextFormInput name="email" control={control} type="email" placeholder="Enter your email" label="Email" containerClassName="mb-6" fullWidth />

        <PasswordFormInput
          name="password"
          control={control}
          label="Password"
          labelClassName="block text-sm font-medium text-default-900 mb-2"
          containerClassName="mb-1"
          fullWidth
        />

        <Link href="/auth/forgot-password" className="float-right text-end text-sm text-default-600 underline">
          Forgot Password?
        </Link>

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-primary px-6 py-3 text-base capitalize text-white transition-all hover:bg-primary-500"
          disabled={loading}
        >
          Log In
        </button>
      </form>

      <div className="mt-6 flex flex-col justify-center gap-4">
        <div className="flex flex-col gap-2 rounded-lg border border-dashed border-primary">
          <div className="flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2">
            <div className="inline-flex items-center gap-2">
              <LuUser size={22} />
              <p className="text-base text-default-900">User</p>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600"
              onClick={() => changeUserRole('user')}
            >
              <LuCopy />
              Use
            </button>
          </div>
          <p className="p-2 px-4">
            <span className="flex items-center gap-2 text-sm">
              <LuMail size={18} /> user@coderthemes.com
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm">
              <LuLock size={18} /> password
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-dashed border-primary">
          <div className="flex items-center justify-between gap-2 border-b border-dashed border-primary px-4 py-2">
            <div className="inline-flex items-center gap-2">
              <LuShield size={22} />
              <p className="text-base text-default-900">Administator</p>
            </div>
            <button
              className="flex items-center gap-1.5 rounded-md bg-primary px-2 py-1 text-sm text-white transition-all hover:bg-primary-600"
              onClick={() => changeUserRole('admin')}
            >
              <LuCopy />
              Use
            </button>
          </div>
          <p className="p-2 px-4">
            <span className="flex items-center gap-2 text-sm">
              <LuMail size={18} /> admin@coderthemes.com
            </span>
            <span className="mt-2 flex items-center gap-2 text-sm">
              <LuLock size={18} /> password
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default LoginForm
