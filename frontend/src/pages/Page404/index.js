// area responsavel por renderizar pagina
import React from 'react'
import errorPage from './img/error.jpg'
import { ContainerError, PictureError } from './styled'
export default function Page404() {
   return (
      <ContainerError>
         <PictureError>
            <img src={errorPage}></img>
         </PictureError>
      </ContainerError>
   )
}
