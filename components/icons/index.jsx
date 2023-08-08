import { Image } from 'react-native';
import { SIMPLE_ICONS } from '../../constants/images/others';

export const ArrowLeftIcon = props => {
	return <Image source={SIMPLE_ICONS.arrowLeft} {...props} />;
};

export const FilterIcon = props => {
	return <Image source={SIMPLE_ICONS.filter} {...props} />;
};

const ChevronDirection = {
	left: '0deg',
	right: '180deg',
	top: '90deg',
	bottom: '-90deg',
};
export const ChevronIcon = ({ direction, className, style }) => {
	return (
		<Image
			source={SIMPLE_ICONS.chevronLeft}
			className={className}
			style={[
				{
					transform: [{ rotate: ChevronDirection[direction] ?? '0deg' }],
				},
				style,
			]}
		/>
	);
};
