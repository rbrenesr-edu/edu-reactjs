import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//import { CallbackHook } from './06-memos/CallbackHook'
//import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'
//import { MemoHook } from './06-memos/MemoHook'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FocusScreen } from './04-useRef/FocusScreen'
//import { Layout } from './05-useLayoutEffect/Layout'
//import { Memoriza } from './06-memos/Memoriza'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
//import { HooksApp } from './HooksApp'
import './index.css'
import './08-useReducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        {/* <MainApp /> */}
       <TodoApp/> 
    </BrowserRouter>
)
