import {GET_GOALS,CREATE_GOAL,UPDATE_GOAL,DELETE_GOAL,REMOVE_ALL_GOALS,CREATE_ENTRY,DELETE_ENTRY, DELETE_AWARD, CREATE_AWARD} from '../types'

const initialState = {
    goals:[]
}

export default function(state = initialState, action){
     switch(action.type){
        case GET_GOALS:
            return {
                ...state,
                goals:action.payload,
            };
        case CREATE_GOAL:
            return {goals: [...state.goals, action.payload]};
        case UPDATE_GOAL:
            var updateGoalMap = state.goals.map((goal) => {
                if (goal.id == action.payload.goal.id) {
                return {
                    ...goal,
                    ...action.payload.goal,
                };
                } else {
                    return goal;
                }
            });
            return {goals: updateGoalMap}
        case DELETE_GOAL:
            var deleteGaolMap = state.goals.filter(({ id }) => id !== action.payload.deletedGoal.id);  
            return {goals: deleteGaolMap}
        case REMOVE_ALL_GOALS: 
            return {goals:[]}
        case CREATE_ENTRY:
            var createMap = state.goals.map(goal =>
                goal.id === action.payload.goalId ? {
                  ...goal,
                  entries: [
                    ...goal.entries,
                    action.payload
                  ]
                } : goal
              )
              return {goals:createMap}
        case DELETE_ENTRY:
            var deleteMap = state.goals.map(goal =>
                goal.entries.filter(entry => entry.id === action.payload.deletedEntry.id).length > 0 ? {
                  ...goal,
                  entries: goal.entries.filter(({ id }) => id !== action.payload.deletedEntry.id)
                } : goal
              )
              return {goals:deleteMap}
        case DELETE_AWARD:
            var deleteAwardMap = state.goals.map(goal =>
                goal.awards.filter(award => award.id === action.payload.deletedAward.id).length > 0 ? {
                    ...goal,
                    awards: goal.awards.filter(({ id }) => id !== action.payload.deletedAward.id)
                } : goal
                )
            return {goals:deleteAwardMap}
        case CREATE_AWARD:
            var createAwardMap = state.goals.map(goal =>
                goal.id == action.payload.goalId ? {
                    ...goal,
                    awards: [
                    ...goal.awards,
                    action.payload
                    ]
                } : goal
                )
            return {goals:createAwardMap}
        default: return state
    }

}