import React, { useContext } from 'react';
import{ FiltersContext } from './../Context';

const JobFilters = (props) => {
    const { addFilter } = useContext(FiltersContext);

    const renderFilters = () => {
        return props.filtersArray.map(filter => {
            return <button onClick={addFilter} data-filter={filter} key={filter}>{filter}</button>
        })
    }

    return (
        <div>
            {renderFilters()}
        </div>
    )
}

export default JobFilters;