import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as color from '../../config/color'
export const AlunoContainer = styled.div`
   margin-top: 20px;
   div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 0;
   }

   div + div {
      border-top: 1px solid #eee;
   }
`
export const ProfilePicture = styled.div`
   img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
   }
`
export const NovoAluno = styled(Link)`
   display: block;
   width: 24%;
   margin-top: 5px;
   margin-bottom: 5px;
   padding: 10px;
   border: 1px solid rgba(0, 0, 0, 1);
   border-radius: 15px;
   background: ${color.primaryColor};
   color: #fff;

   &:hover {
      justify-content: center;
      align-items: center;
      width: 29%;
      border: 1px solid ${color.primaryColor};
      background: #fff;
      color: ${color.primaryColor};
      font-weight: 500;
      transition: 0.3s ease-in-out;
   }
`
