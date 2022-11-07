import React from 'react'
import { Link } from 'react-router-dom'

const event = ({ errand }) => {
  return (
    <Link to={`/errand/${errand.id}`}>
      <div className="mt-4 card p-3 d-flex flex-row align-items-center justify-content-between text-dark">
        <h4>{ errand.subject}</h4>         
        <div className='d-flex flex-row '>
          <h6>STATUS: </h6>
          <h6 className='ms-4'>{ errand.status}</h6>
        </div>
      </div>
    </Link>
  )
}

export default event