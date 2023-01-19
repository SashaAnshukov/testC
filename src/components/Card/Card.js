function Card({card}) {

    return (
        <article className="Card">
            <div className="Card__rectangle">
                <p className="Card__description">Сказочное заморское яство</p>
                <h1 className="Card__title">Нямушка</h1>
                <h2 className="Card__taste">{card.taste}</h2>
                <p className="Card__quantity">{card.quantity}</p>
                <div className="Card__weight">
                    {card.weight}
                    <div className="Card__unit">кг</div>
                </div>
            </div>
            <span className="Card__text-link">Чего сидишь? Порадуй котэ, купи.</span>
        </article>
    );
}

export default Card;