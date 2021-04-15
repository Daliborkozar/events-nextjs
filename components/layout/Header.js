import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div>
                <Link href='/'>KLUB FEST logo</Link>
            </div>
            <nav>
                <ul>
                    <li>Pocetna</li>
                    <li>O name</li>
                    <li>Program</li>
                    <li>Events</li>
                    <li>Blog</li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header
