import React, { useState } from 'react'

const testHandler = async (name) => {
    fetch('/.netlify/function/verity-user.js',
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        })
        .then(res => res.json)
        .then(data => console.log(data))

}
const Test = () => {
    const [name, setName] = useState('')
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '5px', marginTop: '20px' }}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button style={{ width: 'maxContent', padding: '5px 10px' }} onClick={() => TestHandler(name)}>Click for console log</button>
        </div>
    )
}

export default Test