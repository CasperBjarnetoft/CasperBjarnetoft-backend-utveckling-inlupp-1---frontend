import axios from "axios";
import actiontypes from "../Actiontypes";

export const getCase = (id) => {
  return async dispatch => {
    dispatch(loading(true))
    try {
      const res = await axios.get('https://localhost:7185/api/Cases/' + id)
      dispatch(setCase(res.data))
    }
    catch(err) {
      dispatch(caseFailure(err.message))
    }
  }
}

const loading = (payload) => {
  return {
    type: actiontypes().case.loading,
    payload
  }
}

const setCase = (Case) => {
  return {
    type: actiontypes().case.setCase,
    payload: Case
  }
}

const caseFailure = (payload) => {
  return {
    type: actiontypes().case.failure,
    payload
  }
}