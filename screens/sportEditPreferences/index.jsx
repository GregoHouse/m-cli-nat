import { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DropDownPicker } from '../../components/dropdown';
import DATA from './data';

const preferencesService = {
	async get() {
		return DATA;
	},
	async post(preferences) {
		return preferences;
	},
};

export default function SportEditScreen() {
	const [preferences, setPreferences] = useState([]);
	const navigation = useNavigation();

	useEffect(() => {
		preferencesService
			.get()
			.then(data => {
				setPreferences(data);
			})
			.catch(e => {
				console.log('ERROR: ', e);
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

	const onSave = () => {
		preferencesService
			.post(preferences)
			.then(() => {
				console.log('SAVED!');
			})
			.catch(e => {
				console.log('SAVE PREFERENCES - ERROR: ', e);
			});
	};

	return (
		<View className="px-4">
			<View
				className="flex-col"
				style={{ rowGap: 12, zIndex: 10, marginTop: 10 }}
			>
				{preferences.map(({ text, options, show, Icon }, i) => {
					return (
						<View
							className="rounded-lg flex-row bg-white p-4 justify-between"
							style={{ zIndex: preferences.length - i }}
							key={i}
						>
							<View
								className="flex-1 flex-row items-center"
								style={{ columnGap: 8 }}
							>
								<Icon />
								<Text className="text-base font-semibold text-background_login">
									{text}
								</Text>
							</View>
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
