import React from 'react'
import '../public/css/navbar.css'

const Navbar = () => {

    const navSlide = () => {
        //Elements
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
        //Toggle
        burger.addEventListener('click', () => {
            
            nav.classList.toggle('nav-active');
            
            //Animate links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ''
                }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`
                }
            });

            //Animate burger
            burger.classList.toggle('toggle')
        })

    }

    React.useEffect(() => {
        navSlide();
    }, [])

    return (
        <section id="navbar">
            <nav>
                <div className="logo">
                    <h4><a href="/">Market Place</a></h4>
                </div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
