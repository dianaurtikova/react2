import Sec6Fon from '../../../assets/img/Sex6Fon.svg'
import Sec6Pic1 from '../../../assets/img/Sec6Pic1.svg'
import Sec6Pic2 from '../../../assets/img/Sec6Pic2.svg'
import Sec1Pic1 from '../../../assets/img/skidka.svg';
import '../../Section/SixSection/SixSection.css'
function SixSection() {
    return (

        <section className="section6">
            <div className="section6Foto">
                <div className="section6Foto1">
                    <div className="section6Text1">
                        <p className="section6Text1_1"><b>Ваша безопасность — наш приоритет</b></p>
                        <p className="section6Text1_2">На платформе онлайн-обучения вы легко можете отключить камеру <br />и микрофон в любой момент, а также управлять доступом к устройствам <br />для защиты личного пространства. Все видеозанятия и вебинары защищены <br />сквозным шифрованием, чтобы ваши данные и общение оставались<br /> конфиденциальными.</p>
                    </div>
                    <img src={Sec6Pic1} className="s4" />
                </div>
                <div className="section6Foto2">
                    <div className="section6Text2">
                        <p className="section6Text2_1"><b>Учитесь эффективнее из дома</b></p>
                        <p className="section6Text2_2">Независимо от того, используете ли вы Zoom, Webex, Microsoft Teams или другие платформы, ProStudy предоставляет все необходимые инструменты для <br />продуктивного обучения и взаимодействия с преподавателями в любом месте.</p>
                    </div>
                    <img src={Sec6Pic2} className="s4" />
                </div>
            </div>
            <div className="section7Text">
                <p className="section7Text1_1"><b>Выберите курс, который подходит <br />именно вам</b></p>
                <img src={Sec1Pic1} className="fon7" alt="Decoration" />
                <div className="section7Text2">
                    <p className="section7Text2_1">Скидки до 60% и 3 курса в подарок</p>
                    <p className="section7Text2_1">Лето скидок: пока температура растет, цены тают!</p>
                </div>
            </div>
            <img src={Sec6Fon} className="blueFonS4" />
        </section>
    );
}

export default SixSection;

