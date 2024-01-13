/* eslint-disable no-mixed-spaces-and-tabs */
type CountStateType = {
	value: number;
	maxValue: number;
	minValue: number;
	error: null | string;
};
type IncValueActionType = {
	type: 'INC_VALUE';
};
type DecValueActionType = {
	type: 'DEC_VALUE';
};
type SetMaxValueActionType = {
	type: 'SET_MAX_VALUE';
	newMaxValue: number;
};
type SetMinValueActionType = {
	type: 'SET_MIN_VALUE';
	newMinValue: number;
};

type ResValueActionType = {
	type: 'RES_VALUE';
};

type CountActionsType =
	| IncValueActionType
	| DecValueActionType
	| SetMaxValueActionType
	| SetMinValueActionType
	| ResValueActionType;

const initialState: CountStateType = {
	value: 0,
	maxValue: 10,
	minValue: 0,
	error: null,
};

export const incValueAC = (): IncValueActionType => ({
	type: 'INC_VALUE',
});
export const decValueAC = (): DecValueActionType => ({
	type: 'DEC_VALUE',
});
export const setMaxValueAC = (newMaxValue: number): SetMaxValueActionType => ({
	type: 'SET_MAX_VALUE',
	newMaxValue,
});
export const setMinValueAC = (newMinValue: number): SetMinValueActionType => ({
	type: 'SET_MIN_VALUE',
	newMinValue,
});

export const resValueAC = (): ResValueActionType => ({
	type: 'RES_VALUE',
});

export const countReducer = (
	state: CountStateType = initialState,
	action: CountActionsType
): CountStateType => {
	switch (action.type) {
		case 'RES_VALUE': {
			return { ...state, value: state.minValue };
		}
		case 'INC_VALUE': {
			return state.value < state.maxValue
				? { ...state, value: state.value + 1 }
				: state;
		}
		case 'DEC_VALUE': {
			return state.value > state.minValue
				? { ...state, value: state.value - 1 }
				: state;
		}
		case 'SET_MAX_VALUE': {
			return action.newMaxValue > state.minValue
				? {
						...state,
						maxValue: action.newMaxValue,
						error: null,
						value:
							action.newMaxValue < state.value
								? action.newMaxValue
								: state.value,
				  }
				: { ...state, error: 'Invalid max value' };
		}
		case 'SET_MIN_VALUE': {
			return action.newMinValue < state.maxValue && action.newMinValue >= 0
				? {
						...state,
						minValue: action.newMinValue,
						error: null,
						value:
							action.newMinValue > state.value
								? action.newMinValue
								: state.value,
				  }
				: { ...state, error: 'Invalid min value' };
		}
		default:
			return state;
	}
};
