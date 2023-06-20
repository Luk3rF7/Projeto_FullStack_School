// area responsavel pela ações que tem no site
import * as types from '../types'

export function clicaBotaoRequest() {
   return {
      type: types.BOTAO_CLICADO_REQUEST,
      /* caso ação necessite passar algo
          payload:{email,senha} */
   }
}
export function clicaBotaoSuccess() {
   return {
      type: types.BOTAO_CLICADO_SUCCESS,
      /* caso ação necessite passar algo
          payload:{email,senha} */
   }
}
export function clicaBotaoFailure() {
   return {
      type: types.BOTAO_CLICADO_FAILURE,
      /* caso ação necessite passar algo
          payload:{email,senha} */
   }
}
