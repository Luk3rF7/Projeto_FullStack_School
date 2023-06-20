// area responsavel por renderizar pagina
import React, { useEffect, useState } from 'react'
import axios from '../../services/axios'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { get } from 'lodash'

// components & estilizaçoes
import {
   FaUserCircle,
   FaEdit,
   FaWindowClose,
   FaExclamation,
} from 'react-icons/fa'
import { Container } from '../../styles/GlobalStyled'
import { AlunoContainer, ProfilePicture, NovoAluno } from './styled'
import Loading from '../../components/Loading'
export default function Alunos() {
   const [alunos, setAlunos] = useState([])
   const [isLoading, setIsLoading] = useState(false)
   const HandleDeleteAsk = e => {
      e.preventDefault()
      //inverte icone exclamação
      const exclamation = e.currentTarget.nextSibling
      exclamation.setAttribute('display', 'block')
      toast.warn('você esta preste a excluir esse usuário tem certeza?')

      e.currentTarget.remove()
   }

   const handleDelete = async (e, id, index) => {
      e.persist()
      try {
         setIsLoading(true)
         await axios.delete(`/aluno/${id}`)
         const novosAlunos = [...alunos]
         novosAlunos.splice(index, 1)
         setAlunos(novosAlunos)
         toast.success(`O Aluno  foi excluido com sucesso!`)
         setIsLoading(false)
      } catch (err) {
         const status = get(err, 'response.status', 0)

         if (status === 401) {
            toast.error('Você precisa fazer login,para fazer essa ação!!')
         } else {
            toast.error('Ocorreu um erro ao excluir aluno')
         }
         setIsLoading(false)
      }
   }
   //excluir alunos

   useEffect(() => {
      async function getData() {
         setIsLoading(true)
         const response = await axios.get('/aluno')
         setAlunos(response.data)
         setIsLoading(false)
      }
      getData()
   }, [])
   return (
      <Container>
         <Loading isLoading={isLoading} />
         <h1> Alunos </h1>
         <NovoAluno to="/aluno/">Novo Aluno</NovoAluno>
         <AlunoContainer>
            {alunos.map((aluno, index) => (
               <div key={String(aluno.id)}>
                  <ProfilePicture>
                     {get(aluno, 'Fotos[0].url', false) ? (
                        <img src={aluno.Fotos[0].url} alt="" />
                     ) : (
                        <FaUserCircle size={36} />
                     )}
                  </ProfilePicture>
                  <span>{aluno.nome}</span>
                  <span>{aluno.email} </span>
                  <Link to={`/aluno/${aluno.id}/edit`}>
                     <FaEdit size={16} />
                  </Link>
                  <Link
                     onClick={HandleDeleteAsk}
                     to={`/aluno/${aluno.id}/delete`}
                  >
                     <FaWindowClose size={16} />
                  </Link>
                  <FaExclamation
                     size={16}
                     display="none"
                     cursor="pointer"
                     onClick={e => handleDelete(e, aluno.id, index, aluno)}
                  />
               </div>
            ))}
         </AlunoContainer>
      </Container>
   )
}
