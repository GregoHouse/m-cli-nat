import { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import MyProfile from './MyProfile';
import SportProfile from './SportProfile';

const tabs = ['Mi Perfil', 'Perfiles Deportivos'];

export default function UserProfile() {
	const [currentPage, setCurrentPage] = useState(tabs[0]);

	return (
		<ScrollView style={styles.container}>
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
			{currentPage === tabs[0] ? <MyProfile /> : <SportProfile />}
		</ScrollView>
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
