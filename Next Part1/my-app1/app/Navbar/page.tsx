import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <header>
                <div className="logo">
                    <Link href={"/"}> home</Link>
                </div>
                <nav className="navbar">
                    <Link href={"/about"}>About</Link>
                    <Link href={"/service"}>Service</Link>
                </nav>
            </header>
        </div>
    )
}

export default page
