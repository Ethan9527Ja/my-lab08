import { useState } from 'react'
import './component&css/css/App.css'
import Header from './component&css/component/Header'
import Note from './component&css/component/Note'
import Notes from './component&css/component/Notes'
import CreateNote from './component&css/component/CreateNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Header />
      <Notes />
    </div>
  )
}

export default App
