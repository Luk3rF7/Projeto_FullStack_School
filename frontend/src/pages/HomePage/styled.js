import styled from 'styled-components'
import * as color from '../../config/color'
export const ContainerError = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 100%;
   height: 90vh;
   background: #eee;
   div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 1100px;
      height: 600px;
      border: 1px solid ${color.primaryColor};
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 1);
   }
   h1 {
      text-align: center;
      margin-bottom: 20px;
      font-family: 'Josefin Sans', sans-serif;
      color: ${color.primaryColor};
      font-size: 45px;
   }
   img {
      align-items: center;
      width: 65%;
      border: 1px solid #eee;
      border-radius: 10px;
      box-shadow: 0 0 2px rgba(0, 0, 0, 1);
   }
   img:hover {
      border: 1px solid ${color.primaryColor};
   }
`
export const PictureError = styled.div``
