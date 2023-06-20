//area de components do site
import React, { useEffect } from 'react'

import {
   FaHome,
   FaSignInAlt,
   FaUserEdit,
   FaCircle,
   FaPowerOff,
   FaUser,
} from 'react-icons/fa'
import { Nav } from './styled'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/modules/auth/actions'
import history from '../../services/history'

export default function Header() {
   const id = useSelector(state => state.auth.user.id)
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
   const dispatch = useDispatch()

   useEffect(() => {
      if (!id) return
   }, [])
   const handleLogout = e => {
      e.preventDefault()
      dispatch(actions.loginFailure())
      history.push('/')
   }
   return (
      <Nav>
         <Link to="/">
            <FaHome size={24} />
            <br />
            Home
         </Link>
         <Link to="/usuario">
            <FaUser size={24} />
            <br />
            Usuários
         </Link>
         <Link to="/register">
            <FaUserEdit size={30} />
            <br />
            {id ? 'Editar ' : 'Register'}
         </Link>
         {isLoggedIn ? (
            <Link onClick={handleLogout} to="/logout">
               <FaPowerOff size={24} />
               <br />
               Logout
            </Link>
         ) : (
            //se não tiver logado
            <Link to="/login">
               <FaSignInAlt size={24}></FaSignInAlt>
               <br />
               login
            </Link>
         )}
         {isLoggedIn && <FaCircle size={24} color="#66ff33"></FaCircle>}
      </Nav>
   )
}
