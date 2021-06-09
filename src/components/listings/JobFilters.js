import React from 'react';

const JobFilters = (props) => {

    const renderFilters = () => {
        return props.filtersArray.map(filter => {
            return <button onClick={props.addFilter} data-filter={filter} key={filter}>{filter}</button>
        })
    }

    return (
        <div>
            {renderFilters()}
        </div>
    )
}

export default JobFilters;