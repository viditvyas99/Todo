import { createSlice, nanoid } from "@reduxjs/toolkit"


const initialState ={
    todos:[{id:1,text:'hello'}]
}

export const todoslice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        todoAdd:(state,action)=>{
            const todo={
                id :nanoid(),
                text : action.payload,
            }
            state.todos.push(todo)
        },
        todoRemove:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !==action.payload)
        },
        todoEdit: (state,action)=>{
            const {id,text}=action.payload
            const exitingtodo=state.todos.find((element)=>element.id===id)
            if(exitingtodo){
                exitingtodo.text=text
            }
            
        }
    }
})
export const{todoAdd, todoRemove,todoEdit}=todoslice.actions
export default todoslice.reducer
