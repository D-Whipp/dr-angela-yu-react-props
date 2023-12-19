import React from 'react';

function ContactCard(props) {
    console.log('Props: ', props);

    return (
        <div className="card">
            <div className="top">
                <h2>{props.name}</h2>
                <img
                    src={props.img}
                    alt="avatar_img"
                />
            </div>
            <div className="bottom">
                <p>{props.tel}</p>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default ContactCard;
