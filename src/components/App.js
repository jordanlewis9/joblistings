import React, { useContext } from 'react';
import ListingsContainer from './listings/ListingsContainer';
import FilterContainer from './filters/FilterContainer';
import { FiltersContext } from './Context';

const App = (props) => {
    const { filters } = useContext(FiltersContext);

    return (
            <div className="container">
                {filters.length > 0 ? <FilterContainer /> : null}
                <ListingsContainer />
            </div>
    );
}

export default App;