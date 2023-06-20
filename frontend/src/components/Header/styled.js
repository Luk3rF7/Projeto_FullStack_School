import styled from 'styled-components'
import { primaryColor } from '../../config/color'

export const Nav = styled.nav`
   background: ${primaryColor};
   display: flex;
   padding: 10px;
   align-items: center;
   justify-content: space-around;
   text-align: center;

   a {
      color: #fff;
      margin: 0 10px 0 0;
      font-weight: bold;
      gap: 5px;
   }
`
