import Card from '../Card/Card';

function Main() {
    
    // Массив с данными карточек 
    const initialCards = [ 
        { 
            id: Math.random().toString(16).slice(2),
            taste: 'с фуа-гра', 
            quantity: '10 порций' + '\xa0\xa0\xa0\xa0\xa0' + ' мышь в подарок',
            weight: '0,5',
            text: 'Печень утки разварная с артишоками.' 
        }, 
        { 
            id: Math.random().toString(16).slice(2),
            taste: 'с рыбой', 
            quantity: '40 порций' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + ' 2 мыши в подарок',
            weight: '2',
            text: 'Головы щучьи с чесноком да свежайшая сёмушка.'  
        },
        {
            id: Math.random().toString(16).slice(2),
            taste: 'с курой', 
            quantity: '100 порций' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + ' 5 мышей в подарок заказчик доволен',
            weight: '5',
            text: 'Филе из цыплят с трюфелями в бульоне.' 
        }
    ];  

    
    return (
        <main>
            <section className="Main__elements">
                {initialCards.map (item => {
                    return <Card card={item} key={item.id}/>
                })}
            </section>
        </main>
    );
}

export default Main;