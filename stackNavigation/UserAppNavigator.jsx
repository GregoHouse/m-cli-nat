import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAw5Icons from 'react-native-vector-icons/FontAwesome5';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FeatherIcons from 'react-native-vector-icons/Feather';
import UserProfile from '../screens/userProfile';

const UserAppTab = createBottomTabNavigator();

const SCREEN_NAMES = {
	USER_PROFILE: 'USER_PROFILE',
	USER_HOME: 'USER_HOME',
	USER_FAQS: 'USER_FAQS',
};

const HomeScreen = () => {
	return <Text>HOME</Text>;
};

const FaqsScreen = () => {
	return <Text>FAQS</Text>;
};

export default function UserAppNavigator() {
	return (
		<UserAppTab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					backgroundColor: '#FAF9F9',
				},
				tabBarIcon: ({ focused, size }) => {
					let colorIcon = focused ? '#36424F' : '#DDDDDDF0';
					switch (route.name) {
						case SCREEN_NAMES.USER_HOME:
							return <EntypoIcons name="home" size={size} color={colorIcon} />;
						case SCREEN_NAMES.USER_FAQS:
							return (
								<FontAw5Icons name="question" size={size} color={colorIcon} />
							);
						case SCREEN_NAMES.USER_PROFILE:
							return <FeatherIcons name="user" size={size} color={colorIcon} />;
					}
				},
			})}>
			<UserAppTab.Screen component={HomeScreen} name={SCREEN_NAMES.USER_HOME} />
			<UserAppTab.Screen component={FaqsScreen} name={SCREEN_NAMES.USER_FAQS} />
			<UserAppTab.Screen
				component={UserProfile}
				name={SCREEN_NAMES.USER_PROFILE}
			/>
		</UserAppTab.Navigator>
	);
}
