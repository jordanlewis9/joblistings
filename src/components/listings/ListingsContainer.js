import React, { useEffect } from 'react';
import data from "../../../data.json";
import ListingsCard from './ListingsCard';


// container for all of the listings

const ListingsContainer = (props) => {
    const makeFiltersArray = (listing) => {
        let filterArray = [];
        filterArray.push(listing.role, listing.level, ...listing.languages, ...listing.tools);
        return filterArray;
    }

    const renderListings = () => {
        return data.map(listing => {
            const filtersArray = makeFiltersArray(listing);
            let showListing = true;
            for (let i = 0; i < props.currentFilters.length; i++) {
                const exists = filtersArray.some(entry => entry === props.currentFilters[i]);
                if (exists) {
                    showListing = true;
                    break;
                } else {
                    showListing = false;
                    continue;
                }
            }
            if (showListing) {
                return (
                    <ListingsCard key={listing.id} listing={listing} addFilter={props.addFilter} filtersArray={filtersArray} />
                )
            } else {
                return null
            }
        })
    }

    return (
        <div>
            {renderListings()}
        </div>
    )
}

export default ListingsContainer;