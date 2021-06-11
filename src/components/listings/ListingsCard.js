import React from 'react';
import JobInfo from './JobInfo';
import JobFilters from './JobFilters';

const ListingsCard = (props) => {
    return (
        <div className="listings__card">
            <JobInfo listing={props.listing} />
            <hr className="listings__card--hr"/>
            <JobFilters filtersArray={props.filtersArray} role={props.listing.role} languages={props.listing.languages} level={props.listing.level} tools={props.listing.tools} addFilter={props.addFilter}/>
        </div>
    );
}

export default ListingsCard;