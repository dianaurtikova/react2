import section1Fon from '../../../assets/img/section1Fon.svg'
import Sec1Pic1 from '../../../assets/img/skidka.svg'
import Sec1Pic2 from '../../../assets/img/Sec1Pic2.svg'
import '../../Section/FirstSection/FirstSection.css'
function FirstSection(){
    return(
        <section className="section1">
            <img src={section1Fon} alt="фон1" className="fon1"/>
            <div className="textSection1">
                <p className="text1Fon1"><b>Если не можешь присутствовать лично — учись вместе с нами</b></p>
                <p className ="text2Fon1"><b>Погружайтесь в обучение вместе с ProStudy</b></p>
                <button className="button1Fon1"><b className="textButton1">Записаться на курс</b></button>
                <b className="textButton2">Начните обучение прямо сейчас</b>
            </div>
            <div className="textSection1_1">
                <img src={Sec1Pic1} alt="фон1.2" className="fon1_2"/>
                <img src={Sec1Pic2} alt="фон1.3" className="fon1_3"/>
                <div className="textSection1_2">
                    <p className="text1Fon1_2"><b>Скидки до 60% и 3 курса в подарок</b></p>
                    <p className="text2Fon1_2">Лето скидок: пока температура растет, цены тают!</p>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;