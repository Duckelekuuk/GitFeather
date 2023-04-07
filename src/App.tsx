import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className='App'>
      <div>
        <a href='https://github.com/electron-vite/electron-vite-react' target='_blank'>
          <img src='./electron-vite.svg' className='logo' alt='Electron + Vite logo' />
        </a>
      </div>
      <h1>Electron + Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code >src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
