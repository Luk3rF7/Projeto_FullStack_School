import React from 'react'
import { ContainerError } from './styled'
import FotoSchool from './img/escola.avif'
export default function Home() {
   return (
      <ContainerError>
         <h1>Projeto Escola</h1>
         <div>
            <img src={FotoSchool} alt="homePage" />
         </div>
      </ContainerError>
   )
}
