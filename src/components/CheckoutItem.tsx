import React from "react";
import { useShopCart } from "../context/Catalog-context";
import { useLocation } from "react-router-dom";

interface CartItemProps {
    id: number;
    quantity: number;
}

export function CheckoutItem({ id, quantity }: CartItemProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems } = useShopCart();
    const item = cartItems.find(i => i.id === id);
    const location = useLocation();

    if (item == null) return null;

    const btnClasses = ['py-1 px-3 border font-exo text-lead-dark rounded-[6px] bg-transparent'];

    return (
        <div className="flex flex-row justify-between items-start mt-3 pb-3 border-b-1 border-lead-dark last:border-b-0">
            {location.pathname === '/cart' && (<img 
                src={item.img} 
                width={200} 
                className="mr-5"
            />)}
            {location.pathname === '/checkout' && (<img 
                src={item.img} 
                width={160} 
                className="mr-5"
            />)}

            <div className="flex flex-col justify-between py-3 w-[100%]">
                <div className='flex flex-row justify-between items-center w-[100%]'>
                    {location.pathname === '/cart' && (<div className='text-black-600 tracking-[0.8px] font-exo text-lg font-medium leading-tight mb-1'>
                        {item.name}
                    </div>)}
                    
                    {location.pathname === '/checkout' && (<div className='text-black-600 tracking-[0.8px] font-exo text-base font-medium leading-tight mb-1'>
                        {item.name}
                    </div>)}

                    {location.pathname === '/cart' && (
                        <div className="flex flex-row justify-start mb-1">
                            <div className='text-lead-dark tracking-[1px] font-exo text-base font-medium leading-normal mb-2'>
                                {item.price !== undefined ? item.price * quantity : 0} руб.
                            </div>
                        </div>
                    )}
                </div>

                <div className='flex flex-row justify-between items-center w-[100%]'>
                    {location.pathname === '/cart' && (
                        <div className='flex items-center justify-between'>
                            <button 
                                className={btnClasses.join(' ')}
                                onClick={() => decreaseCartQuantity(item.id)}
                            >
                                -
                            </button>

                            <span className='text-lead-dark tracking-[0.6px] font-exo text-base font-light leading-normal mx-2'>
                                {quantity} шт
                            </span>

                            <button
                                className={btnClasses.join(' ')}
                                onClick={() => increaseCartQuantity(item.id, item.name, item.price, item.img)}
                            >
                                +
                            </button>
                        </div>
                    )}
                    {location.pathname === '/checkout' && (
                        <div className='flex items-center justify-between'>
                            <span className='text-lead-dark tracking-[0.6px] font-exo text-base font-light leading-normal'>
                                {quantity} шт
                            </span>
                        </div>
                    )}

                    {location.pathname === '/cart' && (
                        <button 
                            className='py-2 px-4 bg-red-500 text-white text-base rounded-[6px]'
                            onClick={() => removeFromCart(item.id)}
                        >
                            Удалить
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
