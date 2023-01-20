function Card({card}) {

    return (
        <article className="Card">
            <div className="Card__rectangle">
                <span className="Card__corner"></span>
                <p className="Card__description">Сказочное заморское яство</p>
                <h1 className="Card__title">Нямушка</h1>
                <h2 className="Card__taste">{card.taste}</h2>
                <p className="Card__quantity">{card.quantity}</p>
                <div className="Card__pointInfo">
                    <p className="Card__pointInfo_weight">{card.weight}</p>
                    <p className="Card__pointInfo_unit"> кг</p>
                </div>
            </div>
            <span className="Card__text-link">Чего сидишь? Порадуй котэ, купи.</span>
        </article>
    );
}

export default Card;