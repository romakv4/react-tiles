import React from 'react';
import './tile.css';
import ProductData from '../../data/productData.json';
import ProductInfo from './product-info/productInfo';
import Buttons from './buttons/buttons';
import LogisticInfo from './logistic-info/logisticInfo';

class Tile extends React.Component {

    createTilesArray = () => {
        
        let tilesArray = [];

        for (let i = 0; i < ProductData.length; i++) {

            tilesArray.push (
                <div className="tile">
                    <img src={ProductData[i].imagePath} alt="" className="tile__picture" />
                    <ProductInfo data={ProductData[i]}/>
                    <Buttons/>
                    <LogisticInfo data={ProductData[i]}/>
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