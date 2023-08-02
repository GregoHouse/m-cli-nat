import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { ArrowLeftIcon, FilterIcon } from '../../components/icons';
import { useNavigation } from '@react-navigation/native';
import HistoryTable from './Table';

const HeaderScreen = () => {
	const navigation = useNavigation();

	return (
		<View className="flex-row justify-between items-center w-full h-16">
			<TouchableWithoutFeedback onPress={navigation.goBack}>
				<ArrowLeftIcon
					style={{
						width: 18,
						height: 18,
					}}
				/>
			</TouchableWithoutFeedback>
			<Text className="font-bold text-lg text-background_login">Historial</Text>
			<FilterIcon
				style={{
					width: 24,
					height: 15,
				}}
			/>
		</View>
	);
};

const MOCK_DATA = {
	ROW_DATA: {
		date: '12/12',
		time: '15:00',
		clubImage:
			'https://logodownload.org/wp-content/uploads/2019/04/alianza-lima-logo-escudo.png',
		teamImgs: [
			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80',
			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80',
			'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80',
		],
		results: '3-6,6-3,6-2',
	},
};

export default function HistoryProfileScreen() {
	return (
		<View
			style={{ flex: 1, backgroundColor: '#F9F9F9F0' }}
			className="px-3 pb-2"
		>
			<HeaderScreen />
			<HistoryTable rowColumns={new Array(20).fill(MOCK_DATA.ROW_DATA)} />
		</View>
	);
}
