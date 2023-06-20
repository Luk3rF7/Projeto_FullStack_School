// area responsavel por renderizar pagina
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isEmail } from 'validator'
import { toast } from 'react-toastify'
import { Container } from '../../styles/GlobalStyled'
import { Form } from './styled'
import history from '../../services/history'
import Loading from '../../components/Loading'
import * as actions from '../../store/modules/auth/actions'
export default function Register() {
   //use dispatch
   const dispatch = useDispatch()
   //useSelect
   const id = useSelector(state => state.auth.user.id)
   const nomeStored = useSelector(state => state.auth.user.nome)
   const emailStored = useSelector(state => state.auth.user.email)
   const isLoading = useSelector(state => state.auth.isLoading)
   // hook | Sistema de Registro no frontend
   const [nome, setNome] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   // hook effect
   useEffect(() => {
      if (!id) return

      setNome(nomeStored)
      setEmail(emailStored)
   }, [id, nomeStored, emailStored])

   //pega evento submit do formulario
   async function handleSubmit(e) {
      e.preventDefault()
      let formError = false
      // fazendo validações pelo front end

      //validar nome se e maior ou menor
      //
      if (nome.length < 3 || nome.lenght > 255) {
         formError = true

         toast.error('O Campo nome Precisa ter entre 3 a 255 caracteres!')
      }
      //utiliza validator para validar o email
      //
      if (!isEmail(email)) {
         formError = true

         toast.error('E-mail inválido')
      }
      //valida tamanho da senha
      //
      if (!id && (password.length < 6 || password.lenght > 50)) {
         formError = true

         toast.error('A Senha Deve Conter entre 6 a 50 caracteres!')
      }
      //
      if (formError) return
      dispatch(actions.registerRequest({ nome, email, password, id }))
      history.push('/login')
   }

   //contrução do Form de Registro
   return (
      <Container>
         <Loading isLoading={isLoading} />
         <h1> {id ? 'Editar Dados ' : 'Crie sua Conta'}</h1>
         <Form onSubmit={handleSubmit}>
            <label htmlFor="nome">
               Nome:
               <input
                  type="text"
                  value={nome}
                  onChange={e => setNome(e.target.value)}
                  placeholder="Digite Seu nome"
               />
            </label>
            <label htmlFor="email">
               E-mail:
               <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Digite Seu E-mail"
               />
            </label>
            <label htmlFor="password">
               Senha:
               <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Digite Sua Senha"
               />
            </label>
            <button type="submit">
               {id ? 'Salva alterações' : 'Criar Conta'}
            </button>
         </Form>
      </Container>
   )
}
