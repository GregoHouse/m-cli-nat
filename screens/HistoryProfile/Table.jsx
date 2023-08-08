import { View } from 'react-native';
import Table from '../../components/tables/core';
import { CircularImage } from '../../components/Images';

const SIZES = ['24%', '14%', '24%', '26%', '12%'];

const HistoryRowInfo = ({ dateAndTime, results, bg, clubImage, teamImgs }) => {
	return (
		<View
			className="flex-row py-5"
			style={{
				backgroundColor: bg,
			}}
		>
			<Table.BodyText text={dateAndTime} width={SIZES[0]} />
			<View
				className="items-center"
				style={{
					width: SIZES[1],
				}}
			>
				<CircularImage
					style={{
						width: 32,
					}}
					source={{
						uri: clubImage,
					}}
				/>
			</View>
			<View
				className="flex-row justify-center items-center"
				style={{
					gap: -14,
					width: SIZES[2],
				}}
			>
				{teamImgs.map((teamImg, i) => {
					return (
						<CircularImage
							key={i}
							withBorder
							style={{
								width: 33,
							}}
							source={{
								uri: teamImg,
							}}
						/>
					);
				})}
			</View>
			<Table.BodyText
				text={results}
				color="black"
				width={SIZES[3]}
				styleClass="font-semibold"
			/>

			<View
				className="flex-row items-center overflow-hidden justify-center"
				style={{
					width: SIZES[SIZES.length - 1],
				}}
			>
				{[1, 2, 3].map((_, i) => {
					return (
						<View
							key={i}
							style={{ marginHorizontal: 1 }}
							className="rounded-full bg-black w-1 aspect-square"
						/>
					);
				})}
			</View>
		</View>
	);
};

export default function HistoryTable({ rowColumns }) {
	return (
		<View className="mt-2 flex-1">
			<Table.Header
				borderColor="#DDDDDD80"
				headers={['Fecha  hs.', 'Club', 'Equipo', 'Resultados', 'Más']}
				sizes={SIZES}
			/>
			<Table.Body
				columnSizes={SIZES}
				rows={rowColumns}
				rowContentComponent={(row, i) => {
					return (
						<HistoryRowInfo
							dateAndTime={`${row.date}  ${row.time}`}
							results={row.results}
							clubImage={row.clubImage}
							teamImgs={row.teamImgs}
							key={i}
							bg={i % 2 == 0 ? '#F3F3F3' : 'white'}
						/>
					);
				}}
			/>
		</View>
	);
}
