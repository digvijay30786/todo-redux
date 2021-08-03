
export const addTodo = (todoTitle) => {
    return { type: "addTodo", payload: todoTitle };
}

export const statusTodo = (id) => {
    return { type: "statusTodo", payload: id };
}

export const updateTodo = (prop) =>
{
    return {type:"update",payload:prop}
}