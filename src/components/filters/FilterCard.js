import React from 'react';

const FilterCard = (props) => {
    const renderFilters = () => {
        return props.currentFilters.map(filter => {
            return <button onClick={props.removeFilter} data-filter={filter} key={filter}>{filter}</button>
        })
    }
    return (
        <div>
            {renderFilters()}
        </div>
    );
}

export default FilterCard;