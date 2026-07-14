import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useCart } from "./context/CartContext";

function App() {
    const [count, setCount] = useState(0);
    const [mainImage, setMainImage] = useState(0);
    const [lightBox, setlightBox] = useState({ status: false, index: 0 });

    const { cartItems, setCartItems, cartToggle, setCartToggle } = useCart();

    const images = [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg",
    ];
    const imagesThumbnail = [
        "image-product-1-thumbnail.jpg",
        "image-product-2-thumbnail.jpg",
        "image-product-3-thumbnail.jpg",
        "image-product-4-thumbnail.jpg",
    ];



    useEffect(() => {
        function rightArrow (e) {
            if (e.key === "ArrowRight") {
                e.preventDefault()
                setlightBox(prev => {
                    if (prev.index + 1 === imagesThumbnail.length) {
                        return {...prev, index:0}
                    }
                    return {...prev, index:prev.index + 1}
                })
            }
            
        }
        function leftArrow (e) {
            if (e.key === "ArrowLeft") {
                e.preventDefault()
                setlightBox(prev => {
                    if (prev.index - 1 < 0) {
                        return {...prev, index:imagesThumbnail.length - 1}
                    }
                    return {...prev, index:prev.index - 1}
                })
            }
            
        }
        window.addEventListener('keydown',rightArrow)
        window.addEventListener('keydown',leftArrow)
      return () => {
        window.removeEventListener('keydown',rightArrow)
        window.removeEventListener('keydown',leftArrow)
      }
    }, [])
    


    return (
        <>
            <Header />

            {/* lighthouse gallary*/}

            <div
                className={` justify-center items-center fixed z-10 top-0 w-full h-svh bg-black/75 ${lightBox.status ? `flex` : `hidden`}`}
            >
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[60%] relative">
                        <div className="mb-4 flex justify-end">
                            <button
                                className="cursor-pointer"
                                onClick={() =>
                                    setlightBox({
                                        status: false,
                                        index: 0,
                                    })
                                }
                            >
                                <img
                                    className="brightness-500 size-5"
                                    src="../images/icon-close.svg"
                                    alt=""
                                />
                            </button>
                        </div>
                        <img
                            className="rounded-xl"
                            src={`../images/${images[lightBox?.index]}`}
                            alt=""
                        />
                        <div className="absolute flex justify-between right-1/2 translate-x-1/2 w-[110%] top-1/2">
                            <button
                                className="cursor-pointer size-12 bg-white rounded-full flex items-center justify-center"
                                onClick={() =>
                                    setlightBox((prev) => {
                                        if (prev.index - 1 < 0) {
                                            return {
                                                ...prev,
                                                index: images.length - 1,
                                            };
                                        }
                                        return {
                                            ...prev,
                                            index: prev.index - 1,
                                        };
                                    })
                                }
                            >
                                <img src="../images/icon-previous.svg" alt="" />
                            </button>
                            <button
                                className="cursor-pointer size-12 bg-white rounded-full flex items-center justify-center"
                                onClick={() =>
                                    setlightBox((prev) => {
                                        if (prev.index + 1 === images.length) {
                                            return { ...prev, index: 0 };
                                        }
                                        return {
                                            ...prev,
                                            index: prev.index + 1,
                                        };
                                    })
                                }
                            >
                                <img src="../images/icon-next.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="w-[50%] mt-5 flex gap-5 ">
                        {imagesThumbnail.map((item, index) => (
                            <button
                                className={`relative w-1/4 rounded-xl overflow-hidden cursor-pointer ${index === lightBox.index ? "border-2 border-p-orange" : ""}`}
                                onClick={() =>
                                    setlightBox({ status: true, index })
                                }
                            >
                                <img src={`../images/${item}`} alt="" />
                                {index === lightBox.index && (
                                    <div className="absolute inset-0 bg-white/50"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="container *:flex-1 flex flex-col md:flex-row justify-between items-center gap-x-10 m-auto md:mt-5 md:p-15 max-w-[1280px]">
                {/* images container */}
                <div className="w-full  md:w-[40%]">
                    {/* Main image */}
                    <div className="">
                        <img
                            className="md:rounded-xl cursor-pointer"
                            src={`../images/${images[mainImage]}`}
                            alt="The main photo of the product"
                            onClick={() =>
                                setlightBox({ status: true, index: mainImage })
                            }
                        />
                    </div>
                    <div className="hidden md:flex gap-8 mt-6 *:cursor-pointer">
                        {images.map((item, index) => {
                            // if (index === 0) {
                            //     return (
                            //         <button className="w-1/4 rounded-xl overflow-hidden relative border-2 border-p-orange">
                            //             <img src={`../images/${item}`} />

                            //         </button>
                            //     );
                            // }

                            if (index === mainImage) {
                                return (
                                    <button
                                        className="w-1/4 rounded-xl overflow-hidden relative border-2 border-p-orange"
                                        onClick={() => {
                                            setMainImage(index);
                                        }}
                                    >
                                        <img src={`../images/${item}`} />
                                        <div className="absolute inset-0 bg-white/50"></div>
                                    </button>
                                );
                            }

                            return (
                                <button
                                    className="w-1/4 rounded-xl overflow-hidden relative"
                                    onClick={() => setMainImage(index)}
                                >
                                    <img src={`../images/${item}`} />
                                </button>
                            );
                        })}
                    </div>
                </div>
                {/* info container */}
                <div className="flex flex-col md:w-1/3 lg:w-1/2 p-4 md:p-0">
                    <h2 className="font-semibold text-dark-grayish-blue mb-2">
                        Sneaker Company
                    </h2>
                    <h1 className="font-bold text-4xl text-very-dark-blue mb-5">
                        Fall Limited Edition Sneakers
                    </h1>
                    <p className="text-dark-grayish-blue my-4.5">
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they’ll withstand everything the weather can offer.
                    </p>
                    <div className="flex flex-row gap-3 items-center my-4.5">
                        <p className="font-bold text-2xl ">$125.00</p>
                        <p className="bg-very-dark-blue rounded text-white py-1 px-2">
                            50%
                        </p>
                    </div>
                    <p className="line-through text-dark-grayish-blue font-semibold">
                        $250.00
                    </p>
                    {/* add to cart + + - */}
                    <div className="flex-col lg:flex-row flex gap-5 my-4.5">
                        <div className="bg-grayish-blue/20 rounded-xl p-2 flex justify-center flex-row gap-5 items-center md:w-fit">
                            <button
                                className="px-2 cursor-pointer"
                                onClick={() =>
                                    setCount((prev) => {
                                        if (prev > 0) {
                                            return prev - 1;
                                        }
                                        return 0;
                                    })
                                }
                            >
                                <img src="../images/icon-minus.svg" alt="" />
                            </button>
                            <p className="mx-4">{count}</p>
                            <button
                                className="px-2 cursor-pointer"
                                onClick={() => setCount((prev) => prev + 1)}
                            >
                                <img src="../images/icon-plus.svg" alt="" />
                            </button>
                        </div>
                        <button
                            className="bg-p-orange rounded-xl py-3 px-15  md:w-fit"
                            onClick={() => {
                                if (!count) {
                                    return;
                                }

                                for (let i = 0; i < cartItems.length; i++) {
                                    const element = cartItems[i];
                                    if (
                                        element.name ===
                                        "Fall Limited Edition Sneakers"
                                    ) {
                                        return setCartItems((prev) =>
                                            prev.map(
                                                (item) =>
                                                    item.name ===
                                                        "Fall Limited Edition Sneakers" && {
                                                        ...item,
                                                        quantity:
                                                            count +
                                                            item.quantity,
                                                    },
                                            ),
                                        );
                                    }
                                }

                                setCartItems((prev) => [
                                    ...prev,
                                    {
                                        name: "Fall Limited Edition Sneakers",
                                        quantity: count,
                                        price: 125,
                                        image: "../images/image-product-1-thumbnail.jpg",
                                    },
                                ]);
                            }}
                        >
                            <div className="flex items-center justify-center gap-x-3">
                                <div>
                                    <img
                                        className="brightness-0 size-[1em]"
                                        src="../images/icon-cart.svg"
                                        alt=""
                                    />
                                </div>
                                <p className="font-semibold inline">
                                    Add to cart
                                </p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <footer className="mt-7 text-center w-full md:absolute md:bottom-0">
                Challenge by{" "}
                <a href="https://www.frontendmentor.io?ref=challenge">
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href="https://portfolio-seven-psi-4fxeefir23.vercel.app/">
                    Yousef
                </a>
                .
            </footer>
        </>
    );
}

export default App;
