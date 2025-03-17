import React from "react";

const post = ({ params }: { params: { postID: number } }) => {
    let { postID } = params
    return (
        <>
            <h1>PostId: {postID}</h1>
        </>
    )
}

export default post