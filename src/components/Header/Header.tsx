import { useState } from 'react'
import Form from '../Form/Form'
import '../../components/Header/Header.css'
import { Link } from 'react-router-dom'

function Header() {
    const [open, setOpen] = useState(false);
    const clickOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <header className="header">
                <div className="logotip">
                    <Link to="/" className='logo'><b>ProStudy</b></Link>
                </div>
                <div className="navigation">
                    <nav className="headerNavigator">
                        <ul>
                            <li><Link to="/Products" className="butt">Курсы</Link></li>
                            <li><Link to="/features" className="butt">Возможности</Link></li>
                            <li><Link to="/features" className="butt">Поддержка</Link></li>
                        </ul>
                    </nav>
                    <button className="but" onClick={clickOpen}>Записаться</button>
                </div>
            </header>
            <Form active={open} setActive={setOpen} />
        </>
    );
}

export default Header;