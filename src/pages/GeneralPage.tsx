import React, { useState } from 'react'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { Accordion, AccordionItem } from '../components/Accordeon'
import { inLeftMoving, inDownMoving, miniInDownMoving, pulseAnimation } from '../animations'
import { Link, useNavigate } from 'react-router-dom'



export function GeneralPage() {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };


    const { scrollYProgress } = useViewportScroll();
    const x = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const y = useTransform(scrollYProgress, [0, 1], [0, 0]);

    const accordionItems: AccordionItem[] = [
      { title: 'Как оплачивать покупки вашей картой?', content: 'Как любой обычной картой, просто вводите в нужные поля данные купленной вами карты и оплачиваете. Если на сайте нужно подтверждение по коду – код придет вам в Telegram' },
      { title: 'Куда придет код покупки? Или изменения баланса?', content: 'Все коды приходят вам в бот Telegram, никаких номеров, емейлов мы от вас не получаем' },
      { title: 'Можно ли пополнить карту/снять наличные?', content: 'Нет. Все карты уже идут с определенным балансом, пополнить карту или снять наличные нельзя' },
      { title: 'Сколько карт я могу купить?', content: 'Сколько угодно, если карты есть в наличии – вы можете их купить' },
    ]

    const circleStyle = {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'rgb(175 79 231)',
    };
    
    const cardStyle = {
        maxWidth: '348px',
        right: '6rem',
        transform: 'translate3d(-46px, 0px, 0px)'
    }

    const navigate = useNavigate();

    const handleLocShop = () => {
      navigate('/catalog');
    };
    
    return (
        <>
        <motion.div 
            className='section h-[700px] flex justify-center bg-center bg-cover py-3'
            style={{ backgroundImage: 'url("./assets/img/saas-3/hero/hero-bg.jpg")' }}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
        >
            <div 
                className='container flex flex-md-row items-center relative'
            >
                <div className='w-[40%]'>
                    <motion.h1
                        className='font-exo text-4/5xl leading-normal text-white'
                        variants={miniInDownMoving}
                        transition={{ duration: 0.5 }}
                    >
                        КУПИТЬ ВИРТУАЛЬНЫЕ ПРЕДОПЛАЧЕННЫЕ КАРТЫ USD MASTERCARD
                    </motion.h1>
                    <motion.p 
                        className='w-[60%] text-lead tracking-[1px] font-exo text-lg font-extralight leading-normal mt-4 mb-11'
                        variants={miniInDownMoving} 
                        transition={{ duration: 0.7 }}
                    >
                        Карты номиналом от 1$ до 200$ только для разовой оплаты.
                    </motion.p>
                    <motion.div 
                        className='flex flex-row justify-between w-[85%]'
                        variants={miniInDownMoving} 
                        transition={{ duration: 0.9 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className='rounded-[8px] py-2 px-6 text-lg tracking-[0.5px] bg-grad text-white font-exo' 
                            onClick={handleLocShop}
                        >
                            Каталог карт
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className='rounded-[8px] py-2 px-6 border-[0.5px] border-btnsec flex flex-row items-center text-white font-exo tracking-[0.5] text-lg'
                        >
                            Смотреть условия <img src="./assets/svg/small_arrow_white.svg" className='ms-3'></img>
                        </motion.button>
                    </motion.div>
                </div>
                <div className='w-[60%]'>
                    <motion.img 
                        src="./assets/img/saas-3/prepay.png" 
                        alt=""
                        variants={miniInDownMoving} 
                        transition={{ duration: 1.6 }}
                    />
                </div>
            </div>
        </motion.div>

        {/* Секция 2 */}
        <div 
            className='section flex justify-center bg-center bg-cover py-14'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='font-exo text-black font-semibold text-4xl'>Как работает предоплаченная карта</h2>
                <p className='text-black-600 tracking-[1px] font-exo text-lg font-extralight leading-normal mt-3 mb-11'>Внимательно ознакомьтесь с тем, как работает карта</p>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className='steps py-5'>
                        <motion.div 
                            variants={inDownMoving} 
                            className='step-item py-3 relative'
                            transition={{ duration: 0.8 }}
                        >
                            <span className='step-item-num font-exo text-3xl font-semibold'>1</span>
                            <p className='text-lead-dark tracking-[1px] font-exo text-xl font-light leading-normal absolute left-[130px] top-[20px] w-[400px]'>Выбираете номинал и оплачиваете карту удобным способом</p>
                        </motion.div>
                        <motion.div 
                            variants={inDownMoving} 
                            className='step-item py-8 relative'
                            transition={{ duration: 1.4 }}
                        >
                            <span className='step-item-num font-exo text-3xl font-semibold'>2</span>
                            <p className='text-right text-lead-dark tracking-[1px] font-exo text-xl font-light leading-normal absolute right-[130px] top-[26px] w-[400px]'>В личном кабинете появится карта с выбранным номиналом для разовой оплаты</p>
                        </motion.div>
                        <motion.div 
                            variants={inDownMoving} 
                            className='step-item py-3 relative'
                            transition={{ duration: 2 }}
                        >
                            <span className='step-item-num font-exo text-3xl font-semibold'>3</span>
                            <p className='text-lead-dark tracking-[1px] font-exo text-xl font-light leading-normal absolute left-[130px] top-[20px] w-[400px]'>Совершаете оплату в вашем сервисе (Данные карты будут доступны в личном кабинете)</p>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>
        
        {/* Секция каталог */}
        <div 
            className='section flex justify-center bg-center bg-cover py-20'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='font-exo text-black font-semibold text-4xl mb-14'>Каталог банковских карт</h2>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className='features flex justify-between flex-wrap'>
                        <motion.div
                            variants={inLeftMoving}
                            className='features-item flex items-center text-center flex-col py-3 bg-light rounded-[10px] p-3'
                            transition={{ duration: 2.4 }}
                        >
                            <img 
                                src="./assets/img/saas-3/nom1.png"
                                width={400}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-medium leading-tight mt-5 mb-3'>Карта номиналом 1$</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center text-center flex-col py-3 bg-light rounded-[10px] p-3'
                            transition={{ duration: 1.8 }}
                        >
                            <img 
                                src="./assets/img/saas-3/nom1.png"
                                width={400}
                            />
                                <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-medium leading-tight mt-5 mb-3'>Карта номиналом 1$</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center text-center flex-col py-3 bg-light rounded-[10px] p-3'
                            transition={{ duration: 1.2 }}
                        >
                            <img 
                                src="./assets/img/saas-3/nom1.png"
                                width={400}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-medium leading-tight mt-5 mb-3'>Карта номиналом 1$</p>
                        </motion.div>
                    </div>
                    <div className='w-100 flex justify-center mt-10'>
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className='rounded-[8px] py-4 px-10 text-lg tracking-[0.5px] bg-grad text-white font-exo mt-4'
                        onClick={handleLocShop}
                        >
                        Перейти в каталог
                    </motion.button>
                    </div>
                </motion.section>
            </div>
        </div>

        {/* Секция 3 */}
        <div 
            className='section flex justify-center bg-center bg-cover py-20'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='font-exo text-black font-semibold text-4xl'>CardSell- это выгодно и удобно</h2>
                <p className='text-black-600 tracking-[1px] font-exo text-lg font-extralight leading-normal mt-3 mb-14'>Вот что мы предлагаем нашим клиентам</p>
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    <div className='features flex justify-between flex-wrap'>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center flex-col py-3 text-center'
                            transition={{ duration: 2.4 }}
                        >
                            <img 
                                src="./assets/img/icon/icon1.png"
                                width={80}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-semibold leading-tight my-3'>Локализация и удобство</p>
                            <p className='text-lead-dark tracking-[0.8px] font-exo text-lg font-light leading-normal'>Карты работают по всему миру с любым легальным сервисом</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center flex-col py-3 text-center'
                            transition={{ duration: 1.8 }}
                        >
                            <img 
                                src="./assets/img/icon/icon1.png"
                                width={80}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-semibold leading-tight my-3'>Локализация и удобство</p>
                            <p className='text-lead-dark tracking-[0.8px] font-exo text-lg font-light leading-normal'>Карты работают по всему миру с любым легальным сервисом</p>
                        </motion.div>
                        <motion.div 
                            variants={inLeftMoving}
                            className='features-item flex items-center flex-col py-3 text-center'
                            transition={{ duration: 1.2 }}
                        >
                            <img 
                                src="./assets/img/icon/icon1.png"
                                width={80}
                            />
                            <p className='text-black-600 tracking-[0.8px] font-exo text-xl font-semibold leading-tight my-3'>Локализация и удобство</p>
                            <p className='text-lead-dark tracking-[0.8px] font-exo text-lg font-light leading-normal'>Карты работают по всему миру с любым легальным сервисом</p>
                        </motion.div>
                    </div>
                </motion.section>
            </div>
        </div>

        {/* Секция 4*/}
        <div 
            className='section h-[650px] flex justify-center items-center bg-center bg-cover pt-12 pb-6'
            style={{ backgroundImage: 'url("./assets/img/saas-3/hero/hero-bg.jpg")' }}

        >
            <div 
                className='container flex flex-col justify-center items-center'
            >
                <h2 className='font-exo text-white font-semibold text-4xl'>Инструкция и описание к картам</h2>
                <div className='flex flex-wrap justify-between my-10'>
                    <div className='w-1/2 flex justify-center items-center'>
                        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
                            <div className="card-inner">
                                <div 
                                    className="card-front bg-cover"
                                    style={{ backgroundImage: 'url("./assets/img/saas-3/front.png")' }}
                                >
                                    <motion.div
                                        className='absolute right-[26px] top-[56%]'
                                        style={circleStyle}
                                        animate={pulseAnimation}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.div
                                        className='absolute left-[26px] top-[85%]'
                                        style={circleStyle}
                                        animate={pulseAnimation}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                <div 
                                    className="card-back bg-cover"
                                    style={{ backgroundImage: 'url("./assets/img/saas-3/back.png")' }}
                                >
                                    <motion.div
                                        className='absolute right-[90px] top-[56%]'
                                        style={circleStyle}
                                        animate={pulseAnimation}
                                        transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <p 
                        className='w-[48%] text-lead tracking-[1px] font-exo text-lg font-extralight leading-normal mt-6 mb-10'
                    >
                        <span className='font-semibold'>При покупке вы получаете реквизиты карты:</span>
                        <br></br>
                        - Шестнадцатизначный номер карты
                        <br></br>
                        <span 
                            onClick={handleClick}
                            className='cursor-pointer'
                        >
                            – Код CVV2
                        </span>
                        <br></br>
                        – Срок действия карты (3 месяца)
                        <br></br>
                        <br></br>
                        <span className='font-semibold'>Рекоммендация перед покупкой:</span>
                        <br></br>
                        1. Заранее узнайте принимает ли Ваш сервис/магазин виртуальные предоплаченные карты – MasterCard Prepaid.
                        <br></br>
                        2. Заранее предусмотрите запасные варианты расходования средств с карты.
                        <br></br>
                        3. При выборе номинала карты рассчитывайте с запасом на возможные комиссии и конвертации при оплате.
                    </p>
                </div>

            </div>
        </div>

        
        {/* Секция 5 */}
        <div 
            className='section flex justify-center bg-center bg-cover py-14'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='font-exo text-black font-semibold text-4xl'>Ответы на популярные вопросы</h2>
                <p className='text-black-600 tracking-[1px] font-exo text-lg font-extralight leading-normal mt-3 mb-11'>Внимательно ознакомьтесь с тем, как работает карта</p>
                <div className='w-[100%] flex flex-wrap py-5'>
                    <div className='w-1/2 flex justify-center relative'>
                        <img src="./assets/img/saas-3/phone.png" width={300}/>
                        <div className="rellax absolute top-0 " style={cardStyle}>
                            <motion.img 
                                src="./assets/img/saas-3/card.png" 
                                width={300}
                                style={{ x, y}}
                            />
                        </div>
                    </div>
                    
                    <Accordion 
                        items={accordionItems} 
                    />

                </div>
                
            </div>
        </div>
        </>
    )
}