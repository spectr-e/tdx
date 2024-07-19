'use client'
import { Typography } from '@material-tailwind/react'
import { useState } from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center w-full min-h-screen pt-6 bg-gray-50 sm:justify-center sm:pt-0'>
      <div className='w-full p-5 mx-auto sm:max-w-md'>
        <h2 className='mb-12 text-4xl font-extrabold text-center'>
          Sign In to Tatua
        </h2>
        <form>
          {/* email field */}
          <div className='mb-4'>
            <Typography
              variant='small'
              className='block mb-2 font-semibold text-gray-900'
            >
              Email
            </Typography>
            <input
              id='email'
              type='text'
              name='email'
              placeholder='someone@example.com'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100'
            />
          </div>
          {/* password field */}
          <div className='mb-4'>
            <Typography
              variant='small'
              className='block mb-2 font-semibold text-gray-900'
            >
              Password
            </Typography>
            <input
              id='password'
              type='password'
              name='password'
              placeholder='*************'
              className='block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-100'
            />
          </div>
          {/* log in button */}
          <div className='mt-6'>
            <button className='inline-flex items-center justify-center w-full px-4 py-2 font-semibold text-white capitalize transition bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200 disabled:opacity-25'>
              Login
            </button>
          </div>
          {/* register prompt */}
          <Typography
            variant='small'
            color='gray'
            className='!mt-4 text-center font-normal'
          >
            Not registered?{' '}
            <a href='#' className='font-medium text-gray-900'>
              Create account
            </a>
          </Typography>
          {/* <div className='mt-6 text-center'>
            <a href='#' className='underline'>
              Sign up for an account
            </a>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Login
