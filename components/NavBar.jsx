'use client'
import { logoWhite, profile } from '@/assets/images'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
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
  const session = false

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

            {/* <!-- Left Side Menu (Desktop) --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/flashcards'
                  className={`${
                    pathName === '/flashcards' ? 'bg-black' : null
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Flashcards
                </Link>
                <Link
                  href='/quizzes'
                  className={`${
                    pathName === '/properties' ? 'bg-black' : null
                  } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                >
                  Quizzes
                </Link>

                {session && (
                  <>
                    <Link
                      href='/quizzes/add'
                      className={`${
                        pathName === '/quizzes/add' ? 'bg-black' : null
                      } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                    >
                      Add Quiz
                    </Link>
                    <Link
                      href='/flashcards/add'
                      className={`${
                        pathName === '/flashcards/add' ? 'bg-black' : null
                      } text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2`}
                    >
                      Add Flashcard
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!session && (
            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center'>
                <button className='flex items-center px-3 py-2 text-white bg-gray-700 rounded-md hover:bg-gray-900 hover:text-white'>
                  <span>Login or Register</span>
                </button>
              </div>
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}
          {session && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              {/* <!-- Profile dropdown button --> */}
              <div className='relative ml-3'>
                <div>
                  <button
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    type='button'
                    className='relative flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='w-8 h-8 rounded-full'
                      src={profile}
                      alt=''
                      sizes='100vh'
                      width={0}
                      height={0}
                      priority={true}
                    />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */}
                {openDropdown && (
                  <div
                    id='user-menu'
                    className='absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex='-1'
                  >
                    <Link
                      href='/profile'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-0'
                      onClick={() => setOpenDropdown(false)}
                    >
                      Your Profile
                    </Link>
                    <button
                      onClick={() => {
                        setOpenDropdown(false)
                        // signOut()
                      }}
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {openMobileMenu && (
        <div id='mobile-menu'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <Link
              href='/quizzes'
              className={`${
                pathName === '/quizzes' ? 'bg-gray-900 ' : null
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Quizzes
            </Link>
            <Link
              href='/flashcards'
              className={`${
                pathName === '/flashcards' ? 'bg-gray-900 ' : null
              } text-white block rounded-md px-3 py-2 text-base font-medium`}
            >
              Flashcards
            </Link>
            {session && (
              <>
                <Link
                  href='/quizzes/add'
                  className={`${
                    pathName === '/quizzes/add' ? 'bg-gray-900 ' : null
                  } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                  Add Quiz
                </Link>
                <Link
                  href='/flashcards/add'
                  className={`${
                    pathName === '/flashcards/add' ? 'bg-gray-900 ' : null
                  } text-white block rounded-md px-3 py-2 text-base font-medium`}
                >
                  Add Flashcard
                </Link>
              </>
            )}
            <button className='flex items-center px-3 py-2 my-8 text-white bg-gray-700 rounded-md hover:bg-gray-900 hover:text-white'>
              <span>Login or Register</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
