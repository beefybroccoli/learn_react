export const CREATE_TASK = "CREATE_TASK";
export const createTask = text => ({
    type:CREATE_TASK, paylod:{text}
})

export const REMOVE_TODO = "REMOVE_TODO";
