import { Activity } from "../types"

export type ActivityActions = | 
    { type: 'save-activity', payload: {newActivity : Activity} } |
    { type: 'save-activeId', payload: { id: Activity['id'] } }

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']

}

export const initialState : ActivityState = {
    activities : [],
    activeId: ''
}

export const activityReducer = (
    state : ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        //Manejo de logica para controlar el state
        console.log(action.payload.newActivity)
    
    
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }

    }

    if (action.type === 'save-activeId'){
        return{
            ...state,
            activeId: action.payload.id
        }
    }

    return state

}