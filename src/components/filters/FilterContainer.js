import React from 'react';
import FilterCard from './FilterCard';
import { FiltersProvider } from '../Context';

// used for if/when the filter exists

const FilterContainer = (props) => {
    return (
        <FiltersProvider>
            <div>
                <FilterCard />
            </div>
        </FiltersProvider>
    );
}

export default FilterContainer;