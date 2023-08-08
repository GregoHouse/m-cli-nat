import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../../screens/userProfile';
import SportEditScreen from '../../screens/sportEditPreferences';

const UserStackNavigator = createStackNavigator();

export default function UserNavigator() {
	return (
		<UserStackNavigator.Navigator
			screenOptions={{
				headerTitleStyle: {
					color: '#203144',
				},
				headerTintColor: '#203144',
				headerStyle: {
					backgroundColor: '#F9F9F9F0',
				},
				headerTitleAlign: 'center',
				cardStyle: {
					backgroundColor: '#F9F9F9F0',
				},
			}}
		>
			<UserStackNavigator.Screen
				name="userProfile"
				component={UserProfile}
				options={{
					headerShown: false,
				}}
			/>
			<UserStackNavigator.Screen
				name="sportEditPreferences"
				component={SportEditScreen}
				options={{
					title: 'Editar mis preferncias',
				}}
			/>
		</UserStackNavigator.Navigator>
	);
}
