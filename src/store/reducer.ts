import TaskItem from "../components/productItem/productItem";
import { Actions } from "../types/store";

//REDUCER: mira la acción que se necesita, con base a esa accion hace un cambio en el estado, para que envie ese estado nuevo, osea RETORNA EL ESTADO NUEVO. AYUDA ENVIANDOME EL ESTADO NUEVO, OSEA EL CAMBIO
export const reducer = (currentAction: any, currentState: any) =>      {
    // el currentAction recibe la action y el payload de tipo objeto, los valores del currentAction los guarda en una vaariblae, action y payload
    
    const  {action, payload} = currentAction;
//esto es igual a si tuviera esto: 
    // const action = currentAction.action
    // const payload = currentAction.payload
    switch (action) {
        case Actions.ADD_TASK:

            //RETURN: retorna la copia del obejto (que es el estado), además en la lista, en el store existe la lista, 
            return  {
                ...currentState,

                //la lista es una lista por eso se le pone los dos puntos: osea el key: (:) y el value, en la key de la lista, lo que quiero es cambiarle el value ([...currentState.lista, payload])

                
                taskItems: [...currentState.taskItems, payload]
                
            };

            case Actions.REMOVE_TASK:
            return  {
                ...currentState,
                taskItems: currentState.taskItems.filter((task: any) =>  task.title !== payload.title || task.description !== payload.description)
            };
            case Actions.TOGGLE_TASK:

            const newsTaskItems: any =  []
            currentState.taskItems.forEach((task: any) => {
                if (payload.title == task.title && payload.description == task.description) {
                    newsTaskItems.push(payload)
                }else  {
                    newsTaskItems.push(task)
                }
            });
                
                return  {
                    ...currentState,
                    taskItems: newsTaskItems,
                };

        default:
            // EN CASO QUE NINGUNO DE LOS CASOS SE CUMPLA, RETORNA EL ESTADO SIN NINGÚN CAMBIO
            return currentState;
    }
};