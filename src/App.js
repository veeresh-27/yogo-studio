import React, { useState } from 'react';
import Button from './components/Button';
import Sections from './components/Sections'
import Services from './components/Services';
import services from './components/data/services.json';
import pricingCards from './components/data/pricing';
import PricingCard from './components/PricingCard';
import Navbar from './components/Navbar';
import { db } from './firebaseConfig'



const App = () => {



    // use state for input - name,emial,message
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const submitData = (e) => {
        e.preventDefault()
        db.collection('message').add({
            fullname: name,
            emialID: email,
            msg: message

        })
        setMessage('')
        setName('')
        setEmail('')
    }
    return ( < div >
        <
        Navbar / >


        <
        Sections name = 'hero' >
        <
        div className = "hero-text" >
        <
        h1 > Breatheasy < /h1> <
        p > Lorem ipsum dolor sit, amet consectetur adipisicing elit.Cumque, dolor. < /p> <
        Button text = 'Join Now'
        type = 'primary' /
        >
        <
        /div> <
        div className = "hero-image" >
        <
        img src = "/assets/images/heroImage.png"
        alt = "Breatheasy" / >
        <
        /div> < /
        Sections > <
        Sections name = 'about' >
        <
        h2 > About Our brand < /h2> <
        p > Lorem ipsum dolor sit amet consectetur, adipisicing elit.Natus voluptates pariatur in repellat facere alias maiores optio eius.Atque, in . < /p> < /
        Sections > <
        Sections name = 'services' > {
            services.map((service, index) => ( <
                Services key = { index }
                title = { service.title }
                description = { service.description }
                image = { service.image }
                rev = { service.rev }
                />
            ))
        } <
        /Sections> <
        Sections name = 'pricing' > {
            pricingCards.map(({ title, list, type, btn }, index) => ( <
                PricingCard key = { index }
                title = { title }
                type = { type }
                list = { list }
                btn = { btn }

                />
            ))
        } <
        /Sections> <
        Sections name = 'contact' >
        <
        div className = "contact-details" >
        <
        h2 > Contact Us < /h2> <
        p > Lorem ipsum, dolor sit amet consectetur adipisicing elit.Adipisci aliquam provident cumque sunt quasi libero laborum unde error quaerat numquam!

        <
        /p> <
        div className = "icons" >
        <
        img className = "icon"
        src = "assets/icons/facebook.png"
        alt = "facebook" / >
        <
        img className = "icon"
        src = "assets/icons/pinterest.png"
        alt = "pinterest" / >
        <
        img className = "icon"
        src = "assets/icons/instagram.png"
        alt = "instagram" / >
        <
        img className = "icon"
        src = "assets/icons/whatsapp.png"
        alt = "whatsapp" / >
        <
        /div> < /
        div > <
        div className = "contact-form" >
        <
        h3 > Contact Us < /h3> <
        form onSubmit = { submitData } >
        <
        input type = "text"
        placeholder = "Full Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        required /
        >
        <
        input type = "email"
        placeholder = "Email Id"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        required /
        >
        <
        textarea placeholder = "Your Message"
        value = { message }
        onChange = {
            (e) => setMessage(e.target.value)
        }
        required >
        <
        /textarea> <
        button type = 'submit'
        onSubmit = { submitData }
        className = "btn btn-primary" > Send Message < /button>


        <
        /form> < /
        div >

        <
        /Sections> < /
        div >
    );
}

export default App;