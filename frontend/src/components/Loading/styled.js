import styled from 'styled-components'
import * as color from '../../config/color'
export const ContainerDiv = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   z-index: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   font-size: 30px;
   background: rgba(0, 0, 0, 0.8);
`
export const LoadingDiv = styled.div`
   .loading {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 80px;
      height: 80px;
      margin-bottom: 10px;
   }
   .loading div {
      display: inline-block;
      position: absolute;
      width: 16px;
      background: #fff;
      border: 1px solid #0000;
      animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
   }
   .loading div:nth-child(1) {
      transition: 5s ease-in;
      left: -16px;
      background: ${color.primaryColor};
      animation-delay: -0.24s;
   }
   .loading div:nth-child(2) {
      transition: 5s ease-in;
      background: ${color.primaryColor};
      left: 8px;
      animation-delay: -0.12s;
   }
   .loading div:nth-child(3) {
      background: ${color.primaryColor};
      transition: 5s ease-in;
      left: 32px;
      animation-delay: 0;
   }
   .loading div:nth-child(4) {
      background: ${color.primaryColor};
      transition: 5s ease-in;
      left: 56px;
      animation-delay: 0.12s;
   }

   //loagin carregando
   .text_loading {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 80px;
      height: 80px;
   }
   .text_loading div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
   }
   .text_loading div:nth-child(1) {
      transition: 7s ease-in;
      left: -54px;
      animation-delay: -0.24s;
   }
   .text_loading div:nth-child(2) {
      transition: 7s ease-in;
      left: -30px;
      animation-delay: -0.12s;
   }
   .text_loading div:nth-child(3) {
      transition: 7s ease-in;
      left: 0px;
      animation-delay: 0;
   }
   .text_loading div:nth-child(4) {
      transition: 7s ease-in;
      left: 30px;
      animation-delay: 0.12s;
   }
   .text_loading div:nth-child(5) {
      transition: 7s ease-in;
      left: 60px;
      animation-delay: 0.24s;
   }
   .text_loading div:nth-child(6) {
      transition: 7s ease-in;
      left: 76px;
      animation-delay: 0.48s;
   }
   .text_loading div:nth-child(7) {
      transition: 7s ease-in;
      left: 108px;
      animation-delay: 0.61s;
   }
   .text_loading div:nth-child(8) {
      transition: 7s ease-in;
      left: 130px;
      color: ${color.primaryColor};
      animation-delay: 0.72s;
   }
   .text_loading div:nth-child(9) {
      transition: 7s ease-in;
      left: 140px;
      animation-delay: 0.84s;
      color: ${color.primaryColor};
   }
   .text_loading div:nth-child(10) {
      transition: 7s ease-in;
      color: ${color.primaryColor};
      left: 150px;
      animation-delay: 0.96s;
   }
   @keyframes loading {
      0% {
         top: 8px;
         height: 64px;
      }
      50%,
      100% {
         top: 24px;
         height: 32px;
      }
   }
`
