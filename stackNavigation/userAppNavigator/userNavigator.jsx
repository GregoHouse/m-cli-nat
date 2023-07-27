import { createStackNavigator } from '@react-navigation/stack';
import UserProfile from '../../screens/userProfile';

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
		</UserStackNavigator.Navigator>
	);
}
