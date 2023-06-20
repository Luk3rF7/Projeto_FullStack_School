// Area de Rotas de url e navegação
import React from 'react'
import { Switch } from 'react-router-dom'

// components
import MyRoute from './MyRoute'
import Home from '../pages/HomePage'
import Aluno from '../pages/Aluno'
import Alunos from '../pages/Alunos'
import Fotos from '../pages/Fotos'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Page404 from '../pages/Page404'

export default function Routes() {
   return (
      <Switch>
         {/* exibirtodos alunos */}
         <MyRoute exact path="/" component={Home} isClosed={false} />
         <MyRoute exact path="/usuario" component={Alunos} isClosed={false} />
         {/* editar aluno */}
         <MyRoute exact path="/aluno/:id/edit" component={Aluno} isClosed />
         <MyRoute exact path="/aluno" component={Aluno} isClosed />
         {/* recebe foto por id: */}
         <MyRoute exact path="/fotos/:id" component={Fotos} isClosed />
         <MyRoute exact path="/login/" component={Login} isClosed={false} />
         <MyRoute
            exact
            path="/register/"
            component={Register}
            isClosed={false}
         />
         <MyRoute path="*" component={Page404} />
      </Switch>
   )
}
