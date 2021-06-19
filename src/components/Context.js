import React, { useState, createContext } from 'react';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState([]);

    const addFilter = (e) => {
        if (filters.indexOf(e.target.dataset.filter) === -1) {
            setFilters([...filters, e.target.dataset.filter]);
        }
        console.log(filters)
    }

    const removeFilter = (e) => {
        if (filters.indexOf(e.target.dataset.filter) !== -1) {
            const newFilters = filters.filter(element => {
                if (element !== e.target.dataset.filter) {
                    return element;
                }
            })
            setFilters(newFilters);
        }
    }

    const value = {
        filters,
        addFilter,
        removeFilter
    }

    return (
        <FiltersContext.Provider value={value}>
            {children}
        </FiltersContext.Provider>
    )
}