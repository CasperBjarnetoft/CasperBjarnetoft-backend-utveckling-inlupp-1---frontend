const EventdetailsView = () => {

  return (
    <div>
      <div className="mt-4 card p-3">
          <div className='d-flex flex-row align-items-center justify-content-between text-dark'>
            <h4>Leverans</h4>
            <h6 className='me-5 text-danger'>STATUS: Not Started</h6>
            <h6 className='me-3'>2020-10-12</h6>
          </div>
          <div className="mt-3 mb-3" >
            <p>Dax att laga mat</p>
          </div>
          <div>
            <button type="button" className="btn btn-success me-3">Start Errand</button>
          </div>
          <div className="form mb-4 mt-3">
          <label className="form-label">Comment</label>
          <input type="text" name="title" className="form-control" />
          <button type="button" className="btn btn-dark mt-3">Add Comment</button>
          </div>
      </div>

      <div className="mt-4 card p-3">
        <div className=''>
              <h4>Comments</h4>
            <div className="card">
              <h5>Good</h5>
              <p>This is a good Errand</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default EventdetailsView