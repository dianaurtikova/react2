import '../../components/Section/SecondSection/SecondSection.css'
interface PropsCard {
    card_foto: string;
    card_name: string;
    card_description: string;
    card_link: string;
}
function Card({ card_foto, card_name, card_description, card_link }: PropsCard) {
    return (
        <div className="card-container1">
            <div className="card">
            <img src={card_foto} alt={card_name}className="card1" />
            <div className="cardText">
                <h3><b>{card_name}</b></h3>
                <p>{card_description}</p>
                <a href={card_link}>Learn More</a>
            </div>
        </div>
        </div>
    );
}
export default Card;