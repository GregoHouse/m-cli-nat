import { ScrollView } from 'react-native';
import { MyActivityBox, PointsBox, PreferencesSection } from './sections';
import { ActivitySport } from './constants';

export default function SportProfile() {
	return (
		<ScrollView>
			<MyActivityBox records={ActivitySport} sports={SportList} />
			<PointsBox />
			<PreferencesSection />
		</ScrollView>
	);
}

const SportList = ['Padel', 'Tennis', 'Football', 'Squash'];
