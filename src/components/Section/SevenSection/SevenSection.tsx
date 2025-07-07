import Sec7Card1 from '../../../assets/img/card1.jpg';
import Sec7Card2 from '../../../assets/img/card1.jpg';
import Sec7Card3 from '../../../assets/img/card1.jpg';
import Sec7Card4 from '../../../assets/img/card1.jpg';
import '../../Section/SevenSection/SevenSection.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Form from '../../Form/Form'

function SevenSection() {
    const [open, setOpen] = useState(false);
    const clickOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <section className="section7">
                <div className="Sec7fon1">
                    <div className="Sec7fon2">
                        <div className="card-container2">
                            <Swiper
                                modules={[Navigation]}
                                loop={true}
                                slidesPerView={4}
                                spaceBetween={20}
                                slidesPerGroup={1}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                            >
                                <SwiperSlide>
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>12 месяцев</div>
                                        </div>
                                        <img src={Sec7Card1} className="card2_1" alt="Portal TV" />
                                        <div className="card2Text">
                                            <p>UX/UI-дизайнер</p>
                                            <button className="BuyNow" onClick={clickOpen}>Записаться</button>
                                            <p><Link to="/features">Узнать больше</Link></p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>10 месяцев</div>
                                        </div>
                                        <img src={Sec7Card2} className="card2_1" alt="Portal" />
                                        <div className="card2Text">
                                            <p>Фронтенд-разработчик</p>
                                            <button className="BuyNow" onClick={clickOpen}>Записаться</button>
                                            <p><Link to="/features">Узнать больше</Link></p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>10 месяцев</div>
                                        </div>
                                        <img src={Sec7Card3} className="card2_1" alt="Portal+" />
                                        <div className="card2Text">
                                            <p>3D-художник</p>
                                            <button className="BuyNow" onClick={clickOpen}>Записаться</button>
                                            <p><Link to="/features">Узнать больше</Link></p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>12 месяцев</div>
                                        </div>
                                        <img src={Sec7Card4} className="card2_1" alt="Portal Mini" />
                                        <div className="card2Text">
                                            <p>Java-разработчик</p>
                                            <button className="BuyNow" onClick={clickOpen}>Записаться</button>
                                            <p><Link to="/features">Узнать больше</Link></p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>8 месяцев</div>
                                        </div>
                                        <img src={Sec7Card4} className="card2_1" alt="Portal Mini" />
                                        <div className="card2Text">
                                            <p>1С-разработчик</p>
                                            <button className="BuyNow" onClick={clickOpen}>Записаться</button>
                                            <p><Link to="/features">Узнать больше</Link></p>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card2">
                                        <div className="cardPortal">
                                            <div>12 месяцев</div>
                                        </div>
                                        <img src={Sec7Card4} className="card2_1" alt="Portal Mini" />
                                        <div className="card2Text">
                                            <p>Веб-дизайнер</p>
                                            <button className="BuyNow" onClick={clickOpen}>Записаться</button>
                                            <p><Link to="/features">Узнать больше</Link></p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                        <button className="CPbut"><Link to="/Products" >Выберите курс</Link></button>
                    </div>
                </div>
            </section >
            <Form active={open} setActive={setOpen} />
        </>
    );
}

export default SevenSection;