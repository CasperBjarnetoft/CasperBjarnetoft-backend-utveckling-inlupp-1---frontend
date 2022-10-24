import React from 'react'
import { Link } from 'react-router-dom'

const event = () => {
  return (
    <Link to="/ErrandDetails">
      <div className="mt-4 card p-3 d-flex flex-row align-items-center justify-content-between text-dark">
        <h4>Leverans</h4>         
        <h6 className='me-5 text-danger'>STATUS: Not Started</h6>
        <div className='d-flex d-flex align-items-center'>
          <h6 className='me-3'>2020-10-22</h6>
        </div>
      </div>
    </Link>
  )
}

export default event