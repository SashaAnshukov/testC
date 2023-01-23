import {useState} from 'react';

function Card({card}) {

    const [selectedCard, setSelectedCard] = useState(false);
    
    const selectedCardClassName = (
        `Card__rectangle_border ${selectedCard ? 'Card__rectangle_red' : 'Card__rectangle_border'} `
    );

    const disabledCardClassName = (
        `Card__rectangle_border ${card.inStock == 0 ? 'Card__rectangle_grey' : 'Card__rectangle_border'}`
    );

    const selectedPointInfoClassName = (
        `Card__pointInfo ${selectedCard ? 'Card__pointInfo_red' : 'Card__pointInfo'} `
    );

    const disabledPointInfoClassName = (
        `Card__pointInfo ${card.inStock == 0 ? 'Card__pointInfo_grey' : 'Card__pointInfo'}`
    );

    const choosedCardClassName = (card.inStock == 0 ? disabledCardClassName : selectedCardClassName);
    const choosedPointInfoClassName = (card.inStock == 0 ? disabledPointInfoClassName : selectedPointInfoClassName);
    const choosedClassName = (card.inStock == 0 ? 'Card__rectangle_disabled' : 'Card__rectangle');

    function handleClick() {
        !selectedCard ? setSelectedCard(true) : setSelectedCard(false)
    };
    
    return (
        <article className="Card">
            <div className={choosedCardClassName} onClick={handleClick}>
                <div className={choosedClassName}>
                    <div className='Card__rectangle-cover'> 
                        <div className="Card__corner"></div>
                        <p className="Card__description">Сказочное заморское яство</p>
                        <h1 className="Card__title">Нямушка</h1>
                        <h2 className="Card__taste">{card.taste}</h2>
                        <p className="Card__quantity">{card.quantity}</p>
                    </div> 
                    <div className={choosedPointInfoClassName}>
                        <p className="Card__pointInfo_weight">{card.weight}</p>
                        <p className="Card__pointInfo_unit"> кг</p>
                    </div>
                </div> 
            </div>
            <div className="Card__text-info">
                <p className="Card__text">
                    {
                        card.inStock !== 0 
                        ? 
                        (!selectedCard ? 'Чего сидишь? Порадуй котэ, ' : card.text)
                        :
                        (`Печалька, ${card.textIfTheProductIsOver}`)
                    }
                </p>
                <a className="Card__text_link" href="#" onClick={handleClick}>
                    {card.inStock !== 0 ? (!selectedCard ? 'купи' : '') :''}
                </a>
            </div>
        </article>
    );
}

export default Card;