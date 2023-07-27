import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 w-full left-0 bg-inherit flex 
    items-center justify-between p-4 px-6 border-b border-white'>
      <h1 className='text-3xl select-none sm:text-6xl'>TODO LIST</h1>
      <i className="fa-solid fa-user text-xl duration-300 sm:text-3xl"></i>
    </div>
  )
}

export default Header
