import { useState, useEffect } from "react";
import Card from "../Card/Card";
import Sec2Card1 from '../../assets/img/Sec2Card1.svg';
import Sec2Card2 from '../../assets/img/Sec2Card2.svg';
import Sec2Card3 from '../../assets/img/Sec2Card3.svg';
import Sec2Card4 from '../../assets/img/Sec2Card4.svg';

interface PropsCards {
    id: number;
    title: string;
    body: string;
}
interface CardsProps {
    limit: number;
}
function CardList({ limit }: CardsProps) {
    const [cards, setCards] = useState<PropsCards[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const cardImages = [Sec2Card1, Sec2Card2, Sec2Card3, Sec2Card4];

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
                if (!response.ok) {
                    throw new Error("Ошибка загрузки!");
                }
                const data = await response.json();
                setCards(data);
            }
            catch (error) {
                setError("Ошибка при загрузке данных");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [limit]);
    if (loading) {
        return <p>Loading.....</p>;
    }
    if (error) {
        return <p>Error:{error}</p>
    }
    if (cards.length === 0 && !loading) {
    return <p>No cards available</p>;
}
if (cards.length === 0) {
    return <p>Нет данных для отображения.</p>;
  }
    return (
        <div className="card-container1">
            {cards.map((card, index) => (
                <Card
                    key={card.id}
                    card_foto={cardImages[index % cardImages.length]}
                    card_name={`Comment ${index + 1}`}
                    card_description={card.body}
                    card_link="Learn More"
                />
            ))}
        </div>
    );
}

export default CardList;