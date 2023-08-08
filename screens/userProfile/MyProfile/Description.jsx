import { View, Image, Text, StyleSheet } from 'react-native';

export default function ProfileDescription({
	userAvatar,
	userName,
	userAbout,
}) {
	return (
		<View style={{ marginTop: 100 }}>
			<View style={descStyle.wrapper}>
				<Image
					style={descStyle.imageProfile}
					source={{
						uri: userAvatar,
					}}
				/>
				<View style={{ marginTop: 60, alignItems: 'center' }}>
					<Text
						style={{
							fontWeight: 'bold',
							fontSize: 18,
							color: '#203144',
						}}>
						{userName}
					</Text>
					<Text style={descStyle.bio}>{userAbout}</Text>
				</View>
			</View>
		</View>
	);
}

const descStyle = StyleSheet.create({
	wrapper: {
		backgroundColor: 'white',
		alignItems: 'center',
		paddingHorizontal: 8,
		paddingVertical: 20,
		borderRadius: 20,
		position: 'relative',
	},
	imageProfile: {
		width: 150,
		height: 150,
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#203144',
		position: 'absolute',
		top: '-50%',
	},
	bio: {
		marginTop: 16,
		maxWidth: '80%',
		lineHeight: 22,
		color: 'black',
		fontSize: 14,
	},
});
