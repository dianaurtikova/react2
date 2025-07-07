import { useSearchParams } from "react-router-dom";
import CardList from '../../components/CardList/CardList'
import '../../Pages/CardPages/CardsPage.css'

const CARDS_LIMIT = 10;

function CardsPage() {
    const [searchParams] = useSearchParams();
    const limit = Number(searchParams.get('limit')) || CARDS_LIMIT;
    return (
        <>
            <div className='cardName'>Программы
                
            </div>
            <CardList limit={limit} />
        </>
    );

}
export default CardsPage;