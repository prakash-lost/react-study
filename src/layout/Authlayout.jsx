import React from 'react'
import { Outlet } from 'react-router'

const Authlayout = () => {
  return (
    <div>
<h1>this is auth heading</h1>
    <div><Outlet/></div>
    <p>this is Authpage</p>
    </div>
  )
}

export default Authlayout