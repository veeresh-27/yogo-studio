import React from 'react'

const button = ({ text, type, link }) => {
    return ( <
        div className = { `btn btn-${type}` } > { text }

        <
        /div>
    )
}

export default button;