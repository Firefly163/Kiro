import React from "react";
import { Link } from "react-router-dom";
import dateFromTimestamp from "../helpers/time-formatters";
import { numberWithCommas } from "../helpers/number-formatters";
import { toSingular } from "../helpers/name-formatters";


const RentalMapCard = (props) => {

  const date = dateFromTimestamp(props.data.date_available);

  return(
      <Link to={"/rentals/" + props.id}>
        <div className="listing-map-card">
          <div className="listing-map-img-container">
            { props.data.photos[0] ?
              <img alt="Rental Property" src={props.data.photos[0]} />
              : <img alt="Not Available" src="/images/no-image.jpg" />
            }
          </div>
          <div className="listing-map-info-container">
            <h4>{props.data.street}, {props.data.city}</h4>
            <div>{props.data.bedrooms} {toSingular("Bedrooms", props.data.bedrooms)}</div>
            <div>{props.data.bathrooms} {toSingular("Bathrooms", props.data.bathrooms)}</div>
            <div>${numberWithCommas(props.data.price)} / Month</div>
            <div>Available {date}</div>
          </div>
        </div>
      </Link>
    )
  };

export default RentalMapCard
