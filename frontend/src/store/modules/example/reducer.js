// area responsavel pela ações que tem no site
import * as types from '../types'
/* import { toast } from 'react-toastify' */
const initialState = {
   botaoClicado: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
   switch (action.type) {
      case types.BOTAO_CLICADO_SUCCESS: {
         //  (toast.success('Clicado com Sucesso')
         //nunca mexer com state atual e sempre criar um novo
         const newState = { ...state }
         // checa se botao for clicado e for false muda para verdadeiro
         newState.botaoClicado = !newState.botaoClicado
         return newState
      }

      case types.BOTAO_CLICADO_FAILURE: {
         const newState = { ...state }
         return newState
      }
      case types.BOTAO_CLICADO_REQUEST: {
         return state //sempre deve retorna state ou novo state
      }
      default:
         return state
   }
}
