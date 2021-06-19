import React from 'react';

const JobInfo = ({ listing }) => {
    return (
        <div>
            <img src='./public/images/shortly.svg' />
            <p>{listing.company}</p>
            {listing.new ? <p>NEW!</p> : null}
            {listing.featured ? <p>FEATURED</p> : null}
            <h3>{listing.position}</h3>
            <p>{listing.postedAt}</p>
            &#8226;
            <p>{listing.contract}</p>
            &#8226;
            <p>{listing.location}</p>
        </div>
    );
}

export default JobInfo;