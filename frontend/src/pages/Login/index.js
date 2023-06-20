// area responsavel por renderizar pagina
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Form, LinkRegister } from './styled'
import { Container } from '../../styles/GlobalStyled'
import { isEmail } from 'validator'
import { get } from 'lodash'
import Loading from '../../components/Loading'
import * as actions from '../../store/modules/auth/actions'

export default function Login(props) {
   // Systema de Login:

   //disparador de açoes dispatch
   const dispatch = useDispatch()
   //ve se tem caminho ,senão ele retorna
   const prevPath = get(props, 'location.state.prevPath', '/')
   //useSelector para adicionar tela loading
   const isLoading = useSelector(state => state.auth.isLoading)
   //hook state responsavel por guardar e atualizar valores
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   //responsavel pelo eventos
   function handleSubmit(e) {
      //trava evento submit
      e.preventDefault()

      //validações:
      let formErrors = false
      if (!isEmail(email)) {
         formErrors = true
         toast.error('E-mail não cadastrado ou inválido.')
      }
      if (password.length < 6 || password.length > 50) {
         formErrors = true
         toast.error('Senha inválida!')
      }
      if (formErrors) return
      dispatch(actions.loginRequest({ email, password, prevPath }))
   }
   return (
      <Container>
         <Loading isLoadind={isLoading} />
         <h1> Login </h1>
         <Form onSubmit={handleSubmit}>
            <label>
               Email:
               <input
                  type="text"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Digite seu E-mail"
               />
            </label>
            <label>
               Senha:
               <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Digite sua Senha"
               />
            </label>
            <LinkRegister href="/register">
               <p>não tem cadastro?</p>Cadastre-se!
            </LinkRegister>
            <button> Logar </button>
         </Form>
      </Container>
   )
}
