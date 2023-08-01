import { Image } from 'react-native';
import { SIMPLE_ICONS } from '../../constants/images/others';

export const ArrowLeftIcon = props => {
	return <Image source={SIMPLE_ICONS.arrowLeft} {...props} />;
};

export const FilterIcon = props => {
	return <Image source={SIMPLE_ICONS.filter} {...props} />;
};
