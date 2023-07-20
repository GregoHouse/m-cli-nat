import { ScrollView } from 'react-native';
import { MyActivityBox, PointsBox, PreferencesSection } from './sections';

export default function SportProfile() {
	return (
		<ScrollView>
			<MyActivityBox records={ActivitySport} />
			<PointsBox />
			<PreferencesSection preferences={preferences} />
		</ScrollView>
	);
}

const ActivitySport = [
	{
		n: 15,
		text: 'Jugadas',
	},
	{
		n: 10,
		text: 'Ganadas',
	},
	{
		n: 5,
		text: 'Perdidas',
	},
	{
		n: 4,
		text: 'Organizados',
	},
	{
		n: 14,
		text: 'Asistencias',
	},
	{
		n: 1,
		text: 'Canceladas',
	},
];

const preferences = [
	{ keyValue: 'Mano preferida', value: 'Ambas' },
	{ keyValue: 'Posicion de la pista', value: 'Reves' },
	{ keyValue: 'Tipo de Partido', value: 'Competitivo' },
];
