import createDataContext from './createDataContext';
import trackerApi from '../api/trackerApi';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return ({ email, password }) => {

    try {
      const response = await trackerApi.post('/signup', {email, password});
      console.log(response.data)
    } catch (err) {
      console.log(err.message)
    }

  };
};

const signIn = (dispatch) => {
  return ({ email, password }) => {
    // stuff
  };
};

const signOut = (dispatch) => {
  return ({ email, password }) => {
    // stuff
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signOut, signUp },
  { isSignedIn: false }
);
