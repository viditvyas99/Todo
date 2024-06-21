import { configureStore } from "@reduxjs/toolkit";
import todoslice from '../featues/Todo/Todoslice';


export  const store=configureStore({
    reducer:{todoslice}
})