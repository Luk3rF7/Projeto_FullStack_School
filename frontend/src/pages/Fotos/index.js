// area responsavel por renderizar pagina
import React, { useState, useEffect } from 'react'
import { get } from 'lodash'
import { toast } from 'react-toastify'
import { Container } from '../../styles/GlobalStyled'
import { Form, Title } from './styled'
import PropTypes from 'prop-types'
import Loading from '../../components/Loading'
import axios from '../../services/axios'
import history from '../../services/history'
import { useDispatch } from 'react-redux'
import * as actions from '../../store/modules/auth/actions'

export default function Foto({ match }) {
   const id = get(match, 'params.id', '')
   const dispatch = useDispatch()
   const [foto, setFoto] = useState('')
   const [isLoading, setIsLoading] = useState(false)

   //evento enviar foto pro db e backend
   const handleChange = async e => {
      const file = e.target.files[0]
      const fotoURL = URL.createObjectURL(file)
      setFoto(fotoURL)

      //simular formulario

      const formData = new FormData()
      formData.append('aluno_id', id)
      formData.append('foto', file)
      //fazer axios enviar pro back end
      try {
         setIsLoading(true)
         await axios.post('/fotos/', formData, {
            header: {
               'content-type': 'multipart/form-data',
            },
         })
         toast.success('Foto alterada com sucesso!')
         setIsLoading(false)
      } catch (err) {
         const { status } = get(err, 'response', '')
         toast.error('Error ao enviar Foto!')
         if (status === 401) dispatch(actions.loginFailure())
      }
   }
   useEffect(() => {
      const getData = async () => {
         try {
            setIsLoading(true)
            //quando uso entre {} eu recebo reponse.data
            const { data } = await axios.get(`/aluno/${id}`)
            setFoto(get(data, 'Fotos[0].url', ''))
            setIsLoading(false)
         } catch {
            toast.error('Error ao Obter imagem')
            setIsLoading(true)
            history.push('/')
         }
      }
      getData()
   }, [])
   return (
      <Container>
         <Loading isLoading={isLoading} />
         <Title> Foto </Title>
         <Form>
            <label htmlFor="foto">
               {foto ? <img src={foto} alt="Foto" /> : 'Selecionar Foto'}
               <input type="file" id="foto" onChange={handleChange} />
            </label>
         </Form>
      </Container>
   )
}
Foto.propTypes = {
   match: PropTypes.shape({}).isRequired,
}
