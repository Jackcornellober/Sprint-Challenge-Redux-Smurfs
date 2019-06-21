import {
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE
} from '../actions';

/*
  Be sure to import in all of the action types from `../actions`
*/

const initialState =  {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: null,
  // updatingSmurf: false,
  // deletingSmurf: false,
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state,
        error: '',
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        smurfs: action.payload
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        fetchingData: false,
        error: action.payload
      };
  ///if ADD_SMURF comes through, we push the payload to our state's items array///
      case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
      };
      case ADD_SMURF_SUCCESS:
        return {
          ...state,
          addingSmurf: false,
          smurfs: [...state.smurfs, action.payload]
        };
      case ADD_SMURF_FAILURE:
        return {
          ...state,
          addingSmurf: false,
          error: action.payload
        }
    default:
      return state;
  }
}

export default reducer;
