import React from 'react';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from 'commonComponents/Input';


function App() {
  const [count, setCount] = useState<number | string >(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <i className="moon-cx moon-cx-closed-lock"/>
      <Input
        value={count}
        onChange={(value: string | number | undefined ) => setCount(value as string)}
        placeholder="Input your text"
        formatter='text'
      />
    </>
  )
}

export default App
