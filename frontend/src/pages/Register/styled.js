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

  /*  button {
      background: ${color.primaryColor};
      color: #fff;
   } */
`
