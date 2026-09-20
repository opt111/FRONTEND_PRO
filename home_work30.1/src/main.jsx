import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { thunk } from 'redux-thunk';
import './style.css';

const initialState = { data: null, loading: false, error: '' };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_INFO': return { ...state, loading: true, error: '', data: null };
    case 'REQUEST_SUCCESS': return { ...state, loading: false, data: action.payload };
    case 'REQUEST_ERROR': return { ...state, loading: false, error: action.payload };
    case 'CLEAR_DATA': return initialState;
    default: return state;
  }
}

const getInfo = (path) => async (dispatch) => {
  dispatch({ type: 'REQUEST_INFO' });
  try {
    const response = await fetch(`https://swapi.py4e.com/api/${path.replace(/^\/+/, '')}`);
    if (!response.ok) throw new Error(`Помилка сервера: ${response.status}`);
    dispatch({ type: 'REQUEST_SUCCESS', payload: await response.json() });
  } catch (error) {
    dispatch({ type: 'REQUEST_ERROR', payload: error.message });
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

function Swapi() {
  const [path, setPath] = useState('people/1');
  const { data, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();
  const submit = (event) => {
    event.preventDefault();
    if (path.trim()) dispatch(getInfo(path.trim()));
  };

  return <main className="swapi">
    <h1>SWAPI</h1>
    <form className="request-form" onSubmit={submit}>
      <span className="base-url">https://swapi.py4e.com/api/</span>
      <input aria-label="Шлях SWAPI" value={path} onChange={(event) => setPath(event.target.value)} placeholder="people/1" />
      <button type="submit" disabled={loading}>{loading ? 'Loading…' : 'Get info'}</button>
    </form>
    {(data || error) && <section className="response">
      <div className="labels"><span>{path.split('/')[0] || 'data'}</span>{data?.name && <b>{data.name}</b>}</div>
      {error ? <p className="error">{error}</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </section>}
    <footer><button className="clear" onClick={() => dispatch({ type: 'CLEAR_DATA' })}>Clear</button></footer>
  </main>;
}

createRoot(document.getElementById('root')).render(<Provider store={store}><Swapi /></Provider>);
