import React, { useState, useEffect } from 'react'

function MouseEventEffect() {
    console.log('call MouseEventEffect');

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

const getMousePosition = e => {
    setX(e.clientX)
    setY(e.clientY)
}

useEffect(() => {
    console.log('call use');
    window.addEventListener('mousemove', getMousePosition)
    return () => {
        window.removeEventListener('mousemove', getMousePosition)
    }
},[])

    return (
        <div>
            <ul>
                <li>x: {x}</li>
                <li>y: {y}</li>
            </ul>
        </div>
    )
}

export default MouseEventEffect
