import React, { useContext } from 'react';
import { FiltersContext } from './../Context';

const FilterCard = (props) => {
    const { filters, removeFilter } = useContext(FiltersContext);

    const renderFilters = () => {
        return filters.map(filter => {
            return <button onClick={removeFilter} data-filter={filter} key={filter} className="filter__item">{filter}</button>
        })
    }

    return (
        <div className="filter__container">
            <div className="filter__filters--container">
                {renderFilters()}
            </div>
            <div className="filter__cancel--container">
                { filters[0] ? <button className="filter__cancel">Cancel</button> : "" }
            </div>
        </div>
    );
}

export default FilterCard;