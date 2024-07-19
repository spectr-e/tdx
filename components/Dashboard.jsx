import { card, quiz } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  const session = true
  return (
    <div className='flex flex-col items-start w-full min-h-[80vh] py-16 overflow-hidden bg-gray-50 '>
      <div className='container px-6 m-auto space-y-8 text-gray-500 md:px-12'>
        {/* page title & description */}
        <div>
          <span className='text-lg font-semibold text-gray-600'>
            Welcome to Tatua
          </span>
          <h2 className='mt-4 text-2xl font-bold text-gray-900 md:text-4xl'>
            An intuitive way to learn and become
            <br className='lg:block' hidden />
            smart 🤩
          </h2>
        </div>
        {/* dashboard cards */}
        <div className='grid mt-16 overflow-hidden border divide-x divide-y rounded-xl sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-2 xl:grid-cols-2'>
          {/* card one (1) */}
          <Link
            href='/quizzes'
            className='relative group bg-white transition hover:z-[1] hover:shadow-2xl hover:cursor-pointer'
          >
            <div className='relative p-8 space-y-8'>
              <Image
                src={quiz}
                className='w-10'
                width='512'
                height='512'
                alt='burger illustration'
                priority={true}
              />

              <div className='space-y-2'>
                <h5 className='text-xl font-medium text-gray-800'>Quizzes</h5>
                <p className='text-sm text-gray-600'>
                  Designed to reinforce knowledge and assess understanding of
                  book content, featuring instant feedback.
                </p>
              </div>
              <div className='flex items-center justify-between group-hover:text-yellow-700'>
                <span className='px-4 py-2 text-sm text-white bg-yellow-600 border rounded-xl hover:bg-yellow-700'>
                  Let's Go!
                </span>
                <span className='text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
          {/* card two (2) */}
          <Link
            href='/flashcards'
            className='relative group bg-white transition hover:z-[1] hover:shadow-2xl hover:cursor-pointer'
          >
            <div className='relative p-8 space-y-8'>
              <Image
                src={card}
                className='w-10'
                width='512'
                height='512'
                alt='burger illustration'
                priority={true}
              />

              <div className='space-y-2'>
                <h5 className='text-xl font-medium text-gray-800 '>
                  Flashcards
                </h5>
                <p className='text-sm text-gray-600'>
                  Facilitate quick recall and memorization of key concepts.Study
                  effectively and at your own pace.
                </p>
              </div>
              <div className='flex items-center justify-between group-hover:text-red-900'>
                <span className='px-4 py-2 text-sm text-white bg-red-400 border rounded-xl hover:bg-red-700'>
                  Let's Go!
                </span>
                <span className='text-2xl transition duration-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
