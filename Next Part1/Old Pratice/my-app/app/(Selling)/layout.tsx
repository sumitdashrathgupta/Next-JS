
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <h2>Navbar Selling</h2>
            {children}
            <h2>Footer Selling</h2>
        </>
    )
}

export default Layout