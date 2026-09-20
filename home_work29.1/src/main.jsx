import React from 'react'; import { createRoot } from 'react-dom/client'; import { createStore } from 'redux'; import { Provider, useDispatch, useSelector } from 'react-redux'; import './style.css';
const reducer = (state = 0, action) => action.type === 'INCREMENT' ? state + 1 : action.type === 'DECREMENT' ? state - 1 : state;
const store = createStore(reducer);
function Counter(){const count=useSelector(s=>s);const dispatch=useDispatch();return <main><h1>Redux Counter</h1><p className="count">{count}</p><div><button onClick={()=>dispatch({type:'DECREMENT'})}>−</button><button onClick={()=>dispatch({type:'INCREMENT'})}>+</button></div></main>};createRoot(document.getElementById('root')).render(<Provider store={store}><Counter/></Provider>);
