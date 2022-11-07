import actiontypes from "../Actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const caseReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().case.loading:
      return {
        ...state,
        loading: action.payload
      }
    
    case actiontypes().case.setCase:
      return {
        data: action.payload,
        loading: false,
        error: null
      }
    
    case actiontypes().case.failure:
      return {
        data: [],
        loading: false,
        error: action.payload
      }
    
    default: {
      return state
    }
  }
}

export default caseReducer;