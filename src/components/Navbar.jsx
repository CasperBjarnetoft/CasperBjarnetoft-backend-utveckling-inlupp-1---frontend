import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container ">
      <header className='fs-3 fw-bold'><Link to= "/" className='text-dark'>Errands</Link></header>
        <div className='d-flex align-items-center'>
            <button className='btn btn-dark me-3'><NavLink to="/adderrand" className="text-light" >Add Errand</NavLink></button>
        </div>
      </div>
  </nav>
  )
}

export default Navbar