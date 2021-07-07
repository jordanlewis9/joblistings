import React from 'react';

const JobInfo = ({ listing }) => {
    return (
        <div className="job__info--container">
            <img src={listing.logo} className="job__info--picture"/>
            <div className="job__info--listing-container">
                <p className="job__info--company">{listing.company}</p>
                <div className="job__info--extra-container">
                    {listing.new ? <p className="job__info--new job__info--extra">NEW!</p> : null}
                    {listing.featured ? <p className="job__info--featured job__info--extra">FEATURED</p> : null}
                </div>
            </div>
            <div className="job__info--position-container">
                <h3 className="job__info--position">{listing.position}</h3>
            </div>
            <div className="job__info--detail-container">
                <p className="job__info--posted-at">{listing.postedAt}</p>
                &#8226;
                <p className="job__info--contract">{listing.contract}</p>
                &#8226;
                <p className="job__info--location">{listing.location}</p>
            </div>
        </div>
    );
}

export default JobInfo;