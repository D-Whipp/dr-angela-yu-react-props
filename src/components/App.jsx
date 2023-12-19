import React from 'react';

import ContactCard from './ContactCard';

import '../styles.css';

function App() {
    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <ContactCard
                name="Beyonce"
                img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
                tel="+123 456 7890"
                email="b@beyonce.com"
            />
            <ContactCard
                name="Jack Bauer"
                img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
                tel="+098 765 4321"
            />
            <ContactCard
                name="Chuch Norris"
                img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
                phone="+233 544 5423"
                email="gmail@chuchnorris.com"
            />
        </div>
    );
}

export default App;
