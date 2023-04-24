import React from 'react'

const Navbar = () => {
    const showDropdownMenu = (e) => {
        let dropdownLink = e.target.parentElement;
        if (dropdownLink.getAttribute('dropdown-menu-visible') === 'true') {
            dropdownLink.setAttribute('dropdown-menu-visible', 'false')
            dropdownLink.style.color = 'var(--clr-gray)'
        } else if (dropdownLink.getAttribute('dropdown-menu-visible') === 'false') {
            dropdownLink.setAttribute('dropdown-menu-visible', 'true');
            dropdownLink.style.color = 'black'
        } else {
            console.log('Why did you change my code');
        }
    }


    const toggleMobMenu = () => {
        let primaryNav = document.getElementById('primaryNav');
        let bg = document.querySelector('.bg')
        bg.classList.toggle('menu-is-active')
        primaryNav.style.display = 'flex'
        setTimeout(() => {
            let showValue = primaryNav.getAttribute('is-mobile-menu');

            if (showValue === 'true') {
                primaryNav.setAttribute('is-mobile-menu', 'false')

            } else if (showValue === 'false') {
                primaryNav.setAttribute('is-mobile-menu', 'true')
            } else {
                console.log('dont change my code');
            }

        }, 0.00001);

    }


    return (
        <nav className='navbar nav flex'>
            <section className='nav__logo'>
                <img src='/images/logo.svg' />
            </section>
            <section id='primaryNav' is-mobile-menu='false' className='primary-navigation flex'>
                <ul className='nav__menu flex'>
                    <li dropdown-menu-visible='false' id='features' className='pos-rel'>
                        <a href='#' className='nav__link nav__link-dropdown capitalize'>
                            Features
                        </a>

                        <button onClick={showDropdownMenu} className='dropdown-btn'>
                            <a href='#' className='pos-rel sr-only'>
                                dropdown button
                            </a>
                        </button>

                        <div className='dropdown-navbar pos-abs'>
                            <ul className='dropdown-menu grid grid-col-2'>
                                <li>
                                    <img src='/images/icon-todo.svg' />
                                </li>

                                <li >
                                    <a href='#' className='capitalize dropdown-link'>todo list</a>
                                </li>
                                <li>
                                    <img src='/images/icon-calendar.svg' />
                                </li>

                                <li >
                                    <a href='#' className='capitalize dropdown-link'>calendar</a>
                                </li>
                                <li>
                                    <img src='/images/icon-reminders.svg' />
                                </li>

                                <li >
                                    <a href='#' className='capitalize dropdown-link'>reminders</a>
                                </li>
                                <li>
                                    <img src='/images/icon-planning.svg' />
                                </li>

                                <li >
                                    <a href='#' className='capitalize dropdown-link'>planning</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li dropdown-menu-visible='false' id='company' className='pos-rel'>
                        <a href='#' className='nav__link nav__link-dropdown capitalize'>
                            company
                        </a>
                        <button onClick={showDropdownMenu} className='dropdown-btn'>
                            <a href='#' className='pos-rel sr-only'>
                                dropdown button
                            </a>
                        </button>
                        <div className='dropdown-navbar pos-abs'>
                            <ul className='flex flex-col dropdown-menu flex-gap-1'>
                                <li>
                                    <a href='#' className='capitalize dropdown-link'>
                                        history
                                    </a>
                                </li>

                                <li>
                                    <a href='#' className='capitalize dropdown-link '>
                                        <pre>our team</pre>
                                    </a>
                                </li>

                                <li>
                                    <a href='#' className='capitalize dropdown-link'>
                                        blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href='#' className='nav__link capitalize'>
                            careers
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav__link capitalize'>
                            about
                        </a>
                    </li>
                </ul>



                <div className='cta-container flex'>
                    <a href='#' className='cta-link'>
                        <btn className='cta-btn'>
                            Login
                        </btn>
                    </a>

                    <a href='#' className='cta-link'>
                        <btn className='cta-btn'>
                            Register
                        </btn>
                    </a>
                </div>
            </section>

            <button onClick={toggleMobMenu} className='menu-btn'>
                <span className='sr-only'>
                    menu
                </span>
            </button>

        </nav>
    )
}

export default Navbar
