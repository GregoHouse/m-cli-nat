import { View, Text, TouchableOpacity, Image } from 'react-native';

import QrImage from '../../../assets/icons/qr-code.png';

export const MyActivityBox = ({ records }) => {
	return (
		<View className="mt-8">
			<Text className="mb-2 font-semibold">Mi Actividad</Text>
			<BoxStyled className="border-linear_gradient1 border-4 relative p-4 py-2">
				<View className="absolute top-[-20%] left-[40%] z-10 p-4 bg-background_login rounded-2xl flex-col items-center justify-center">
					<Text className="rounded-md text-white">JUEGOS</Text>
				</View>
				<View className="flex-row flex-wrap gap-2 mt-5">
					{records.map(({ n, text }, i) => {
						return (
							<View
								className="overflow-hidden rounded-md justify-center items-center px-2 py-4"
								key={i}
								style={{
									maxWidth: '31%',
									minWidth: '20%',
									width: '30%',
									overflow: 'hidden',
								}}>
								<View className="flex-row" onMouse>
									<Text className="">{n}</Text>
									<Text className="">{text}</Text>
								</View>
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
				<Text className="text-background_login font-semibold text-sm">
					Puntos acumulados
				</Text>
				<TouchableOpacity className="flex-row items-center justify-center bg-button_sesion_color rounded-xl py-3 px-8">
					<View className="flex-row gap-4">
						<Image source={QrImage} className="bg-red w-5 h-5" />
						<Text className="text-white font-semibold">Canjear</Text>
					</View>
				</TouchableOpacity>
			</BoxStyled>
		</View>
	);
};

export const PreferencesSection = ({ preferences }) => {
	return (
		<View className="mt-8">
			<View className="flex flex-row justify-between mb-2">
				<Text className="font-semibold">Mis Preferencias</Text>
				<Text className="text-background_login font-semibold">Editar</Text>
			</View>
			<View className="flex flex-col gap-2">
				{preferences.map(({ keyValue, value }, i) => {
					return (
						<BoxStyled className="flex flex-row justify-between p-4" key={i}>
							<View className="flex flex-row gap-4">
								{/* LOGO */}
								<Text className="text-background_login">{keyValue}</Text>
							</View>
							<Text>{value}</Text>
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
