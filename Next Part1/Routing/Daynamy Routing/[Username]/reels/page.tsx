import React from "react";

const reel = ({ params }: { params: { Username: String } }) => {
    const { Username } = params
    return (
        <>
            <h1>Reel view {Username}</h1>
        </>
    )
}

export default reel