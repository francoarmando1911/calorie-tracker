import { Activity } from "../types"

export type ActivityActions = | {
    type: 'save-activity', 
    payload: {newActivity : Activity}
}

type ActivityState = {
    activities: Activity[]

}

export const initialState : ActivityState = {
    activities : []
}

export const activityReducer = (
    state : ActivityState = initialState,
    action: ActivityActions
) => {
    if(action.type === 'save-activity'){
        //Manejo de logica para controlar el state
        console.log(action.payload.newActivity)
    }
    
    return state




}