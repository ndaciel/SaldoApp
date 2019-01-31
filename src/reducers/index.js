import { combineReducers } from 'redux'
import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { 
  FETCH_DATA
} from '../actions/index'

export const dataHasilPenjumlahanSaldo = (state ={
  result:"0",
},action) => {
  switch (action.type){
    case `${HITUNG_SALDO}`:
    return {
      ...state,
      result:action.payload
    }
  }
}

export const data = (state = {
  items: '',
}, action) => {
  switch (action.type){
    case `${FETCH_DATA}`: 
      return {
        ...state,
        items: 'This is data from redux'
      }

    default: 
      return state
  }
}


const rootReducer = combineReducers({
  data,
  dataHasilPenjumlahanSaldo
})

export default rootReducer
