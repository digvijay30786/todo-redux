

export const TodoReducer = (state = [],{type,payload}) => {
    switch (type)
    {
        case "addTodo": return state = [...state,{payload,status:false}];
        case "statusTodo": state[payload].status = state[payload].status?false:true;
            return state;

        case "update": state[payload.id].payload = payload.payload;
            return state;
        default: return state;
    }
   
}