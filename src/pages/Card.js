import React from 'react'
import {useLocation} from 'react-router-dom'
export default function Card() {
  
  let { state } = useLocation();
  console.log(state && state)
  return (
    <div>
      
    </div>
  )
}
