import { View } from 'react-native';
import { ActivitySport } from './constants';
import { MyActivityBox, PreferencesSection } from './sections';

export default function SportProfile() {
	return (
		<View style={{ marginBottom: 10 }}>
			<MyActivityBox records={ActivitySport} sports={SportList} />
			<PreferencesSection />
		</View>
	);
}

const SportList = ['Padel', 'Tennis', 'Football', 'Squash'];
