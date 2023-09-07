import { useState } from 'react'
import './App.css'
import InputSearch from './components/InputSearch'
import Meanings from './components/Meanings'

function App() {

  const [searchResults, setSearchResults] = useState([])

  return (
    <div className='max-w-2xl py-0 px-1 my-6 mx-auto'>
      <h1 className="text-3xl font-bold underline mb-10">Word App</h1>
      <InputSearch />
      {searchResults.length > 0 && <Meanings />}
    </div>
  )
}

export default App
