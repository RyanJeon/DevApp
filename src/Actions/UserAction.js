import {auth} from '../Firebase';
export const GET_USER = 'get_user';

export function getUser(){
  return dispatch => {
    auth.onAuthStateChange(user => {
      dispatch({
        type: 'get_user',
        payload: user
      })
    })
  }
}
