import React, { Component } from "react";
import { getSingleListing } from "../ajax/listings";
import YelpSearch from "../yelp/YelpSearch";

class SingleRental extends Component {

  constructor(props){
    super(props)
    this.state = {
      id: this.props.match.params.id,
    }
  }

  componentDidMount(){
    getSingleListing(this.state.id)
    .then(data => {
      this.setState({
        data
      })
    })
  }

  render(){
    return (
      <div className="single-home-card">
        {this.state.data &&
          <div>
            <div>{this.state.data.street}</div>
            <div>{this.state.data.city} {this.state.data.province}</div>
            <div>{this.state.data.postal_code}</div>
            <div>${this.state.data.price / 100}</div>
            <div>{this.state.data.date_available}</div>
            <div>{this.state.data.description}</div>
            <div>Bedrooms: {this.state.data.bedrooms} Bathrooms: {this.state.data.bathrooms} </div>
            <YelpSearch
              latitude = {this.state.data.lat}
              longitude = {this.state.data.lng}
              radius = {"5000"}
            />
          </div>
        }
      </div>
    )
  }
}


export default SingleRental;
