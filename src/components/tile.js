import React from 'react';
import './tile.css';
import ProductData from '../data/productData.json';

class Tile extends React.Component {

    getRatingStars = (productData) => {

        let productRating = [];

        for (let i = 0; i < productData.rating; i++) {
            productRating.push (<i className="fas fa-star"></i>);
        }
        for (let i = 0; i < 5-productData.rating; i++) {
            productRating.push (<i className="far fa-star"></i>);
        }

        return productRating;
    }

    createTilesArray = () => {
        
        let tilesArray = [];

        for (let i = 0; i < ProductData.length; i++) {
            tilesArray.push (
                <div className="tile">
                    <img src={ProductData[i].imagePath} alt="" className="tile__picture" />
                    <div className="tile__info">
                        <div className="tile__info_description top-margin">
                            {ProductData[i].description}
                        </div>
                        <div className="tile__info_specs top-margin">
                            {ProductData[i].specs}
                        </div>
                        <div className="tile__info_rating top-margin">
                            {this.getRatingStars(ProductData[i])}
                        </div>
                        <div className="tile__info_price top-margin">
                            {ProductData[i].price} {ProductData[i].valute}
                        </div>
                    </div>
                    <div className="buttons-container">
                        <div className="tile__actions top-margin lefter">
                            <button type="button" className="tile__actions_one-click-buy-button margin-righter">
                                Купить в один клик
                            </button>
                            <button type="button" className="tile__actions_buy-button margin-righter">
                                Купить
                            </button>
                        </div>
                        <div className="tile__fast-actions">
                            <div className="tile__fast-actions_to-compare inline-blocker margin-righter">
                                <i className="far fa-chart-bar"></i>
                                <a href="" className="tile__fast-actions_to-compare-link">Сравнить</a>
                            </div>
                            <div className="tile__fast-actions_to-favorites inline-blocker">
                                <i className="far fa-heart"></i>
                                <a href="" className="tile__fast-actions_to-favorites-link">Избранное</a>
                            </div>
                        </div>
                    </div>
                    <div className="tile__logistic-info">
                        <div className="tile__logistic-info_inshop top-margin lefter">
                            В наличии: <a href="#">{ProductData[i].inStock}</a>
                        </div>
                        <div className="tile__logistic-info_delivery top-margin lefter">
                            Доставим: <a href="#">{ProductData[i].shipping}</a>
                        </div>
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