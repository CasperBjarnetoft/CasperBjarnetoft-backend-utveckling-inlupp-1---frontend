import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Errand from '../components/Errand'
import { getCases } from '../store/actions/casesAction'


const EventsView = () => {

  const dispatch = useDispatch()

  const { loading, error, data: cases } = useSelector(state => state.cases)

  useEffect(() => {
    dispatch(getCases())
  }, [dispatch])

  return (
    <div className='mt-3'>
      { loading && <p>Loading...</p>}
      { error && <p>{error}</p>}
      { cases.map(errand => <Errand key={errand.id} errand={errand}/>)}
    </div>
  )
}

export default EventsView