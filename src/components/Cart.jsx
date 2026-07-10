import React from "react";
import { useCart } from "../context/CartContext";
import { AnimatePresence, motion } from "motion/react";

export default function Cart() {
    const { cartItems, setCartItems } = useCart();

    return (
        <>
            <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                className="shadow-2xl rounded-xl w-3xs right-0 sm:w-sm absolute bg-white sm:right-4 top-20"
            >
                <h1 className="p-4 text-xl font-bold pb-5 border-b border-grayish-blue ">
                    Cart
                </h1>
                {cartItems.length === 0 ? (
                    <div className="h-20 w-full flex items-center justify-center">
                        <p className="p-4 text-very-dark-blue">
                            Your cart is empty
                        </p>
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-4"
                        >
                            <div>
                                <div className="flex gap-x-2 items-center">
                                    <img
                                        className="w-12 h-fit"
                                        src={item.image}
                                        alt=""
                                    />
                                    <span>
                                        <span>{item.name} </span>
                                        <span>
                                            ${item.price} * {item.quantity} = $
                                            {item.price * item.quantity}
                                        </span>
                                    </span>
                                </div>
                                {/* remove button */}
                                {/* <button
                                    onClick={() => setCartItems(cartItems.filter((i) => i.id !== item.id))}
                                    className="text-grayish-blue text-sm"
                                >
                                    Remove
                                </button> */}
                            </div>
                        </div>
                    ))
                )}
                {cartItems.length > 0 && (
                    <div className="m-4">
                        <button className="bg-p-orange rounded-xl py-4 px-6 w-full">
                            Checkout
                        </button>
                    </div>
                )}
            </motion.div>
        </>
    );
}
