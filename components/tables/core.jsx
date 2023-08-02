import { useCallback } from 'react';
import { View, ScrollView, Text } from 'react-native';

export const TableHaderText = ({ width, style, text, className }) => {
	return (
		<Text
			className={`font-semibold text-sm text-center py-5 ${className}`}
			style={[
				{
					color: '#333333',
					width,
					borderRightWidth: 1,
					borderColor: 'transparent',
				},
				style,
			]}
		>
			{text}
		</Text>
	);
};

export const TableBodyText = ({ width, color, text, className }) => {
	return (
		<Text
			style={{
				width,
				color,
				verticalAlign: 'middle',
			}}
			className={`text-sm text-center overflow-hidden ${className ?? ''}`}
		>
			{text}
		</Text>
	);
};

export const TableHeader = ({
	style,
	bgColor,
	color,
	headers,
	sizes,
	borderColor,
	borderWidth,
}) => {
	return (
		<View
			className="bg-white flex-row rounded-lg"
			style={
				({
					backgroundColor: bgColor,
				},
				[style])
			}
		>
			{headers.map((header, i) => {
				return (
					<TableHaderText
						style={{
							color,
							borderRightWidth: borderWidth ?? 1,
							borderColor:
								i != headers.length - 1 ? borderColor : 'transparent',
						}}
						key={i}
						text={header}
						width={sizes ? sizes[i] : undefined}
					/>
				);
			})}
		</View>
	);
};
/**
 *
 * @param  eachRowColumn return each column in a row
 * @returns
 */
export const TableBody = ({
	className,
	contentStyle,
	columnSizes,
	eachRowColumn,
	rows,
	rowContentComponent,
	stripeColor,
	stripedRows,
	style,
}) => {
	const renderRows = useCallback(
		(row, index) => {
			if (rowContentComponent) return rowContentComponent(row, index);
			return (
				<View
					key={index}
					className="flex-row py-5"
					style={{
						backgroundColor: stripedRows ? stripeColor : undefined,
					}}
				>
					{eachRowColumn(row, columnSizes)}
				</View>
			);
		},
		[rowContentComponent],
	);

	return (
		<ScrollView
			className={`mt-2 flex-col overflow-hidden ${className}`}
			style={style}
			contentContainerStyle={[
				{
					borderRadius: 10,
					overflow: 'hidden',
					// flex: 1,
				},
				contentStyle,
			]}
		>
			{rows.map(renderRows)}
		</ScrollView>
	);
};

const Table = {
	Header: TableHeader,
	Body: TableBody,
	HeaderText: TableHaderText,
	BodyText: TableBodyText,
};

export default Table;
