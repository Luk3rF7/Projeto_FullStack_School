// area responsavel pela ações que tem no site
import * as types from '../types'
import axios from '../../../services/axios'
const initialState = {
   isLoggedIn: false,
   token: false,
   user: {},
   isLoading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
   switch (action.type) {
      //LOGIN
      case types.LOGIN_SUCCESS: {
         const newState = { ...state }
         newState.isLoggedIn = true
         newState.token = action.payload.token
         newState.user = action.payload.user
         newState.isLoading = false
         return newState
      }
      case types.LOGIN_FAILURE: {
         delete axios.defaults.headers.Authorization
         const newState = { ...initialState }
         return newState
      }
      case types.LOGIN_REQUEST: {
         const newState = { ...state }
         newState.isLoggedIn = true
         return newState
      }
      //REGISTROS
      case types.REGISTER_UPDATE_SUCCESS: {
         const newState = { ...state }
         newState.user.nome = action.payload.nome
         newState.user.email = action.payload.email
         newState.isLoading = false
         return newState
      }
      case types.REGISTER_CREATE_SUCCESS: {
         const newState = { ...state }
         newState.isLoading = false
         return newState
      }
      case types.REGISTER_FAILURE: {
         const newState = { ...state }
         newState.isLoading = false
         return newState
      }
      case types.REGISTER_REQUEST: {
         const newState = { ...state }
         newState.isLoading = true
         return newState
      }
      default: {
         return state
      }
   }
}
