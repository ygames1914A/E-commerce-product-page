import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useCart } from "../context/CartContext";
import Cart from "./Cart";


export default function Header() {
    const [burgerToggle, setBurgerToggle] = useState(false);
    const { cartToggle, setCartToggle } = useCart();
    return (
        <>
            <header className={`container m-auto`}>
                <nav className="border-b border-grayish-blue pt-6 pb-6 flex flex-row justify-between">
                    <ul className="list-none flex flex-row gap-5 text-2xl items-center">
                        <button
                            className="pl-5 sm:hidden"
                            onClick={() => setBurgerToggle(true)}
                        >
                            <img src=".../../images/icon-menu.svg" alt="" />
                        </button>
                        {/* <li className='mr-4 font-bold text-very-dark-blue tracking-wider%'>sneakers</li> */}
                        <li className="">
                            <img src="../images/logo.svg" alt="logo" />
                        </li>
                        <ul className="hidden list-none sm:flex gap-x-5 *:hover:cursor-pointer *:hover:text-very-dark-blue *:hover:border-b *:hover:border-p-orange">
                            <li className="text-dark-grayish-blue text-sm">
                                Collections
                            </li>
                            <li className="text-dark-grayish-blue text-sm">
                                Men
                            </li>
                            <li className="text-dark-grayish-blue text-sm">
                                Women
                            </li>
                            <li className="text-dark-grayish-blue text-sm">
                                About
                            </li>
                            <li className="text-dark-grayish-blue text-sm">
                                Contact
                            </li>
                        </ul>
                        <AnimatePresence>
                            {burgerToggle && (
                                <div className="h-svh w-screen absolute top-0">
                                    {/* overlay */}
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{
                                            x: 0,
                                            transition: {
                                                duration: 0.25,
                                                delay: 0.4,
                                            },
                                        }}
                                        exit={{
                                            x: "-100%",
                                            transition: { duration: 0.25 },
                                        }}
                                        className="overflow-hidden fixed top-0 w-screen h-screen  bg-black/75"
                                    ></motion.div>
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{
                                            x: 0,
                                        }}
                                        exit={{
                                            x: "-100%",
                                            transition: { delay: 0.25 },
                                        }}
                                        transition={{
                                            duration: 0.4,
                                        }}
                                        className="absolute top-0  w-full h-svh z-10"
                                    >
                                        <div className="fixed w-full h-full">
                                            {/* Menu */}
                                            <div className="w-[75%] bg-white h-full">
                                                <button
                                                    onClick={() =>
                                                        setBurgerToggle(false)
                                                    }
                                                    className="mt-10 ml-5"
                                                >
                                                    <img
                                                        src="../images/icon-close.svg"
                                                        alt=""
                                                    />
                                                </button>
                                                <div className="pl-5 mt-5 flex flex-col gap-3 *:text-xl *:font-semibold ">
                                                    <li className="text-very-dark-blue text-sm">
                                                        Collections
                                                    </li>
                                                    <li className="text-very-dark-blue text-sm">
                                                        Men
                                                    </li>
                                                    <li className="text-very-dark-blue text-sm">
                                                        Women
                                                    </li>
                                                    <li className="text-very-dark-blue text-sm">
                                                        About
                                                    </li>
                                                    <li className="text-very-dark-blue text-sm">
                                                        Contact
                                                    </li>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </ul>
                    <div className="flex flex-row gap-10">
                        <button onClick={() => setCartToggle(prev => !prev)}>
                            <img src="../images/icon-cart.svg" alt="" />
                        </button>
                        {cartToggle && (
                            <AnimatePresence>
                                <Cart />
                            </AnimatePresence>
                        )}
                        <div>
                            <img
                                className="w-12"
                                src="../images/image-avatar.png"
                                alt=""
                            />
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
