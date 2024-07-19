import React from 'react'

const BoxColor = ({ color, value }) => {
  const matches = color === value
  return (
    <div className={`box ${color}`} style={{ backgroundColor: matches ? color : 'transparent' }}>
      {matches ? `Yes,I'm ${color} color` : `I'm not a ${value} color`}
    </div>
  )
}

export default BoxColor 
