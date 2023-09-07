import { useState } from 'react'
import './App.css'
import InputSearch from './components/InputSearch'
import Meanings from './components/Meanings'

function App() {

  const [searchResults, setSearchResults] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearchTerm(searchInput);
    }
  }

  return (
    <div className='max-w-2xl py-0 px-1 my-6 mx-auto'>
      <h1 className="text-3xl font-bold underline mb-10">Word App</h1>
      <InputSearch setSearchInput={setSearchInput} handleKeyDown={handleKeyDown} />
      {searchResults.length > 0 && <Meanings />}
      {console.log("Search Input: ", searchInput)}
      {console.log("Search Term", searchTerm)}
    </div>
  )
}

export default App
