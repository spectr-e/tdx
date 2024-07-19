'use client'
import { logoWhite, profile } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa'
// import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const NavBar = () => {
  // authentication
  // const { data: session } = useSession()
  // const [providers, setProviders] = useState(null)

  // google avatar image
  // const profileImg = session?.user?.image

  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const pathName = usePathname()

  // useEffect(() => {
  //   const setAuthProviders = async () => {
  //     const response = await getProviders()
  //     setProviders(response)
  //   }
  //   setAuthProviders()
  // }, [])

  return (
    <nav className='bg-blue-700 border-b border-blue-500 font-poppins'>
      <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-20'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setOpenMobileMenu((prev) => !prev)}
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block w-6 h-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </button>
          </div>

          <div className='flex items-center justify-center flex-1 md:items-stretch md:justify-start'>
            {/* <!-- Logo --> */}
            <Link className='flex items-center flex-shrink-0' href='/'>
              <Image
                className='w-auto h-10'
                src={logoWhite}
                alt='Tatua'
                priority={true}
              />

              <span className='hidden ml-2 text-2xl font-bold text-white md:block'>
                Tatua
              </span>
            </Link>

            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className={`${
                    pathName === '/' ? 'bg-black' : null
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Home
                </Link>
                <Link
                  href='/properties'
                  className={`${
                    pathName === '/properties' ? 'bg-black' : null
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Properties
                </Link>

                <Link
                  href='/properties/add'
                  className={`${
                    pathName === '/properties/add' ? 'bg-black' : null
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Add Property
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {openMobileMenu && (
        <div id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link
              href='/'
              className={`${
                pathName === '/' ? 'bg-gray-900 ' : null
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Home
            </Link>
            <Link
              href='/properties'
              className={`${
                pathName === '/properties' ? 'bg-gray-900 ' : null
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Properties
            </Link>
            {session && (
              <Link
                href='/properties/add'
                className={`${
                  pathName === '/properties/add' ? 'bg-gray-900 ' : null
                } text-white block rounded-md px-3 py-2 text-base font-medium`}
              >
                Add Property
              </Link>
            )}
            {!session &&
              providers &&
              Object.values(providers).map((provider, idx) => (
                <button
                  key={idx}
                  onClick={() => signIn(provider.id)}
                  className='flex items-center px-3 py-2 my-8 text-white bg-gray-700 rounded-md hover:bg-gray-900 hover:text-white'
                >
                  <span>Login or Register</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
