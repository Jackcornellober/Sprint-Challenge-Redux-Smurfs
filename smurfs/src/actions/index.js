// Let's build some action creators 😃
import axios from 'axios';
export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

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

export const addSmurf = (smurf) => dispatch => {
  dispatch({ type: ADD_SMURF, payload: smurf });
  console.log('SMURF OBJECT HERE', smurf);
  axios.post('http://localhost:3333/smurfs', smurf)
  .then((res) => {
    ///???ADD_SMURF_SUCCESS???///
      })
      .catch(function (err) {
        console.log('ERROR MESSAGE HERE',err);
    ///???ADD_SMURF_FAILURE???///
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
