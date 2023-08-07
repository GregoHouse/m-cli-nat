import { Image } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { PREFERENCES_ICONS } from '../../constants/images';

export const HandIcon = ({ size = 20, color = '#203144', ...rest }) => {
	return <EntypoIcon name="hand" color={color} size={size} {...rest} />;
};

export const CalendarIcon = ({ size = 20, color = '#203144', ...rest }) => {
	return <FeatherIcon name="clock" color={color} size={size} {...rest} />;
};
export const ClockIcon = ({ size = 20, color = '#203144', ...rest }) => {
	return <FeatherIcon name="clock" color={color} size={size} {...rest} />;
};

export const FieldPositionIcon = ({ size = 20, ...rest }) => {
	return (
		<Image
			source={PREFERENCES_ICONS.fieldPosition}
			style={{ width: size, aspectRatio: 1 }}
			{...rest}
		/>
	);
};

export const TypeOfMatchIcon = ({ size = 20, ...rest }) => {
	return (
		<Image
			source={PREFERENCES_ICONS.typeOfMatch}
			style={{ width: size, aspectRatio: 1 }}
			{...rest}
		/>
	);
};

export const CategoryIcon = ({ size = 20, ...rest }) => {
	return (
		<Image
			source={PREFERENCES_ICONS.category}
			style={{ width: size, aspectRatio: 1 }}
			{...rest}
		/>
	);
};
