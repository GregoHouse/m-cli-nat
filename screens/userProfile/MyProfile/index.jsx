import { StyleSheet, Text, View } from 'react-native';
import ProfileDescription from './Description.jsx';
import FriendsList from './Friends';

const InfoItem = ({ keyValue, value, style }) => {
	return (
		<View style={[InfoStyle.style, style]}>
			<Text style={{ color: '#203144', fontSize: 16 }}>{keyValue}</Text>
			<Text style={{ color: '#cbcdd1', fontSize: 14 }}>{value}</Text>
		</View>
	);
};

const InfoStyle = StyleSheet.create({
	style: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 10,
		paddingVertical: 14,
		borderBottomWidth: 1,
	},
});

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

export default function MyProfile() {
	return (
		<View>
			<ProfileDescription
				userAbout={MOCK.PROFILE.about}
				userAvatar={MOCK.PROFILE.avatar}
				userName={MOCK.PROFILE.name}
			/>
			<FriendsList friends={[]} />
			<View
				style={{
					marginVertical: 10,
					overflow: 'hidden',
					backgroundColor: 'white',
					borderRadius: 10,
				}}>
				{MOCK.USER_INFO.map(({ keyValue, value }, i) => {
					return (
						<InfoItem
							keyValue={keyValue}
							value={value}
							key={i}
							style={{
								borderColor:
									i !== MOCK.USER_INFO.length - 1 ? '#DDDDDD' : 'transparent',
							}}
						/>
					);
				})}
			</View>
		</View>
	);
}
