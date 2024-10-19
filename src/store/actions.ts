import { Actions } from '../types/store';
import { getProducts } from '../services/getProductsDta';
//TODAS LAS ACCIONES QUE NECESITAMOS HAGAN UN CAMBIO EN EL ESTADO
export const getCharacters = async(payload: any) => { 
	const data = await getProducts(); 
	
	return { 
		action : Actions.GETPRODUCTS,
		 payload: data,
	 } 
};


export const addListTaskItem = (task: any) => {
	return {
		action: Actions.ADD_TASK,
		payload: task
	};
};

export const removeTaskItem = (task: any) => {
	return {
		action: Actions.REMOVE_TASK,
		payload: task
	};
};


export const toggleTaskItem = (task: any) => {
	return {
		action: Actions.TOGGLE_TASK,
		payload: task
	};
};