import React, { useRef } from 'react'
import BoxColor from './BoxColor'

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive']

const MyFormChallenge = () => {
  const inputRef = useRef()

  const handleInputChange = () => {
    const inputValue = inputRef.current.value.toLowerCase()
    document.querySelectorAll('.box').forEach(box => {
      const color = box.classList[1]
      if (color === inputValue) {
        box.style.backgroundColor = color
        box.textContent = `Yes,I'm ${color} color`
      } else {
        box.style.backgroundColor = 'transparent'
        box.textContent = `I'm not a ${inputValue} color`
      }
    })
  }

  return (
    <div>
      <input type="text" ref={inputRef} onChange={handleInputChange} placeholder="Enter a color" />
      <div className="container">
        {colors.map((color) => (
          <BoxColor 
            key={color}
            color={color}
            inputColor={inputRef.current?.value.toLowerCase() || ''}
          />
        ))}
      </div>
    </div>
  )
}

export default MyFormChallenge
