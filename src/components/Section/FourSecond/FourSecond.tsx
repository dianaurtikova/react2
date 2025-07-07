import '../../Section/FourSecond/FourSecind.css'
import Sec4Fon from '../../../assets/img/Sec4Fon.svg'
function FourSecond(){
    return (
        <section className="section4">
            <img src={Sec4Fon} className="tvFon"/>
            <div className="slayder">
                <div className="slayder1">
                    <p className="slayderText1"><b>Не просто учитесь — применяйте знания</b></p>
                    <p className="slayderText2">С нашими интерактивными курсами уроки оживают благодаря увлекательным видео, анимациям и практическим заданиям.</p>
                </div>
                <div className="slayder2">
                    <p><b>Открывайте новые навыки с помощью погружающего контента, который <br />вдохновляет и мотивирует.</b></p>
                    <p><b>Применяйте знания на практике и наблюдайте за своим ростом.</b></p>
                </div>
            </div>
        </section>
    );
}

export default FourSecond;