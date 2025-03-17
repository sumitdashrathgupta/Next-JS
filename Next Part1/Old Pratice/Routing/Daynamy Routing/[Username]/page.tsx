import React from 'react'

const chanel = ({ params }: { params: { Username: String } }) => {
    const { Username } = params
    return (
        <div>
            <h1>Chanel Name Is {Username}</h1>
        </div>
    )
}

export default chanel
