import Sec5Fon from '../../../assets/img/personality.jpg'
import '../../Section/FiveSection/FiveSection.css'
import { useState } from 'react'
import Form from '../../Form/Form'

function FiveSection() {
    const [open, setOpen] = useState(false);
    const clickOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <section className="section5">
                <div className="section5Text">
                    <p className="section5Text1_1"><b>Персональная поддержка</b></p>
                    <p className="section5Text1_2">В ProStudy у каждого студента есть личный куратор, <br />который всегда готов помочь. Получайте персональные рекомендации, поддержку и ответы на вопросы в любое время — ваш куратор всегда на связи, чтобы сделать процесс обучения комфортным и эффективным.</p>
                    <button className="section5But" onClick={clickOpen}>Записаться</button>
                </div>
                <div className="section5Text2">
                    <img src={Sec5Fon} className="section5picture2" />
                    <p className="section5Text2_1">Для доступа к курсам необходимо зарегистрировать аккаунт и выбрать программу обучения.</p>
                </div>
            </section>
            <Form active={open} setActive={setOpen} />
        </>
    );
}

export default FiveSection;