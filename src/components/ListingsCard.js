import React from 'react';

const ListingsCard = ({ listing }) => {
    console.log(listing);
    return (
        <div>
            <p>working</p>
            <p>{listing.id}</p>
            <p>{listing.company}</p>
            <p>{listing.role}</p>
        </div>
    );
}

export default ListingsCard;