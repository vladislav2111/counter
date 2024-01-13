import { createStore } from 'redux';
import { countReducer } from './count-reducer';

export const store = createStore(countReducer)

export type AppRootStateType = ReturnType<typeof countReducer>