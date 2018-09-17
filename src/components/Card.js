import React from 'react';

const Card = ({id, name, email}) => {

    return (
        <div className="robots tc bg-light-green dib br3 pa3 na2 grow bw2 shadow-5">
            <img alt="Persona" src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;