
import React from "react";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <h2>Buying Navbar</h2>
            {children}
            <h2>Buying Footer</h2>
        </>
    )
}

export default Layout