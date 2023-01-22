import {useState} from 'react';

function Card({card}) {

    const [selectedCard, setSelectedCard] = useState(false);
    
    const selectedCardClassName = (
        `Card__rectangle_border ${selectedCard ? 'Card__rectangle_red' : 'Card__rectangle_border'} `
    )

    const selectedPointInfoClassName = (
        `Card__pointInfo ${selectedCard ? 'Card__pointInfo_red' : 'Card__pointInfo'} `
    )

    function handleClick() {
        !selectedCard ? setSelectedCard(true) : setSelectedCard(false)
    }
    
    return (
        <article className="Card">
            <div className={selectedCardClassName} onClick={handleClick}>
            <div className="Card__rectangle"> 
                <div className="Card__corner"></div>
                <p className="Card__description">Сказочное заморское яство</p>
                <h1 className="Card__title">Нямушка</h1>
                <h2 className="Card__taste">{card.taste}</h2>
                <p className="Card__quantity">{card.quantity}</p>
                <div className={selectedPointInfoClassName}>
                    <p className="Card__pointInfo_weight">{card.weight}</p>
                    <p className="Card__pointInfo_unit"> кг</p>
                </div>
            </div> 
            </div>
            <p className="Card__text">
                {!selectedCard ? 'Чего сидишь? Порадуй котэ, ': card.text}
                {!selectedCard ? <a className="Card__text_link" href="#" onClick={handleClick}>купи</a> : ''}
                
            </p>
        </article>
    );
}

export default Card;