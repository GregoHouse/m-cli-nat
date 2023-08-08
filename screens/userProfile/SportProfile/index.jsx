import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ActivitySport } from './constants';
import { MyActivityBox, PointsBox, PreferencesSection } from './sections';

export default function SportProfile() {
	const navigation = useNavigation();
	return (
		<View style={{ marginBottom: 10 }}>
			<MyActivityBox records={ActivitySport} sports={SportList} />
			<PointsBox />
			<PreferencesSection navigator={navigation.navigate} />
		</View>
	);
}

const SportList = ['Padel', 'Tennis', 'Football', 'Squash'];
