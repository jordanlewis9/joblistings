import React, { useState, createContext } from 'react';

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState([]);

    const addFilter = (e) => {
        if (filters.indexOf(e.target.dataset.filter) === -1) {
            setFilters([...filters, e.target.dataset.filter]);
        }
    }

    const removeFilter = (e) => {
        if (e.target.classList.contains("filter__item")) {
            return null;
        }
        const button = e.target.closest(".filter__item");
        if (filters.indexOf(button.dataset.filter) !== -1) {
            const newFilters = filters.filter(element => {
                if (element !== button.dataset.filter) {
                    return element;
                }
            })
            setFilters(newFilters);
        }
    }

    const removeAllFilters = (e) => {
        setFilters([]);
    }

    const value = {
        filters,
        addFilter,
        removeFilter,
        removeAllFilters
    }

    return (
        <FiltersContext.Provider value={value}>
            {children}
        </FiltersContext.Provider>
    )
}