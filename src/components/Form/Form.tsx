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
                <h1 className="form_name">Registration form</h1>
                <div className="field-area">
                    <input className="input-area" type="text" placeholder="Your name" required />
                    <input className="input-area" type="email" placeholder="Email Address" required />
                </div>
                <div className="form_buttons">
                    <button className="form_button">Ok</button>
                    <button className="form_button" onClick={clickClose}>Сancel</button>
                </div>
            </form>
        </div>
    );
}
export default Form;