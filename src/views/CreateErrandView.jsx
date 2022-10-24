import React from 'react'

const CreateErrandView = () => {
  return (
    <div className='container mt-5 bg-light rounded'>
      <form className='p-4'>
        <div className="form mb-4">
          <label className="form-label">E-post</label>
          <input type="text" name="title" className="form-control" />
        </div>

        <div className="form mb-4">
          <label className="form-label">title</label>
          <input type="text" name="title" className="form-control" />
        </div>

        <div className="form mb-4">
          <label className="form-label">More information</label>
          <textarea className="form-control" name="description" rows="4"></textarea>
        </div>

        <button type="submit" className="btn btn-dark btn-block mb-4">Add Errand</button>
      </form>
    </div>
  )
}

export default CreateErrandView