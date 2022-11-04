import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useStateContext } from '../../context/UserContext';

const Layout = ({ children }) => {

  const { activeMenu } = useStateContext()
  // const activeMenu = true
  return (
    <div>
      <div className='flex relative bg-white dark:bg-stone-800'>
        {activeMenu ? (
          <div className='w-60 fixed sidebar drop-shadow-lg bg-white dark:bg-stone-800 
          peer-focus:left-0 peer:transition ease-in delay-150 duration-200'
          style={{ zIndex: 1000 }}>
            <Sidebar />
          </div>
        ) : (
          <div className='w-0 peer-focus:right-0 peer:transition ease-out delay-150 duration-200'>
            <Sidebar />
          </div>
        )}
        <div className={`w-full bg-white min-h-screen
        dark:bg-stone-800  ${activeMenu ? 'md:ml-60' : 'flex-2'}`}>
          <div className='relative w-full navbar md:static fixed bg-white dark:bg-stone-800'>
            <Navbar />
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout