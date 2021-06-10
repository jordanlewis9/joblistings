import React from 'react';
import FilterCard from './FilterCard';

// used for if/when the filter exists

const FilterContainer = (props) => {
    return (
        <div>
            <FilterCard removeFilter={props.removeFilter} currentFilters={props.currentFilters} />
        </div>
    );
}

export default FilterContainer;