import React from 'react';

const JobInfo = ({ listing }) => {
    return (
        <div>
            <p>{listing.company}</p>
            <p>{listing.postedAt}</p>
        </div>
    );
}

export default JobInfo;