import React, { useState } from 'react';
import ListingsContainer from './listings/ListingsContainer';
import FilterContainer from './filters/FilterContainer';

const App = () => {
    const [currentFilters, setCurrentFilters] = useState([]);
    console.log(currentFilters);

    const addFilter = (e) => {
        console.log(e)
        if (currentFilters.indexOf(e.target.dataset.filter) === -1) {
            setCurrentFilters([...currentFilters, e.target.dataset.filter]);
        }
    }

    const removeFilter = (e) => {
        if (currentFilters.indexOf(e.target.dataset.filter) !== -1) {
            const newFilters = currentFilters.filter(element => {
                if (element !== e.target.dataset.filter) {
                    return element;
                }
            })
            setCurrentFilters(newFilters);
        }
    }

    return (
        <div>
            This is the app component
            {currentFilters.length > 0 ? <FilterContainer removeFilter={removeFilter} currentFilters={currentFilters} /> : null}
            <ListingsContainer addFilter={addFilter} currentFilters={currentFilters} />
        </div>
    );
}

export default App;