import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoAdd } from '../featues/Todo/Todoslice'

export default function Addtodo() {
     const [input, setinput] = useState('')
    //  const dispatch =useDispatch()
    const dispatch=useDispatch()
     const addTodohanlder =(e)=>{
        e.preventDefault()
        dispatch(todoAdd(input))
        setinput('')
     }
  return (
    
        <form onSubmit={addTodohanlder} className='space-x-3 mt-12'>
            <input
            type='text'
            className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-indigo-900 text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
            placeholder='enter a todo ...'
            value={input}
            onChange={(e)=>setinput(e.target.value)}            
            />
            <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
                add todo 

            </button>
        </form>
  )
}
