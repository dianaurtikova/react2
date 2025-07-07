import Sec3Fon from '../../../assets/img/Sec3Fon.svg'
import Sec3TG from '../../../assets/img/Sec3TG.svg'
import Sec3WU from '../../../assets/img/Sec3WU.svg'
import '../../Section/ThirdSection/ThirdSecond.css'

function ThirdSection() {
    return (
        <section className="section3">
            <div className="phoneFon1">
                <div className="phoneFon2">
                    <img src={Sec3Fon} className="phoneFon2_1" />
                </div>
                <div className="phoneFon2_2">
                    <img src={Sec3TG} className="telega" />
                    <img src={Sec3WU} className="watsUp" />
                    <p className="phoneFonText1">Легко присоединяйтесь к живым занятиям и вебинарам на нашей платформе</p>
                    <div className="phoneFonText2"><p>Общайтесь с преподавателями и одногруппниками на любом устройстве в любое время, даже если у вас нет специального приложения.</p></div>
                    <p className="phoneFonText3">Доступность голосовых команд зависит от устройства. Требуется аккаунт на нашей платформе. Некоторые функции могут быть ограничены на отдельных устройствах.</p>
                </div>
            </div>
        </section>
    );
}

export default ThirdSection;