import React from 'react';
import marker from '../../assets/icons/marker.svg'
import clock from '../../assets/icons/clock.svg'
import phone from '../../assets/icons/phone.svg'
import Card from '../Card/Card';

const Cards = () => {
    const cardData = [
        {
            id:1,
            title: "Opening Hours",
            description: "09:00AM - 06:00PM",
            logo: clock,
            bgClass: 'bg-primary'

        },
        {
            id:2,
            title: "Visit our location",
            description: "Brooklyn, NY 10036, United States",
            logo: marker ,
            bgClass: 'bg-secondary'

        },
        {
            id:3,
            title: "Contact us now",
            description: "+000 123 456789",
            logo: phone ,
            bgClass: 'bg-primary'

        },
    ]
    return (
        <div className='grid grid-cols-1 gap-6 mx-6 my-6 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card => <Card key={card.id} card={card}></Card>)
            }
           

            
        </div>
    );
};

export default Cards;