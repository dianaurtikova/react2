import Sec2Fon1 from '../../../assets/img/Sec2Fon1.svg'
import Sec2Fon2 from '../../../assets/img/Sec2Fon2.svg'
import '../../Section/SecondSection/SecondSection.css'
interface PropsCards {
    children: React.ReactNode;
}

function SecondSection({ children }: PropsCards){
    return(
        <section className="section2">
            {children}
            <p className="textSection2"><b>Обратная связь от преподавателей</b></p>
            <div className="bluefon2">
                <img src={Sec2Fon1} className="fon2"/>
                <img src={Sec2Fon2} className="blueFon"/>
            </div>
            <div className="stolbcu">
                <div className="stolbec1">
                 <p className="stolbec1_1"><b>Внимание каждому студенту</b></p>
                 <p className="stolbec1_2">Видеоконференции и интерактивные задания <br /> создают атмосферу живого общения, где каждый <br />студент чувствует себя замеченным и вовлечённым, <br />независимо от места и времени обучения.</p>
                 <a href="#">Узнать больше</a>   
                </div>
                <div className="stolbec2">
                    <p className="stolbec2_1"><b>Следите за прогрессом</b></p>
                    <p className="stolbec2_2">Благодаря современным технологиям, <br /> преподаватели могут отслеживать прогресс каждого <br /> обучающегося, предоставлять  обратную связь <br />и адаптировать материалы под индивидуальные потребности.</p>
                    <a href="#">Узнать больше</a>
                </div>
            </div> 
        </section>
    );
}

export default SecondSection;