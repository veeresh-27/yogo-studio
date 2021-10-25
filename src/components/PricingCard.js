import React from 'react'
import Button from './Button'


const PricingCard = ({ title, list, type, btn }) => {
    return ( <
        div className = { type == 'popular' ? "card popular" : "card" } >
        <
        h3 > { title } < /h3> { list } <
        Button type = { btn.type }
        text = { btn.text }
        /> </div >
    )
}

export default PricingCard