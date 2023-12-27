import React from 'react';
import '../styles.css';

import ContactCard from './ContactCard';
import Avatar from './Avatar';
import contacts from '../contacts.js';

function createCard(contact) {
    // console.log('Contact: ', contact);
    return (
        <ContactCard
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    );
}

function App() {
    const profileImageURL =
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f27a6a5a-5295-4568-9576-003ede78276f/dfosz0t-b6974a0f-e9b0-4d34-b05b-fd7f71c38b0a.jpg/v1/fill/w_894,h_894,q_70,strp/stormblessed_by_mavdeckard_dfosz0t-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YyN2E2YTVhLTUyOTUtNDU2OC05NTc2LTAwM2VkZTc4Mjc2ZlwvZGZvc3owdC1iNjk3NGEwZi1lOWIwLTRkMzQtYjA1Yi1mZDdmNzFjMzhiMGEuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.O6z-4X48hMpdt28JZqaWKafjwJe93TUbMyUQoxakTNE';
    // createCard(contacts);
    // console.log('Contacts: ', contacts);

    return (
        <div>
            <h1 className="heading">My Contacts</h1>
            <Avatar img={profileImageURL} />
            {contacts.map(createCard)}
        </div>
    );
}

export default App;

// <ContactCard
//     name="Beyonce"
//     img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
//     tel="+123 456 7890"
//     email="b@beyonce.com"
// />
// <ContactCard
//     name="Jack Bauer"
//     img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
//     tel="+098 765 4321"
//     email="jb@com.gmail"
// />
// <ContactCard
//     name="Chuch Norris"
//     img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
//     tel="+233 544 5423"
//     email="gmail@chuchnorris.com"
// />
