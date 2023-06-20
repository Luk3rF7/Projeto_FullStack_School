// area responsavel pela ações que tem no site
import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import { get } from 'lodash'
import axios from '../../../services/axios'
import history from '../../../services/history'
import * as actions from './actions'
import * as types from '../types'
function* loginRequest({ payload }) {
   try {
      /*  const { email, password } = payload */
      const response = yield call(axios.post, '/tokens/', payload)
      yield put(actions.loginSuccess({ ...response.data }))

      toast.info('acessando...')
      //autorização do tokkens
      axios.defaults.headers.Authorization = `Bearer ${response.data.token}`

      //redirecionando
      history.push(payload.prevPath)
   } catch (e) {
      toast.error('Usuário ou senha inválidos.')
      yield put(actions.loginFailure())
   }
}

function persistRehydrate({ payload }) {
   const token = get(payload, 'auth.token', '')
   if (!token) return
   axios.defaults.headers.Authorization = `Bearer ${token}`
}

function* registerRequest({ payload }) {
   const { id, nome, email, password } = payload
   try {
      //parte de editar usuario !!
      if (id) {
         yield call(axios.put, '/users', {
            email,
            nome,
            password: password || undefined,
         })
         toast.info('Editado com Sucesso!')
         yield put(
            actions.registerUpdateSuccess({
               nome,
               email,
               password,
            }),
         )
      } else {
         // parte do cadastro!!
         yield call(axios.post, '/users', {
            email,
            nome,
            password,
         })
         toast.success('Conta Criada com Sucesso!')
         yield put(actions.registerCreateSuccess({ nome, email, password }))
      }
   } catch (e) {
      const errors = get(e, 'response.data.error', [])
      const status = get(e, 'response.status', 0)
      //checa se de erro 401 notifique usuario
      if (status === 401) {
         toast.warning('Você precisa fazer login novamente')
         yield put(actions.loginFailure())
         return history.push('/login')
      }
      //checa se existe um error
      if (errors.length > 0) {
         errors.map(error => toast.error(error))
      } else {
         toast.error('Error Desconhecido!')
      }
      yield put(actions.registerFailure())
   }
}
export default all([
   takeLatest(types.LOGIN_REQUEST, loginRequest),
   takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
   takeLatest(types.REGISTER_REQUEST, registerRequest),
])
