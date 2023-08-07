import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DropDownPicker } from '../components/dropdown/';
import { useNavigation } from '@react-navigation/native';

const MOCK_DATA = [
	{
		text: 'Mano preferida',
		options: [
			{ label: 'Ambas', selected: false, value: 'Ambas' },
			{ label: 'Derecha', selected: false, value: 'Derecha' },
			{ label: 'Revés', selected: true, value: 'Revés' },
		],
	},
	{
		text: 'Posicion de la pista',
		options: [
			{ label: 'Ambas', selected: false, value: 'Ambas' },
			{ label: 'Derecha', selected: false, value: 'Derecha' },
			{ label: 'Revés', selected: true, value: 'Revés' },
		],
	},
	{
		text: 'Tipo de Partido',
		options: [
			{ label: 'Competitivo', selected: true, value: 'Competitivo' },
			{ label: 'Amistoso', selected: false, value: 'Amistoso' },
			{ label: 'Ambas', selected: false, value: 'Ambas' },
		],
	},
	{
		text: 'Días de juego',
		options: [
			{ label: 'Lunes a Viernes', selected: true, value: 'Lunes a Viernes' },
			{ label: 'Sabado y Domingo', selected: false, value: 'Sabado y Domingo' },
		],
	},
	{
		text: 'Horario de juego',
		options: [
			{ label: 'Por la tarde', selected: true, value: 'Por la tarde' },
			{ label: 'Por la noche', selected: false, value: 'Por la noche' },
		],
	},
	{
		text: 'Categoría',
		options: [
			{ label: '1er', selected: true, value: '1er' },
			{ label: '2da', selected: false, value: '2da' },
			{ label: '3ra', selected: false, value: '3ra' },
			{ label: '4ta', selected: false, value: '4ta' },
			{ label: '5ta', selected: false, value: '5ta' },
			{ label: '6ta', selected: false, value: '6ta' },
			{ label: '7ma', selected: false, value: '7ma' },
		],
	},
];

const preferencesService = {
	async get() {
		return MOCK_DATA;
	},
};

export default function SportEditScreen() {
	const [preferences, setPreferences] = useState([]);
	const navigation = useNavigation();
	const onSave = () => {
		console.log('SAVEEE');
	};
	useEffect(() => {
		preferencesService
			.get()
			.then(data => {
				setPreferences(data);
			})
			.catch(() => {
				console.log('ERROR');
			});
	}, []);

	const onSelectOpt = (prefText, opt) => {
		setPreferences(
			preferences.map(pref => {
				if (pref.text === prefText) {
					pref.options = pref.options.map(prefOpt => {
						if (prefOpt.value === opt.value) prefOpt.selected = true;
						else prefOpt.selected = false;
						return prefOpt;
					});
				}
				pref.show = false;
				return pref;
			}),
		);
	};
	const onSetShow = (prefText, isShow) => {
		setPreferences(
			preferences.map(pref => {
				return pref.text === prefText
					? { ...pref, show: isShow }
					: { ...pref, show: false };
			}),
		);
	};

	return (
		<View className="px-4">
			<View
				className="flex-col"
				style={{ rowGap: 12, zIndex: 10, marginTop: 10 }}
			>
				{preferences.map(({ text, options, show }, i) => {
					return (
						<View
							className="rounded-lg flex-row bg-white p-4 justify-between"
							style={{ zIndex: MOCK_DATA.length - i }}
							key={i}
						>
							<Text className="text-base font-semibold flex-1">{text}</Text>
							<DropDownPicker
								activeOpacity={{ selected: 0.8, option: 0.4 }}
								textSelectedStyle={{ color: '#959595', fontWeight: 400 }}
								optionTextStyle={{ color: '#333333', fontWeight: 600 }}
								optionStyle={{ paddingVertical: 8 }}
								scrollStyle={{
									width: 220,
									maxHeight: 150,
								}}
								options={options}
								show={show}
								onSelect={opt => onSelectOpt(text, opt)}
								onSetShow={isShow => onSetShow(text, isShow)}
							/>
						</View>
					);
				})}
			</View>
			<TouchableOpacity
				onPress={onSave}
				activeOpacity={0.5}
				className="mt-5 bg-button_sesion_color rounded-lg justify-center items-center py-3"
			>
				<Text className="text-white text-lg font-semibold">Guardar</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={navigation.goBack}
				activeOpacity={0.5}
				className="mt-5 bg-white rounded-lg justify-center items-center py-3 border-button_sesion_color"
				style={{ borderWidth: 2 }}
			>
				<Text className="text-button_sesion_color text-lg font-semibold">
					Cancelar
				</Text>
			</TouchableOpacity>
		</View>
	);
}
