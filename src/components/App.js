import React, { useContext } from 'react';
import ListingsContainer from './listings/ListingsContainer';
import FilterContainer from './filters/FilterContainer';
import { FiltersContext, FiltersProvider } from './Context';

const App = () => {
    const { filters } = useContext(FiltersContext);
    // const [currentFilters, setCurrentFilters] = useState([]);

    // const addFilter = (e) => {
    //     console.log(e)
    //     if (currentFilters.indexOf(e.target.dataset.filter) === -1) {
    //         setCurrentFilters([...currentFilters, e.target.dataset.filter]);
    //     }
    // }

    // const removeFilter = (e) => {
    //     if (currentFilters.indexOf(e.target.dataset.filter) !== -1) {
    //         const newFilters = currentFilters.filter(element => {
    //             if (element !== e.target.dataset.filter) {
    //                 return element;
    //             }
    //         })
    //         setCurrentFilters(newFilters);
    //     }
    // }

    return (
        <FiltersProvider>
            <div>
                {filters.length > 0 ? <FilterContainer /> : null}
                <ListingsContainer />
            </div>
        </FiltersProvider>
    );
}

export default App;