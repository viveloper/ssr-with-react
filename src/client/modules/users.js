import axios from 'axios';

export const FETCH_USERS = 'users/FETCH_USERS';

export const fetchUsers = () => async (dispatch) => {
  const res = await axios.get('https://react-ssr-api.herokuapp.com/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
}
