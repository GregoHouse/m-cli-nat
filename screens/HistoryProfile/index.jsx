import { useEffect, useState } from 'react';
import {
	Text,
	TouchableWithoutFeedback,
	View,
	TouchableHighlight,
} from 'react-native';
import { ArrowLeftIcon, ChevronIcon, FilterIcon } from '../../components/icons';
import { useNavigation } from '@react-navigation/native';
import HistoryTable from './Table';
import { PaginationList } from '../../utils/lists/';

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

const MAX_ROWS = 7;

const historyProfileService = async () => {
	return new Array(30).fill(null).map(() => {
		return { ...MOCK_DATA.ROW_DATA };
	});
};

const partitionArray = (array, size) => {
	const result = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	return result;
};

export default function HistoryProfileScreen() {
	const [paginationList, setPaginationList] = useState(null);
	const [currentRows, setCurrentRows] = useState([]);

	useEffect(() => {
		historyProfileService()
			.then(data => {
				const pagination = new PaginationList(partitionArray(data, MAX_ROWS));
				setPaginationList(pagination);
				setCurrentRows(pagination.getNode()?.content ?? []);
			})
			.catch(e => {
				console.error(e);
			});
	}, []);

	const handlePagination = type => {
		if (!paginationList) return;
		if (type === 'next') {
			setCurrentRows(paginationList.next()?.content ?? []);
		} else {
			setCurrentRows(paginationList.back()?.content ?? []);
		}
	};

	return (
		<View style={{ flex: 1, backgroundColor: '#F9F9F9F0' }} className="px-3">
			<HeaderScreen />
			<HistoryTable rowColumns={currentRows} />
			{paginationList && (
				<View
					className="flex-row justify-end p-3 pr-6 mt-2"
					style={{ columnGap: 10 }}
				>
					<TouchableHighlight
						onPress={() => handlePagination('back')}
						className="justify-center items-center"
						style={{
							width: 20,
							height: 20,
						}}
					>
						<ChevronIcon direction="left" style={{ width: 9, height: 15 }} />
					</TouchableHighlight>
					{new Array(paginationList.size).fill(null).map((_, i) => {
						return (
							<TouchableHighlight
								onPress={() => {
									try {
										setCurrentRows(paginationList.setIndex(i)?.content ?? []);
									} catch (e) {
										console.log(e);
									}
								}}
								key={i}
								className="justify-center items-center"
								style={{
									width: 20,
									height: 20,
								}}
							>
								<Text>{i + 1}</Text>
							</TouchableHighlight>
						);
					})}
					<TouchableHighlight
						onPress={() => handlePagination('next')}
						className="justify-center items-center"
						style={{
							width: 20,
							height: 20,
						}}
					>
						<ChevronIcon direction="right" style={{ width: 9, height: 15 }} />
					</TouchableHighlight>
				</View>
			)}
		</View>
	);
}
