import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';
import { AuthNavigator } from './stackNavigation/AuthNavigator';
import { AuthContextWithReducer, AuthProviderWithReducer } from './context/AuthContextWithReducer';
import UserAppNavigator from './stackNavigation/UserAppNavigator';
import { useContext } from 'react';

const Router = () => {
	const { authState } = useContext(AuthContextWithReducer);
	return (
		<NavigationContainer>
			{authState.isLoggedIn ? <UserAppNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default function App() {

  return (
    <Provider store={store}>
      <AuthProviderWithReducer>
          <UserProvider>
            <Router />
          </UserProvider>
      </AuthProviderWithReducer>
    </Provider>
  );
}
