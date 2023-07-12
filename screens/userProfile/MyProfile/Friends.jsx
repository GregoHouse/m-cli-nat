import { View, Image, Text, FlatList, StyleSheet } from 'react-native';

const Friend = ({ isActive, avatar }) => {
	return (
		<View
			style={{
				position: 'relative',
				marginRight: 14,
			}}>
			<Image
				style={{
					width: 70,
					height: 70,
					borderRadius: 100,
					borderWidth: 3,
					borderColor: 'white',
				}}
				source={{
					uri: avatar,
				}}
			/>
			{isActive && (
				<View
					style={{
						position: 'absolute',
						bottom: 0,
						right: 0,
						borderRadius: 10,
						backgroundColor: '#36b37e',
						borderWidth: 2,
						borderColor: 'white',
						height: 25,
						width: 25,
					}}
				/>
			)}
		</View>
	);
};

export default function FriendsList({ friends }) {
	return (
		<View style={{ marginTop: 16 }}>
			<View style={friendStyle.headerText}>
				<Text style={{ fontWeight: 'bold', color: '#cbcdd1', fontSize: 18 }}>
					Amigos (32)
				</Text>
				<Text style={{ color: '#203144', fontWeight: 'bold' }}>Ver todos</Text>
			</View>
			<FlatList
				style={{ paddingBottom: 8 }}
				horizontal
				data={friends}
				renderItem={({ item }) => {
					return (
						<Friend
							name={item.name}
							isActive={item.isActive}
							avatar={item.avatar}
						/>
					);
				}}
			/>
		</View>
	);
}

const friendStyle = StyleSheet.create({
	headerText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 8,
	},
});
