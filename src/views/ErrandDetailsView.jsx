import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getCase } from "../store/actions/caseAction"

const EventdetailsView = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  const { loading, error, data: Case} = useSelector(state => state.case)

  useEffect(() => {
    dispatch(getCase(id))
  }, [dispatch, id])

  return (
    <div>
      { loading && <p>Loading...</p>}
      { error && <p>{error}</p>}
      <div className="mt-4 card p-3">
          <div className='d-flex flex-row align-items-center justify-content-between text-dark'>
            <h4>{Case.subject}</h4>
            <div className="d-flex flex-row align-items-center">
              <h6 className='me-5'>STATUS: { Case.status}</h6>
              <button type="button" className="btn btn-dark ms-3">Start Errand</button>
            </div>
          </div>
          <div className="mt-3 mb-3" >
            <p>{Case.message}</p>
          </div>
          <div>
            
          </div>
          <div className="form mb-4 mt-3">
          <label className="form-label">Comment</label>
          <input type="text" name="title" className="form-control" />
          <button type="button" className="btn btn-dark mt-3">Add Comment</button>
          </div>
      </div>

      <div className="mt-4">
          <h4>Comments</h4>
        <div className=''>      
            <div className="card p-3">
              <h5>Good</h5>
              <p>This is a good Errand</p>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default EventdetailsView