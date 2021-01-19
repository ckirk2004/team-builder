import React from 'react';

export default function Team(props) {
    const { details } = props

    if (!details) {
        return <h2>Loading Details... </h2>
    }

    return(
        <div className='team-container'>
            <h3>{details.username}</h3>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>

    )
}