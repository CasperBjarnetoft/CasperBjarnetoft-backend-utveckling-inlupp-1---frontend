import React from 'react'
import { Link } from 'react-router-dom'

const event = ({ errand }) => {
  return (
    <Link to="/ErrandDetails">
      <div className="mt-4 card p-3 d-flex flex-row align-items-center justify-content-between text-dark">
        <h4>{ errand.message}</h4>         
        <div className='d-flex d-flex align-items-center'>
          <h6 className='me-5 text-danger'>STATUS: { errand.status}</h6>
        </div>
      </div>
    </Link>
  )
}

export default event