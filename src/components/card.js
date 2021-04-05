import React from 'react';

const Card = ({id,name,email}) => {
    return (
        <div className='bg-light-blue dib br3 pa3 ma2 grow pw2 shadow-5'>
            <img src ={`https://robohash.org/${id}?size=200x200`} alt = "robot"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;