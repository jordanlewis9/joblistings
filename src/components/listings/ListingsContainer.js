import React, { useContext } from 'react';
import data from "../../../data.json";
import ListingsCard from './ListingsCard';
import { FiltersContext } from './../Context';


// container for all of the listings

const ListingsContainer = () => {
    const { filters } = useContext(FiltersContext);

    const makeFiltersArray = (listing) => {
        let filterArray = [];
        filterArray.push(listing.role, listing.level, ...listing.languages, ...listing.tools);
        return filterArray;
    }

    const renderListings = () => {
        return data.map(listing => {
            const filtersArray = makeFiltersArray(listing);
            let showListing = true;
            for (let i = 0; i < filters.length; i++) {
                const exists = filtersArray.some(entry => entry === filters[i]);
                if (exists) {
                    showListing = true;
                    continue;
                } else {
                    showListing = false;
                    break;
                }
            }
            if (showListing) {
                return (
                    <ListingsCard key={listing.id} listing={listing} filtersArray={filtersArray} />
                )
            } else {
                return null
            }
        })
    }

    return (
        <div className={`listings__container ${ filters.length > 0 ? 'listings__no-top-margin' : ''}`}>
            {renderListings()}
        </div>
    )
}

export default ListingsContainer;