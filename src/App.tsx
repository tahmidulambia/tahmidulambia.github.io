import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.85_0.2_250)]">
        <h1 className="text-4xl font-bold text-white">
          Tailwind v4 via Vite plugin is working!
        </h1>
      </div>
    </>
  )
}

export default App
