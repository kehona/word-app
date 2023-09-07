
import PropTypes from 'prop-types'

import Definition from "./Definition"

export default function Meaning({ meaning }) {
    return (
        <div className="bg-white-50 shadow-md border p-5">
            <h1 className="text-blue-500">Parts of Speech: <span className="font-semibold text-xl">{meaning.partOfSpeech}</span> </h1>
            <h1 className="mt-4 text-lg font-bold">Definitions</h1>
            {meaning.definitions.map((definition, index) => <Definition key={index} index={index} definition={definition} />)}

        </div>
    )
}

Meaning.propTypes = {
    meaning: PropTypes.object.isRequired
}
