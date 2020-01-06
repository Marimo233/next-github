import {cloneElement } from 'react'
const style={
  width:'100%',
  maxWidth:1200,
  marginLeft:'auto',
  marginRight:'auto',
  paddingLeft:20,
  paddingRight:20
}
export const Container=({renderer,children})=>{
  const newElement=cloneElement(renderer,{
    style:Object.assign({},renderer.props.style,style),
    children
  })
  return newElement
}