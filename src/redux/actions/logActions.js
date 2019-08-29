import { GET_LOGS, SET_LOADING, LOGS_ERRORS } from './types';

// export const getLogs = () => {
//   return async dispatch => {
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   };
// };

export const getLogs = () => async dispatch => {
  try {
    setLoading();

    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERRORS,
      payload: err.response.data
    });
  }
};

// Set loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
