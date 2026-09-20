import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { createReduxHistoryContext } from 'redux-first-history';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { api } from './api';
const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({ history: createBrowserHistory() });
const initial={destinations:[],hotels:[],loading:false,error:''};
const booking=(state=initial,action)=>{switch(action.type){case'DESTINATIONS_OK':return{...state,destinations:action.items};case'SEARCH':return{...state,loading:true,error:''};case'HOTELS_OK':return{...state,loading:false,hotels:action.items};case'FAIL':return{...state,loading:false,error:action.error};default:return state}};
function* loadDestinations(){try{const {data}=yield call(api.get,'/destinations');yield put({type:'DESTINATIONS_OK',items:data})}catch(e){yield put({type:'FAIL',error:'Сервер недоступний. Запустіть npm run server.'})}}
function* search({payload}){try{const {data}=yield call(api.get,'/hotels',{params:{destination:payload.destination},data:payload});yield put({type:'HOTELS_OK',items:data});yield call([history,history.push],'/hotels')}catch(e){yield put({type:'FAIL',error:'Не вдалося знайти готелі.'})}}
function* rootSaga(){yield all([takeLatest('LOAD_DESTINATIONS',loadDestinations),takeLatest('SEARCH',search)])}
const saga=createSagaMiddleware();const store=createStore(combineReducers({router:routerReducer,booking}),applyMiddleware(routerMiddleware,saga));export let history=createReduxHistory(store);saga.run(rootSaga);export default store;
