import { Image } from 'react-native';

export const CircularImage = ({ source, withBorder, style }) => {
	return (
		<Image
			source={source}
			style={[
				{
					width: 20,
					borderWidth: 2,
					borderColor: withBorder ? 'white' : 'transparent',
				},
				style,
			]}
			className="rounded-full aspect-square"
		/>
	);
};
