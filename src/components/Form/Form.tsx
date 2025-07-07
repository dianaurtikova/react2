import { useEffect } from 'react';
import '../../components/Form/Form.css'
interface propsForm {
    active: boolean;
    setActive: (value: boolean) => void;
}
function Form({ active, setActive }: propsForm) {
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden';
        } 
        else {
            document.body.style.overflow = 'auto';
        }
    }, [active]);
    const clickClose = () => {
        setActive(false);
    }
    return (

        <div className={active ? "backdrop activ" : "backdrop"} onClick={clickClose}>
            <form className="form_click" onClick={e => e.stopPropagation()}>
                <h1 className="form_name">Форма входа и регистрации</h1>
                <div className="field-area">
                    <input className="input-area" type="text" placeholder="ФИО" required />
                    <input className="input-area" type="email" placeholder="Электронная почта" required />
                </div>
                <div className="form_buttons">
                    <button className="form_button">Oкей</button>
                    <button className="form_button" onClick={clickClose}>Закрыть</button>
                </div>
            </form>
        </div>
    );
}
export default Form;