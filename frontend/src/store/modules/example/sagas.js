// area responsavel pela ações que tem no site
import { call, put, all, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as types from '../types'
import { toast } from 'react-toastify'

const requisicao = () => {
   new Promise(resolve => {
      setTimeout(() => {
         resolve()
      }, 200)
   })
}

function* exampleRequest() {
   try {
      yield call(requisicao)
      yield put(actions.clicaBotaoSuccess())
      toast.success('Botão executado com sucess!!')
   } catch {
      toast.error('Deu erro.')
      yield put(actions.clicaBotaoFailure())
   }
}
export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)])
