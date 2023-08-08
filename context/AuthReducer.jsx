
export const authReducer = (
  state,
  action,
) => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        profileFriendSelected: undefined,
      };
    case 'showFriendProfile':
      return {
        ...state,
        profileFriendSelected: action.payload,
      };
    default:
      return state;
  }
};
