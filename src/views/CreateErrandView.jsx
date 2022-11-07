import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AddCase } from '../store/actions/casesAction'

const CreateErrandView = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loading = useSelector(state => state.cases.loading)

  const [addedCase, setAddedCase] = useState(false)

  const [formData, setFormData] = useState({
    subject: '',
    message: ''
  })

  const onChange = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const HandleSubmit = e => {
    e.preventDefault()
    dispatch(AddCase(formData))
    setAddedCase(true)
  }

  useEffect(() => {
    if(!loading && addedCase) {
      navigate('/')
    }
  }, [loading, addedCase, navigate])

  return (
    <div className='container mt-5 bg-light rounded'>
      <form  onSubmit={HandleSubmit} className='p-4'>
        <div className="form mb-4">
          <label className="form-label">Subject</label>
          <input type="text" name="subject" onChange={onChange} value={formData.subject} className="form-control" />
        </div>

        <div className="form mb-4">
          <label className="form-label">Description</label>
          <textarea name="message" onChange={onChange} value={formData.message} className="form-control"   rows="4"></textarea>
        </div>

        <button type="submit" className="btn btn-dark btn-block mb-4">Add Errand</button>
      </form>
    </div>
  )
}

export default CreateErrandView