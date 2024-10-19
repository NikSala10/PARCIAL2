export type AppState = {
	taskItems: any[]
};

//ESTA LINEA: Los type observers tienen que ser de tipo HTMLElement, los componentes son HTMLElement. OBservers tambien tiene que ser HTMLElement y tambien tienen que tener la uncion render, Porque sino sucede un caos, en caso de que no exista el render se explota. Se va a hacer la uncion render, porque existe el render. 
export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
	'ADD_TASK' = 'ADD_TASK',
	'REMOVE_TASK' = 'REMOVE_TASK',
	'TOGGLE_TASK' = 'TOGGLE_TASK',
	'GETPRODUCTS' = 'GETPRODUCTS',
}