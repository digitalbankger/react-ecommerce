import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useShopCart } from '../context/Catalog-context';
import { ShopCart } from './ShopCart';

export function Navigation() {
    const location = useLocation();
    const coloredRoutes = ['/catalog', '/card'];
    const isColoredRoute = coloredRoutes.includes(location.pathname);
    const [isSticky, setSticky] = useState(false);
    const { openCart, closeCart, isOpen, cartQuantity } = useShopCart()

    useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setSticky(offset > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const headerStyle = {
        backgroundColor: isSticky || isColoredRoute ? 'rgb(13 2 18)' : 'transparent',
    };
    
    return (
        <nav 
            className='h-[80px] flex justify-center items-center px-5 text-black header'
            style={headerStyle}
        >
            <div className='container flex justify-between items-center'>
                <Link to="/" className='flex flex-row items-center'>
                    <img 
                        src="./assets/img/logo-dif.svg" width={36}
                    />
                    <span className='font-exo text-lead tracking-[1.2px] text-xl font-medium ms-1'>CardSell</span>
                </Link>

                <span>
                    <Link to="/" className='mx-2 text-lead'>Главная</Link>
                    <Link to="/catalog" className='mx-2 text-lead'>Каталог карт</Link>
                    <Link to="/card" className='mx-2 text-lead'>Оферта</Link>
                    <Link to="/checkout" className='mx-2 text-lead'>Контакты</Link>
                </span>

                <div className='flex flex-row'>

                    <div className='flex flex-row items-center mx-12'>
                        <img src="./assets/svg/telegram.svg" width={22} />
                        <p className='text-base font-exo font-normal text-lead tracking-[0.8px] ms-2'>Telegram</p>
                    </div>

                    <div className='flex flex-row'>
                        <img src="./assets/svg/tel.svg" width={22}/>
                        <div className='flex flex-col items-end ms-2'>
                            <p className='text-base font-exo font-normal text-lead tracking-[0.8px]'>+7 (903) 777-19-98</p>
                            <p className='text-xs font-exo font-extralight text-lead tracking-[0.4px]'>Позвонить по телефону</p>
                        </div>
                    </div>

                    <div className='relative flex'>
                        <img 
                            src='./assets/svg/shop-cart.svg' 
                            width={30} 
                            className='ms-12 cursor-pointer'
                            onClick={() => openCart()}
                        />
                        <div className='absolute bg-white rounded-[50%] w-[20px] h-[20px] flex items-center justify-center right-[-20px]'>
                            {cartQuantity}
                        </div>
                    </div>

                    {isOpen && 
                        <ShopCart onClose={() => closeCart()}/>
                    }

                </div>
            </div>
        </nav>
    )
}