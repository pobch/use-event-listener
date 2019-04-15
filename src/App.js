import React, { useState } from 'react'
import MousePage from './MousePage'

const DummyPage = () => {
  return <div>Dummy</div>
}

const App = () => {
  const [isDummy, setIsDummy] = useState(true)

  return (
    <div>
      <nav>
        <ul>
          <li
            onClick={() => {
              setIsDummy(true)
            }}
          >
            Dummy
          </li>
          <li
            onClick={() => {
              setIsDummy(false)
            }}
          >
            Mouse
          </li>
        </ul>
      </nav>
      <section>{isDummy ? <DummyPage /> : <MousePage />}</section>
    </div>
  )
}

export default App
