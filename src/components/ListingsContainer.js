import React, { useEffect } from 'react';
import data from "./../../data.json";
import ListingsCard from './ListingsCard';


// container for all of the listings

const ListingsContainer = (props) => {
    const renderListings = () => {
        return data.map(listing => {
            return (
                <ListingsCard key={listing.id} listing={listing} />
            )
        })
    }

    return (
        <div>
            {renderListings()}
        </div>
    )
}

export default ListingsContainer;