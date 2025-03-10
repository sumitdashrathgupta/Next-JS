import React from "react";

const user = ({ params }: { params: { username: string } }) => {
    let { username } = params
    return (
        <>
            <h1>Username : {username}</h1>
        </>
    )
}

export default user