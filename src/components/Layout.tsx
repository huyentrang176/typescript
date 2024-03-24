import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Sidebar from './Sidebar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />
      <Banner />
      <div className="row mt-5">
        <div className="col-3">
          <Sidebar />
        </div>

        <div className="col-9">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Layout
