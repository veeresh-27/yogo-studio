import React from 'react'

const Services = ({ title, description, image, rev }) => {
    return ( <
        div className = { rev ? 'service reverse' : 'service' } >
        <
        div className = "service-img" >
        <
        img src = { image }
        alt = { title }
        /> <
        /div> <
        div className = "service-info" >
        <
        h2 > { title } < /h2>

        <
        p > { description } <
        /p> <
        /div> <
        /div>

    )
}

export default Services;