import {
	CalendarIcon,
	CategoryIcon,
	ClockIcon,
	FieldPositionIcon,
	HandIcon,
	TypeOfMatchIcon,
} from '../../components/icons/preferences';

const DATA = [
	{
		text: 'Mano preferida',
		Icon: HandIcon,
		options: [
			{ label: 'Ambas', selected: false, value: 'Ambas' },
			{ label: 'Derecha', selected: false, value: 'Derecha' },
			{ label: 'Revés', selected: true, value: 'Revés' },
		],
	},
	{
		text: 'Posicion de la pista',
		Icon: FieldPositionIcon,
		options: [
			{ label: 'Ambas', selected: false, value: 'Ambas' },
			{ label: 'Derecha', selected: false, value: 'Derecha' },
			{ label: 'Revés', selected: true, value: 'Revés' },
		],
	},
	{
		text: 'Tipo de Partido',
		Icon: TypeOfMatchIcon,
		options: [
			{ label: 'Competitivo', selected: true, value: 'Competitivo' },
			{ label: 'Amistoso', selected: false, value: 'Amistoso' },
			{ label: 'Ambas', selected: false, value: 'Ambas' },
		],
	},
	{
		text: 'Días de juego',
		Icon: CalendarIcon,
		options: [
			{ label: 'Lunes a Viernes', selected: true, value: 'Lunes a Viernes' },
			{ label: 'Sabado y Domingo', selected: false, value: 'Sabado y Domingo' },
		],
	},
	{
		text: 'Horario de juego',
		Icon: ClockIcon,
		options: [
			{ label: 'Por la tarde', selected: true, value: 'Por la tarde' },
			{ label: 'Por la noche', selected: false, value: 'Por la noche' },
		],
	},
	{
		text: 'Categoría',
		Icon: CategoryIcon,
		options: [
			{ label: '1er', selected: true, value: '1er' },
			{ label: '2da', selected: false, value: '2da' },
			{ label: '3ra', selected: false, value: '3ra' },
			{ label: '4ta', selected: false, value: '4ta' },
			{ label: '5ta', selected: false, value: '5ta' },
			{ label: '6ta', selected: false, value: '6ta' },
			{ label: '7ma', selected: false, value: '7ma' },
		],
	},
];

export default DATA;
