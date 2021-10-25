import React, { useState } from 'react'
import navLinks from './data/navLinks.json'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const toggleNav = () => setNavOpen(!navOpen)
    return ( <
        div >
        <
        nav className = { navOpen ? 'navbar open' : 'navbar' } >
        <
        div className = "logo" >
        <
        a href = "#home" > Breatheasy < /a> < /
        div > <
        div className = "nav-links" >
        <
        ul > {
            navLinks.map(({ title, link }) => ( <
                a href = { link }
                className = "nav-link" >
                <
                li > { title } <
                /li> < /
                a >
            ))
        }

        <
        /ul> </
        div > <
        div className = "burger"
        onClick = { toggleNav } >
        <
        i className = "fa fa-bars" > < /i> </div >
        <
        /nav> </div >
    )
}

export default Navbar;