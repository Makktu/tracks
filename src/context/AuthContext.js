import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signUp = (dispatch) => {
  return ({ email, password }) => {
    // make api request to sign up with email and password
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
