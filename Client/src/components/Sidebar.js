import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Navbar></Navbar>
        <Search></Search>
    </div>
  )
}

export default Sidebar