import { ScrollView, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ArrowLeftIcon, FilterIcon } from '../components/icons';
import { useNavigation } from '@react-navigation/native';
import { CircularImage } from '../components/Images';

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
		club: 'https://logodownload.org/wp-content/uploads/2019/04/alianza-lima-logo-escudo.png',
		team: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&w=1000&q=80',
		results: '3-6,6-3,6-2',
	},
};

const HISTORY = {
	COLUMNS: ['24%', '14%', '24%', '26%', '12%'],
	HEADER_TEXTS: ['Fecha  hs.', 'Club', 'Equipo', 'Resultados', 'Más'],
};

export default function HistoryProfileScreen() {
	return (
		<View style={{ flex: 1, backgroundColor: '#F9F9F9F0' }} className="px-3">
			<HeaderScreen />
			<View className="mt-2">
				<View className="bg-white flex-row justify-between items-center rounded-md">
					{HISTORY.HEADER_TEXTS.map((text, i) => {
						return (
							<Text
								className="font-semibold text-sm text-center py-5"
								key={i}
								style={{
									color: '#333333',
									width: HISTORY.COLUMNS[i],
									borderRightWidth: 1,
									borderColor:
										i < HISTORY.HEADER_TEXTS.length - 1
											? '#DDDDDD80'
											: 'transparent',
								}}
							>
								{text}
							</Text>
						);
					})}
				</View>
				<ScrollView
					className="mt-2 flex-col overflow-hidden"
					contentContainerStyle={{ borderRadius: 10, overflow: 'hidden' }}
				>
					{[MOCK_DATA.ROW_DATA, MOCK_DATA.ROW_DATA, MOCK_DATA.ROW_DATA].map(
						(data, i) => {
							return (
								<HistoryRowInfo
									key={i}
									info={data}
									bg={i % 2 == 0 ? '#F3F3F3' : 'white'}
								/>
							);
						},
					)}
				</ScrollView>
			</View>
		</View>
	);
}

const HistoryRowText = ({ width, color, text, styleClass }) => {
	return (
		<Text
			style={{
				width,
				color,
				verticalAlign: 'middle',
			}}
			className={`text-sm text-center overflow-hidden ${styleClass ?? ''}`}
		>
			{text}
		</Text>
	);
};

const HistoryRowInfo = ({ info, bg }) => {
	return (
		<View
			className="flex-row py-5"
			style={{
				backgroundColor: bg,
			}}
		>
			<HistoryRowText
				text={`${info.date}  ${info.time}`}
				width={HISTORY.COLUMNS[0]}
			/>
			<View
				className="items-center"
				style={{
					width: HISTORY.COLUMNS[1],
				}}
			>
				<CircularImage
					style={{
						width: 32,
					}}
					source={{
						uri: MOCK_DATA.ROW_DATA.club,
					}}
				/>
			</View>
			<View
				className="flex-row justify-center items-center"
				style={{
					gap: -14,
					width: HISTORY.COLUMNS[2],
				}}
			>
				{[1, 2, 3].map((_, i) => {
					return (
						<CircularImage
							key={i}
							withBorder
							style={{
								width: 33,
							}}
							source={{
								uri: MOCK_DATA.ROW_DATA.team,
							}}
						/>
					);
				})}
			</View>
			<HistoryRowText
				text={info.results}
				width={HISTORY.COLUMNS[3]}
				styleClass="font-semibold text-black"
			/>

			<View
				className="flex-row items-center overflow-hidden justify-center"
				style={{
					width: HISTORY.COLUMNS[HISTORY.COLUMNS.length - 1],
				}}
			>
				{[1, 2, 3].map((_, i) => {
					return (
						<View
							key={i}
							style={{ marginHorizontal: 1 }}
							className="rounded-full bg-black h-1 w-1 aspect-square"
						/>
					);
				})}
			</View>
		</View>
	);
};
