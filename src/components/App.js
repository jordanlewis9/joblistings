import React, { useContext } from 'react';
import ListingsContainer from './listings/ListingsContainer';
import FilterCard from './filters/FilterCard';
import { FiltersContext } from './Context';

const App = (props) => {
    const { filters } = useContext(FiltersContext);

    return (
            <div className="container">
                {filters.length > 0 ? <FilterCard /> : null}
                <ListingsContainer />
            </div>
    );
}

export default App;