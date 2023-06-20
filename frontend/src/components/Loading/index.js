import React from 'react'
import PropTypes from 'prop-types'
import { ContainerDiv, LoadingDiv } from './styled'
export default function Loading({ isLoading }) {
   if (!isLoading) return <></>
   return (
      <ContainerDiv>
         <LoadingDiv>
            <div className="loading">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>
            <div className="text_loading">
               <div>L</div>
               <div>O</div>
               <div>A</div>
               <div>D</div>
               <div>I</div>
               <div>N</div>
               <div>G</div>
               <div>.</div>
               <div>.</div>
               <div>.</div>
            </div>
         </LoadingDiv>
      </ContainerDiv>
   )
}
Loading.defaultProps = {
   isLoading: false,
}

Loading.propTypes = {
   isLoading: PropTypes.bool,
}
