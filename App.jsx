import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { AuthNavigator } from './stackNavigation/AuthNavigator';
import UserAppNavigator from './stackNavigation/userAppNavigator';
import { useContext } from 'react';

const Router = () => {
	const { isAuth } = useContext(AuthContext);
	return (
		<NavigationContainer>
			{isAuth ? <UserAppNavigator /> : <AuthNavigator />}
		</NavigationContainer>
	);
};

export default function App() {
	return (
		<Provider store={store}>
			<AuthProvider>
				<UserProvider>
					<Router />
				</UserProvider>
			</AuthProvider>
		</Provider>
	);
}
