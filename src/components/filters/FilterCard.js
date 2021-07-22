import React, { useContext } from 'react';
import { FiltersContext } from './../Context';

const FilterCard = (props) => {
    const { filters, removeFilter, removeAllFilters } = useContext(FiltersContext);

    const renderFilters = () => {
        return filters.map(filter => {
            return (
                <button onClick={removeFilter} data-filter={filter} key={filter} className="filter__item">
                    <p className="filter__item--text">
                        {filter}
                    </p>
                    <div className="filter__item--close">
                        <img src="./images/icon-remove.svg" className="filter__item--close-img"></img>
                    </div>
                </button>
            )
        })
    }

    return (
        <div className="filter__container">
            <div className="filter__filters--container">
                {renderFilters()}
            </div>
            <div className="filter__cancel--container">
                { filters[0] ? <button onClick={removeAllFilters} className="filter__clear">Clear</button> : "" }
            </div>
        </div>
    );
}

export default FilterCard;