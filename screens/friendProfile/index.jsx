import { useContext, useState } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import FriendSportProfile from './SportProfile';
import { AuthContextWithReducer } from '../../context/AuthContextWithReducer';
import FriendProfile from './MyProfile/FriendsOfMyFriend';

const tabs = ['Perfil', 'Perfiles Deportivos'];

export default function UserProfile() {
	const [currentPage, setCurrentPage] = useState(tabs[0]);
	const { authState } = useContext(AuthContextWithReducer);

	return (
		<View style={styles.container}>
			<View style={styles.tabs}>
				{tabs.map((t, i) => {
					return (
						<TouchableOpacity
							onPress={() => {
								setCurrentPage(t);
							}}
							key={i}
							style={[
								styles.singleTab,
								t === currentPage && {
									borderBottomColor: '#E7B04B',
									borderBottomWidth: 6,
								},
							]}>
							<Text
								style={[
									styles.tabText,
									t === currentPage && {
										color: '#203144',
									},
								]}>
								{t}
							</Text>
						</TouchableOpacity>
					);
				})}
			</View>
			{currentPage === tabs[0] ? <FriendProfile authState={authState} /> : <FriendSportProfile authState={authState} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		paddingHorizontal: 20,
	},
	tabs: {
		width: '100%',
		flexDirection: 'row',
	},
	singleTab: {
		width: '50%',
		borderBottomWidth: 1,
		borderBottomColor: '#cbcdd1',
		alignItems: 'center',
		paddingVertical: 10,
	},
	tabText: {
		fontWeight: 'bold',
		fontSize: 18,
		color: '#C9C8C8',
	},
});
