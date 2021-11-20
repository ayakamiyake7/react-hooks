import React, { useState, useEffect } from 'react'

function EffectHook() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect (() => {
        document.title = `Click: ${count}`
        console.log('render');
    },[count])
    return (
        <div>
            <p>クリック数：{count} 回</p>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={(e => setName(e.target.value))} />
            <button onClick={() => setCount(count + 1)}>Count +</button>
        </div>
    )
}

export default EffectHook