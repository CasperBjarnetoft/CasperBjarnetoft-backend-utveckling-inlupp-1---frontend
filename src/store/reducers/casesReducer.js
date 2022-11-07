import actiontypes from "../Actiontypes";

const initState = {
  data: [],
  loading: false,
  error: null
}

const casesReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().cases.loading:
      return {
        ...state,
        loading: action.payload
      }
    
    case actiontypes().cases.setCases:
      return {
        data: action.payload,
        loading: false,
        error: null
      }
    
    case actiontypes().cases.failure:
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

export default casesReducer;