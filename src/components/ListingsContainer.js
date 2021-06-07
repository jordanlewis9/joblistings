import React, { useEffect } from 'react';


// container for all of the listings

const ListingsContainer = () => {
    useEffect(() => {
        fetch("../data.json", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }, [])

    return (
        <div>
            This is a list
        </div>
    )
}

export default ListingsContainer;