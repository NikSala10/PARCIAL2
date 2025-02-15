import { reducer } from './reducer';
import { AppState, Observer } from '../types/store';
import Storage from '../utils/storage';

//El estado global, appState
const initialAppState: AppState =  {
    taskItems: []
};


export let appState = Storage.get('STORE', initialAppState);

let observers: Observer[] = [];

const persistStore = (state: any) => {
	Storage.set('STORE', state);
};

//Crear el dispatch
export const dispatch = (action: any) => {
	const clone = JSON.parse(JSON.stringify(appState));
	const newState = reducer(action, clone);
	appState = newState;

	persistStore(newState);
	observers.forEach((o) => o.render());
};

//Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) => {
	observers = [...observers, ref];
};
