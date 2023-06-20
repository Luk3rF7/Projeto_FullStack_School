import styled from 'styled-components'
import * as color from '../../config/color'

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   margin-top: 20px;

   label {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
   }

   input {
      height: 40px;
      font-size: 18px;
      border: 1px solid #ddd;
      padding: 0 10px;
      border-radius: 3px;
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 1);
      margin-top: 4px;

      &:focus {
         border-bottom: 2px solid ${color.primaryColor};
      }
   }
`

export const LinkRegister = styled.a`
   display: flex;
   gap: 10px;
   margin-bottom: 12px;
   flex-direction: row;
   background: #fff;
   color: ${color.primaryColor};

   p {
      color: black;
      margin-bottom: 10px;
   }

   &:hover {
      color: black;
   }
`
