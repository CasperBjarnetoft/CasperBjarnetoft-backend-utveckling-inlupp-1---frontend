const actiontypes = () => {
  return {
    cases: {
      setCases: 'SET_CASES',
      loading: 'LOADING',
      failure: 'CASE_FAILURE'
    },
    case: {
      setCase: 'SET_CASE',
      loading: 'LOADING',
      failure: 'CASE_FAILURE'
    }
  }
}

export default actiontypes;