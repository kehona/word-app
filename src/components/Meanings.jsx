
import PropTypes from 'prop-types'

import Meaning from "./Meaning"

export default function Meanings({ meanings }) {
    return (
        <div className="mt-4">
            {meanings.map((meaning, index) => <Meaning key={index} meaning={meaning} />)}

        </div>
    )
}

Meanings.propTypes = {
    meanings: PropTypes.array.isRequired
}
