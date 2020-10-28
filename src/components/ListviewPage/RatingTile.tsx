import React, { Component } from 'react'
import { Rating } from '../../redux/types'

interface RatingTileProps {
    rating: Rating
}

export default class RatingTile extends Component<RatingTileProps, any> {

    render() {
        return (
            <div className="listview-rating-display">
                
                <p>Rating: {this.props.rating.getOverallRating()}</p>
                <small>
                    {this.props.rating.numRatings} Ratings
                </small>
                <span className="listview-rating-tooltip">
                    <p>Citations: {this.props.rating.getCitedRating()}</p>
                    <p>Current: {this.props.rating.getCurrentRating()}</p>
                    <p>Objective: {this.props.rating.getObjectiveRating()}</p>
                    <p>Readable: {this.props.rating.getReadableRating()}</p>
                </span>
            </div>
        )
    }
}
