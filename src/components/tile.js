import React from 'react';
import ProductData from '../data/productData.json';

class Tile extends React.Component {

    getRatingStars = () => {

        let productRating = [];

        for (let i = 0; i < ProductData.rating; i++) {
            productRating.push (<i className="fas fa-star"></i>);
        }
        for (let i = 0; i < 5-ProductData.rating; i++) {
            productRating.push (<i className="far fa-star"></i>);
        }

        return productRating;
    }

    createTilesArray = () => {
        
        let tilesArray = [];
        let productRating = this.getRatingStars();

        for (let i = 0; i < 300; i++) {
            tilesArray.push (
                <div className="tile">
                    <img src={ProductData.imagePath} alt="" className="tile__picture" />
                    <div className="tile__info">
                        <div className="tile__info_description top-margin">
                            {ProductData.description}
                        </div>
                        <div className="tile__info_rating top-margin">
                            {productRating}
                        </div>
                        <div className="tile__info_price top-margin">
                            {ProductData.price + ProductData.valute}
                        </div>
                    </div>
                    <div className="tile__actions top-margin lefter">
                        <button type="button" className="tile__actions_one-click-buy-button">
                        Купить в один клик
                        </button>
                        <button type="button" className="tile__actions_buy-button">
                        Купить
                        </button>
                    </div>
                    <div className="tile__fast-actions">
                        <div className="tile__fast-actions_to-compare">
                            <i className="far fa-chart-bar"></i>
                        </div>
                        <div className="tile__fast-actions_to-favorites">
                            <i className="far fa-heart"></i>
                        </div>
                    </div>
                    <div className="tile__inshop top-margin lefter">
                        В наличии: <a href="#">{ProductData.inStock}</a>
                    </div>
                    <div className="tile__delivery top-margin lefter">
                        Доставим: <a href="#">{ProductData.shipping}</a>
                    </div>
                </div>
            );
        }
        return tilesArray;
    }

    render () {
        return (
            this.createTilesArray()
        );
    }
}

export default Tile;