import React from 'react';

class Buttons extends React.Component {
    
    render () {
        return (
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
        );
    }
}

export default Buttons;