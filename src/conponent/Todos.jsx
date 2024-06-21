import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todoEdit, todoRemove } from '../featues/Todo/Todoslice'

export default function Todos() {

    const Todos = useSelector(state=>{
        console.log(state.todoslice.todos)
        return state.todoslice.todos})
        const dispatch=useDispatch()
        
  return (
    <>
    <div>Todos</div>
    <ul className='list-none'>
        {Todos.map((todo)=>(
            <li
            className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded'
            key={todo.id}>
                <div className="text-white">{todo.text}</div>

                <button
                onClick={()=>dispatch(todoEdit(todo.id ))}
                className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                >edit</button>
                <button
                onClick={()=>dispatch(todoRemove(todo.id))}
                className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
                >&times;
                </button>
                
            </li>
        ))}
    </ul>
    </>
  )
}
