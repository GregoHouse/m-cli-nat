import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import QrImage from '../../../assets/icons/qr-code.png';
import { SPORT_ICONS } from '../../../constants/images/sports';
import { Records, preferences } from './constants';

export const MyActivityBox = ({ records, sports }) => {
	const [currentSport, setCurrentSport] = useState(sports[0]);

	return (
		<View className="mt-8">
			<Text className="mb-2 font-semibold">Mi Actividad</Text>
			<BoxStyled className="relative px-1 py-4 flex-col items-center">
				<View className="absolute top-[-30%] left-[38%] z-10 rounded-2xl">
					<ScrollView
						horizontal
						className=" flex"
						style={{
							flex: 1,
						}}
						contentContainerStyle={{
							gap: 10,
							paddingBottom: 6,
						}}>
						{sports.map((text, i) => {
							const icon = SPORT_ICONS[text];
							return (
								<TouchableOpacity
									onPress={() => setCurrentSport(text)}
									key={i}
									style={{
										backgroundColor:
											currentSport === text ? '#203144' : '#f4f5f6',
									}}
									className="py-2 px-10 rounded-2xl justify-center items-center">
									{icon && (
										<Image
											source={icon.active}
											style={{
												width: 30,
												height: 30,
											}}
										/>
									)}

									<Text
										className="rounded-md text-base"
										style={{
											color: currentSport === text ? 'white' : '#676666',
											fontWeight: currentSport === text ? 'bold' : 'normal',
										}}>
										{text}
									</Text>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
				</View>
				<View className="flex-row flex-wrap justify-between gap-2 mt-2 w-full">
					{records.map(({ n, text }, i) => {
						const icon = Records[text] ?? '🚫';
						return (
							<View
								className="flex-row overflow-hidden rounded-md justify-center items-center gap-1 py-2 px-1"
								key={i}
								style={{
									width: '30%',
									overflow: 'hidden',
								}}>
								<Text className="font-bold text-sm">{n}</Text>
								<Text className="text-xs font-bold">{icon}</Text>
								<Text className="text-xs font-bold">{text}</Text>
							</View>
						);
					})}
				</View>
				<Text className="text-grey5_6 font-semibold text-sm text-center mt-4">
					Clubes asociados
				</Text>
			</BoxStyled>
		</View>
	);
};

export const PointsBox = () => {
	return (
		<View className="mt-4">
			<Text className="mb-2 font-semibold">Mis Puntos</Text>
			<BoxStyled className="flex-row justify-between items-center p-3">
				<View className="aspect-square justify-center items-center rounded-full p-3 bg-linear_gradient1">
					<Text className="text-white font-bold">234</Text>
				</View>
				<Text className="text-background_login font-bold text-sm">
					Puntos acumulados
				</Text>
				<TouchableOpacity className="flex-row items-center justify-center bg-button_sesion_color rounded-xl py-3 px-8">
					<View className="flex-row gap-4">
						<Image source={QrImage} className="bg-red w-5 h-5" />
						<Text className="text-white text-base">Canjear</Text>
					</View>
				</TouchableOpacity>
			</BoxStyled>
		</View>
	);
};

export const PreferencesSection = () => {
	return (
		<View className="mt-8">
			<View className="flex flex-row justify-between mb-2">
				<Text className="font-semibold">Mis Preferencias</Text>
				<Text className="text-background_login font-semibold">Editar</Text>
			</View>
			<View className="flex flex-col gap-2">
				{preferences.map(({ keyValue, value, icon }, i) => {
					return (
						<BoxStyled className="flex flex-row justify-between p-4" key={i}>
							<View className="flex flex-row gap-4">
								<Image source={icon} style={{ width: 18, height: 18 }} />
								<Text
									className="text-background_login font-semibold"
									style={{ fontSize: 15 }}>
									{keyValue}
								</Text>
							</View>
							<Text className="font-semibold">{value}</Text>
						</BoxStyled>
					);
				})}
			</View>
		</View>
	);
};

export const BoxStyled = ({ children, style, className }) => {
	return (
		<View style={style} className={`bg-white rounded-lg ${className}`}>
			{children}
		</View>
	);
};
