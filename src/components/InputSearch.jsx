import PropTypes from 'prop-types'

export default function InputSearch({ setSearchInput, handleKeyDown }) {
    return (
        <div className="relative">
            <svg className="w-8 h-8 text-gray-700 absolute top-3.5 left-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input type="search" 
            placeholder="search" 
            className="text-xl border-b-2 w-full py-3 px-10 focus:outline-none" 
            onChange={e => setSearchInput(e.target.value)} 
            onKeyDown={handleKeyDown}
            />
        </div>
    )
}

InputSearch.propTypes = {
    setSearchInput: PropTypes.func.isRequired,
    handleKeyDown: PropTypes.func.isRequired,
    
}