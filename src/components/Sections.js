import React from 'react'

const Sections = ({ name, children }) => {
    return ( < div className = { name }
        id = { name } > { children } <
        /div>
    )
}

export default Sections;