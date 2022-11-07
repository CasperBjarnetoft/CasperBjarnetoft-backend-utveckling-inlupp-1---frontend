import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import { getCases } from './store/actions/casesAction';
import Views from './views/Views';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCases())
  }, [dispatch])
  
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Views />
      </div>
    </div>
  );
}

export default App;
