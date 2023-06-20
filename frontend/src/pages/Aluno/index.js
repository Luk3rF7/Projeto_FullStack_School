// area responsavel por renderizar pagina
import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { Form, ProfilePicture, Title } from './styled'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { isEmail, isInt, isFloat } from 'validator'
import { Container } from '../../styles/GlobalStyled'
import { FaUserCircle, FaEdit } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import axios from '../../services/axios'
import history from '../../services/history'
import propTypes from 'prop-types'
import * as actions from '../../store/modules/auth/actions'

export default function Aluno({ match }) {
   const dispatch = useDispatch()
   //pega id
   const id = get(match, 'params.id', '')
   //area hook useState que atualiza variavel guardada
   const [nome, setNome] = useState('')
   const [sobrenome, setSobrenome] = useState('')
   const [email, setEmail] = useState('')
   const [idade, setIdade] = useState('')
   const [altura, setAltura] = useState('')
   const [peso, setPeso] = useState('')
   const [foto, setFoto] = useState('')
   const [isLoading, setIsLoading] = useState(false)

   //useEffect feito para preeencher dados e buscar do bd
   useEffect(() => {
      if (!id) return
      async function getData() {
         try {
            setIsLoading(true)
            const { data } = await axios.get(`/aluno/${id}`)
            const Foto = get(data, 'Fotos[0].url', '')
            setFoto(Foto)

            setNome(data.nome)
            setSobrenome(data.sobrenome)
            setEmail(data.email)
            setIdade(data.idade)
            setPeso(data.peso)
            setAltura(data.altura)
            setIsLoading(false)
         } catch (err) {
            setIsLoading(false)
            const status = get(err, 'response.status', 0)
            const errors = get(err, 'response.data.errors', [])

            if (status === 400) errors.map(error => toast.error(error))
            history.push('/')
            setIsLoading(false)
         }
      }
      getData()
   }, [id, history])
   //evento de click
   const handleSubmit = async e => {
      e.preventDefault()

      //validaçoes de campos!
      let formErrors = false

      if (nome.length < 3 || nome.length > 255) {
         toast.error('Nome precisa ter entre 3 a 255 caracteres!')
         formErrors = true
      }
      if (!isEmail(email)) {
         toast.error('Email inválido!')
         formErrors = true
      }

      if (!isInt(String(idade))) {
         toast.error('Idade inválida!')
      }
      if (!isFloat(String(peso))) {
         toast.error('Peso inválida!')
      }
      if (!isFloat(String(altura))) {
         toast.error('Altura inválida!')
      }
      if (formErrors) return

      try {
         setIsLoading(true)
         if (id) {
            // editando
            await axios.put(`/aluno/${id}`, {
               nome,
               sobrenome,
               email,
               idade,
               peso,
               altura,
            })

            toast.success('Aluno(a) Editado(a) com Sucesso')
         } else {
            //criando
            const { data } = await axios.post(`/aluno/`, {
               nome,
               sobrenome,
               email,
               idade,
               peso,
               altura,
            })
            toast.success('Aluno(a) Criado(a) com Sucesso!')
            history.push(`/aluno/${data.id}/edit`)
            setIsLoading(false)
         }
      } catch (err) {
         console.log(err)
         const status = get(err, 'response.data', 0)
         const data = get(err, 'response.data', {})
         const errors = get(data, 'errors', [])
         if (errors.length > 0) {
            errors.map(error => toast.error(error))
         } else {
            toast.error('Erro Desconhecido!')
         }
         if (status === 401) dispatch(actions.loginFailure())
         setIsLoading(false)
      }
   }
   return (
      <Container>
         <Loading isLoading={isLoading} />
         <Title>{id ? 'Editar Aluno' : 'Registrar Aluno'}</Title>

         {id && (
            <ProfilePicture>
               {foto ? (
                  <img src={foto} alt={nome} />
               ) : (
                  <FaUserCircle size={180} />
               )}
               <Link to={`/fotos/${id}`}>
                  <FaEdit size={20} />
               </Link>
            </ProfilePicture>
         )}
         <Form onSubmit={handleSubmit}>
            <input
               type="text"
               value={nome}
               onChange={e => setNome(e.target.value)}
               placeholder="Nome"
            />
            <input
               type="text"
               value={sobrenome}
               onChange={e => setSobrenome(e.target.value)}
               placeholder="Sobrenome"
            />
            <input
               type="email"
               value={email}
               onChange={e => setEmail(e.target.value)}
               placeholder="E-mail"
            />
            <input
               type="number"
               value={idade}
               onChange={e => setIdade(e.target.value)}
               placeholder="Idade"
            />
            <input
               type="text"
               value={altura}
               onChange={e => setAltura(e.target.value)}
               placeholder="Altura"
            />
            <input
               type="text"
               value={peso}
               onChange={e => setPeso(e.target.value)}
               placeholder="Peso"
            />
            <button type="submit">Enviar</button>
         </Form>
      </Container>
   )
}

//faz validação da propriedade
Aluno.propTypes = {
   match: propTypes.shape({}).isRequired,
}
