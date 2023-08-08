import { PREFERENCES_ICONS } from '../../../constants/images';

export const Records = {
	Jugadas: '🎾',
	Ganadas: '🏆',
	Perdidas: '👎🏽',
	Organizados: '🎖️',
	Asistencias: '📋',
	Canceladas: '🚫',
};

export const preferences = [
	{ keyValue: 'Mano preferida', value: 'Ambas', icon: PREFERENCES_ICONS.hand },
	{
		keyValue: 'Posicion de la pista',
		value: 'Reves',
		icon: PREFERENCES_ICONS.fieldPosition,
	},
	{
		keyValue: 'Tipo de Partido',
		value: 'Competitivo',
		icon: PREFERENCES_ICONS.typeOfMatch,
	},
	{
		keyValue: 'Dias de juego',
		value: 'Lun-Viernes',
		icon: PREFERENCES_ICONS.hand,
	},
	{
		keyValue: 'Horario de juego',
		value: 'Por la tarde',
		icon: PREFERENCES_ICONS.hand,
	},
	{
		keyValue: 'Categoría',
		value: '5ta',
		icon: PREFERENCES_ICONS.hand,
	},
];

export const ActivitySport = [
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
