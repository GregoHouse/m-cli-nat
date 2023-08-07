import Icon from 'react-native-vector-icons/Feather';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// FIXME: zIndex may not position over other components
// WARNING: ZIndex property doesn't work very well if placed outside of parent
/// to work with this, make sure the bottom component has less ZIndex than the component
// you'll be using the dropdown
export const DropDownPicker = ({
	options,
	onSetShow,
	placeholder,
	onSelect,
	scrollHorizontal,
	containerStyle,
	scrollStyle,
	selectedStyle,
	dropdownStyle,
	optionTextStyle,
	textSelectedStyle,
	optionStyle,
	iconStyle = iconStyleDefault,
	activeOpacity = { selected: 0.8, option: 0.8 },
	show = false,
	stylePack = style,
	selectedColor = '#5BA7FD33',
}) => {
	const selected = options.find(({ selected }) => selected);

	return (
		<View style={[stylePack.containerStyle, containerStyle]}>
			<TouchableOpacity
				onPress={() => onSetShow(!show)}
				activeOpacity={activeOpacity.selected}
				style={{ alignItems: 'flex-end' }}
			>
				<View style={[stylePack.selected, selectedStyle]}>
					<Text style={[stylePack.textSelectedStyle, textSelectedStyle]}>
						{selected?.label ?? placeholder}
					</Text>
					<Icon
						name={show ? iconStyle.name.open : iconStyle.name.hidden}
						color={iconStyle.name}
						size={iconStyle.size}
					/>
				</View>
			</TouchableOpacity>
			{show && (
				<View style={[stylePack.dropdownStyle, dropdownStyle]}>
					<ScrollView
						style={[stylePack.scrollStyle, scrollStyle]}
						horizontal={scrollHorizontal}
						contentContainerStyle={{
							rowGap: 7,
						}}
					>
						{options.map((opt, i) => {
							return (
								<TouchableOpacity
									activeOpacity={activeOpacity.option}
									style={[
										{
											backgroundColor:
												selected.value === opt.value
													? selectedColor
													: undefined,
										},
										stylePack.optionStyle,
										optionStyle,
									]}
									onPress={() => {
										onSelect(opt);
									}}
									key={i}
								>
									<Text style={[stylePack.optionTextStyle, optionTextStyle]}>
										{opt.label}
									</Text>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
				</View>
			)}
		</View>
	);
};

const iconStyleDefault = {
	name: {
		open: 'chevron-up',
		hidden: 'chevron-down',
	},
	color: '#676666F0',
	size: 20,
};

const style = StyleSheet.create({
	containerStyle: { position: 'relative' },
	dropdownStyle: {
		position: 'absolute',
		right: 0,
		padding: 8,
		top: '100%',
		borderRadius: 10,
		elevation: 4,
		backgroundColor: 'white',
	},
	optionStyle: {
		padding: 5,
		borderRadius: 5,
	},
	optionTextStyle: {},
	textSelectedStyle: {},
	selected: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		columnGap: 5,
		padding: 4,
	},
});
