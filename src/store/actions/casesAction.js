import axios from 'axios'
import actiontypes from '../Actiontypes'

export const getCases = () => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.get('https://localhost:7185/api/Cases')
      console.log(res.data)
      dispatch(setCases(res.data))
    }
    catch(err) {
      dispatch(casesFailure(err.message))
    }
  }
}

export const AddCase = (Case) => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.post('https://localhost:7185/api/Cases', Case)
      dispatch(addToList(res.data))
    }
    catch(err) {
      dispatch(casesFailure(err.message))
    }
  }
}


const addToList = (Case) => {
  return {
    type: actiontypes().cases.AddNewCase,
    payload: Case
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().cases.loading,
    payload
  }
}

const setCases = (cases) => {
  return {
    type: actiontypes().cases.setCases,
    payload: cases
  }
}

const casesFailure = (payload) => {
  return {
    type: actiontypes().cases.failure,
    payload
  }
}