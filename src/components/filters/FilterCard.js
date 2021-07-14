import React, { useContext } from 'react';
import { FiltersContext } from './../Context';

const FilterCard = (props) => {
    const { filters, removeFilter } = useContext(FiltersContext);

    const renderFilters = () => {
        return filters.map(filter => {
            console.log(filter);
            return <button onClick={removeFilter} data-filter={filter} key={filter} className="filter__item">{filter}</button>
        })
    }

    return (
        <div className="filter__container">
            {renderFilters()}
        </div>
    );
}

export default FilterCard;