import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || []
}

const todos = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [
                action.payload,
                ...state.todos
            ]
            
            localStorage.setItem("todos",JSON.stringify(state.todos))
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => {
                if(action.payload.id === todo.id){
                    todo.title = action.payload.title
                    todo.done = action.payload.done
                }
                return todo
            })
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        }
    }
})

export const { addTodo, editTodo, deleteTodo } = todos.actions
export default todos.reducer