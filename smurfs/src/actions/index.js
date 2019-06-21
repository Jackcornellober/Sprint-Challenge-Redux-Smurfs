import axios from 'axios';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA_START });
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => {
    dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
    console.log('ACTIONS DATA HERE',res.data)
  })
  .catch(err => {
    console.log(err.response);
    dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
  });
};

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF_START, payload: smurf });
  console.log('SMURF OBJECT HERE', smurf);
  axios.post('http://localhost:3333/smurfs', smurf)
  .then((res) => {
    dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
      })
      .catch(function (err) {
        console.log('ERROR MESSAGE HERE',err);
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.response });
      });
};

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
