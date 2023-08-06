import { StyleSheet, Text, View } from 'react-native';
import ProfileDescription from './Description.jsx';
import FriendsOfMyFriend from './FriendsOfMyFriend.jsx';

const MOCK = {
	PROFILE: {
		avatar:
			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80',
		name: 'JOSE S',
		about:
			'Apasionado del paddle, jugador de nivel intermedio en busca de desafíos y mejora constante. ¡Listo para competir!',
	},
	USER_INFO: [],
};

export default function MyProfile({ authState }) {
	const { profileFriendSelected: { avatar, name, lastname } } = authState;

	return (
		<View>
			<ProfileDescription
				userAbout={MOCK.PROFILE.about} // desestructurar el objeto con todos los datos que vengan de friend
				userAvatar={avatar} // desestructurar el objeto con todos los datos que vengan de friend
				userName={`${name} ${lastname}`} // desestructurar el objeto con todos los datos que vengan de friend
			/>
			<View
				style={{
					flexDirection: 'column',
					alignItems: 'flex-end',
					gap: 5,
				}}>
				  <FriendsOfMyFriend />
					<Text>hola</Text>
			</View>
		</View>
	);
}
