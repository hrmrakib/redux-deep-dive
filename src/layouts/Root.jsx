import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <Navbar />

        <div>
          <Outlet />
        </div>
    </div>
  )
}

export default Root