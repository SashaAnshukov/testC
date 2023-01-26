import {useState} from 'react';

function Card({card}) {

    const [selectedCard, setSelectedCard] = useState(false); //стэйт длявыбора карточки
    const [showText, setShowText] = useState('Котэ не одобряет?'); //стэйт для CardDescriptionClassName
    const [isFirstRun, setFirstRun] = useState(true) //стэйт для первого события наведения на карточку
    const [onMouseIn, setOnMouseIn] = useState(false); //стэйт для пропуска события наведения на карточку

    const selectedCardClassName = (
        `Card__rectangle_border ${selectedCard ? 'Card__rectangle_red' : 'Card__rectangle_border'} `
    );
    const disabledCardClassName = (
        `Card__rectangle_border ${card.inStock == 0 ? 'Card__rectangle_grey' : 'Card__rectangle_border'}`
    );
    const CardClassName = (card.inStock == 0 ? disabledCardClassName : selectedCardClassName);
    

    const CardRectangleClassName = (card.inStock == 0 ? 'Card__rectangle_disabled' : 'Card__rectangle');
    const CardDescriptionClassName = (
        `Card__description ${selectedCard && onMouseIn ? 'Card__description_mouseLeave' : 'Card__description'} `
    );
    
    const selectedPointInfoClassName = (
        `Card__pointInfo ${selectedCard ? 'Card__pointInfo_red' : 'Card__pointInfo'} `
    );
    const disabledPointInfoClassName = (
        `Card__pointInfo ${card.inStock == 0 ? 'Card__pointInfo_grey' : 'Card__pointInfo'}`
    );
    const pointInfoClassName = (card.inStock == 0 ? disabledPointInfoClassName : selectedPointInfoClassName);
    
    const CardText = (`${card.inStock !== 0 ? 'Card__text' : 'Card__text_yelow'}`);

    function handleClick() {
        !selectedCard && card.inStock !== 0 ? setSelectedCard(true) : setSelectedCard(false)
        setShowText('Сказочное заморское яство')
        setOnMouseIn(false)
    };

    function handleMouseEnter () {
        isFirstRun ? setShowText('Сказочное заморское яство') : setShowText('Котэ не одобряет?');
        setOnMouseIn(true)
    }
    function handleMouseLeave () {
        setFirstRun(false);
        setShowText('Сказочное заморское яство');
        setOnMouseIn(false)
    }
    
    return (
        <article className="Card">
            <div className={CardClassName} onClick={handleClick}>
                <div className={CardRectangleClassName}>
                    <div className='Card__rectangle-cover' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > 
                        <div className="Card__corner"></div>
                        <p className={CardDescriptionClassName} >
                            {selectedCard ? showText : ('Сказочное заморское яство')}
                        </p>
                        <h1 className="Card__title">Нямушка</h1>
                        <h2 className="Card__taste">{card.taste}</h2>
                        <p className="Card__quantity">{card.quantity}</p>
                    </div> 
                    </div>
                    <div className={pointInfoClassName}>
                        <p className="Card__pointInfo_weight">{card.weight}</p>
                        <p className="Card__pointInfo_unit"> кг</p>
                    
                </div> 
            </div>
            <div className="Card__text-info">
                <p className={CardText}>
                    {
                        card.inStock !== 0 
                        ? 
                        (!selectedCard ? 'Чего сидишь? Порадуй котэ,\xa0' : card.text)
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