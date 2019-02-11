import React from 'react';

class ProductInfo extends React.Component {
    
    getRatingStars = (rating) => {

        let productRating = [];
    
        for (let i = 0; i < rating; i++) {
            productRating.push (<i className="fas fa-star"></i>);
        }
        for (let i = 0; i < 5-rating; i++) {
            productRating.push (<i className="far fa-star"></i>);
        }
    
        return productRating;
    }
    
    render () {
        return (
            <div className="tile__info">
                <div className="tile__info_description top-margin">
                    {this.props.data.description}
                </div>
                <div className="tile__info_specs top-margin">
                    {this.props.data.specs}
                </div>
                <div className="tile__info_rating top-margin">
                    {this.getRatingStars(this.props.data.rating)}
                </div>
                <div className="tile__info_price top-margin">
                    {this.props.data.price} {this.props.data.valute}
                </div>
            </div>
        );
    }
}

export default ProductInfo;