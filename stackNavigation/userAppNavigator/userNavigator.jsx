import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../../screens/userProfile';
import SportEditScreen from '../../screens/SportEditScreen';

const UserStackNavigator = createStackNavigator();

export default function UserNavigator() {
	return (
		<UserStackNavigator.Navigator>
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
				options={{}}
			/>
		</UserStackNavigator.Navigator>
	);
}
