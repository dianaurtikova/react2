import '../../components/Footer/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className="footerText">
                <div className="footerspiski">
                    <div className='logofooter'><Link to="/"><b>ProStudy</b></Link></div>
                    <div className="footerSpisok1">
                        <ul>
                            <li><Link to="/">Главная</Link></li>
                            <li><Link to="/Products">Курсы</Link></li>
                            <li><Link to="/features">Возможности</Link></li>
                            <li><Link to="/features">Поддержка</Link></li>
                            <li><Link to="/features">Личный кабинет</Link></li>
                        </ul>
                    </div>
                    <div className="footerSpisok2">
                        <ul>
                            <li><Link to="/features">Политика конфиденциальности</Link></li>
                            <li><Link to="/features">cookie</Link></li>
                            <li><Link to="/features">Условия использования</Link></li>
                            <li><Link to="/features">Юртидическая информация</Link></li>
                            <li><Link to="/features">Условия покупки</Link></li>
                        </ul>
                    </div>
                    <div>
                        Получайте новости и обновления от ProStudy о новых <br />курсах, вебинарах и специальных предложениях.
                        <p><button className="buttonFooter1">Подписаться</button></p>
                    </div>
                </div>
                {/* <div className="footerText2">
        <p>“Hey Portal” voice command availability varies. Learn more. Screen images simulated. User experience may vary. Requires wireless internet connection and <br/>Facebook or WhatsApp account. WhatsApp is not available on tablets. Features, functionality, and content vary and may not be available on all Portal models or <br/>in all areas and languages. Some features may require a Facebook account and downloading the Portal mobile app. Additional account registration, terms and <br/>fees may apply.</p>
        <p>*Represents savings off of regular, non-promotional prices. Both products must be purchased on same receipt to qualify. Valid on qualifying purchases at <br/>portal.facebook.com. Not valid on prior purchases and non-transferable. Not valid for cash or cash equivalent. Valid on in-stock products only. Offer may be cancelled <br/>or modified at any time without notice. Void where prohibited.</p>
        <p>©2021 Facebook, Inc. or its affiliates. All rights reserved. Facebook, Portal from Facebook and the Facebook logo are trademarks of Facebook, Inc. Amazon, Alexa <br/>and all related logos are trademarks of Amazon.com, Inc. or its affiliates. Other names and brands may be claimed as the property of others.</p>
    </div> */}
            </div>
        </footer>
    );
}

export default Footer;