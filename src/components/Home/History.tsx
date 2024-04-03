// Next
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from './Home.module.css';
// Animations
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function HomeHistory() {

    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        if(showModal) {
            document.body.style.overflowY = 'auto';
        } else {
            document.body.style.overflowY = 'hidden';
        }

        setShowModal(!showModal)
    };

    return (
        <div className={"relative flex items-start gap-20 w-full lg:w-3/4 2xl:w-1/2 mx-auto overflow-x-clip py-40"}>
            <motion.div
                initial={{ bottom: '-50px', opacity: 0 }}
                whileInView={{ bottom: '0px', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .1, duration: .5 }}
                className={"relative flex flex-col items-center lg:items-start text-center lg:text-left gap-8 w-full md:w-2/3 lg:w-1/2 mx-auto lg:mx-0 px-5 sm:px-10 md:px-0"}
            >
                <div className={"relative"}>
                    <div className={"w-11 h-11 bg-[#7d80342a] rounded-full"}></div>
                    <div className={"absolute top-3 left-3"}>
                        <FlowerSVG />
                    </div>
                </div>
                <div className={"flex flex-col items-center lg:items-start gap-3"}>
                    <div className={"text-xl"}>Nuestra <span className={"font-semibold text-[#7D8034]"}>historia</span></div>
                    <p>Desde los inicios de su desarrollo, Cap Cana,
                        S.A.,
                        la empresa desarrolladora de la Ciudad
                        Destino ha venido realizando una ardua
                        labor para la preservación
                        de toda la riqueza
                        natural que dota este destino turístico, hotelero
                        y residencial.
                    </p>
                    <button onClick={handleShowModal} className={"flex items-center gap-2 font-semibold text-[#7D8034] text-sm"}>
                        <span className={"link"}>VER MÁS</span>
                        <i className="fa-solid fa-angle-right text-base"></i>
                    </button>
                </div>
            </motion.div>
            <div className={"w-1/2 hidden lg:block"}>
                <motion.div
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .2, duration: .5 }}
                    className={"absolute -top-20 w-1/2"} style={{ transform: 'rotateY(-180deg)' }}
                >
                    <div className={"absolute w-full h-full top-28"} style={{ filter: 'grayscale(100%) contrast(0.05) opacity(.7)' }}>
                        <div className={styles.imageContainer} style={{ left: '2rem' }}>
                            <Image src={"/home/bird.png"} className={styles.image} fill alt={"Bird image"} />
                        </div>
                    </div>
                    <div className={"absolute w-full h-full"}>
                        <div className={styles.imageContainer} style={{ left: '2rem' }}>
                            <Image src={"/home/bird.png"} className={styles.image} fill alt={"Bird image"} />
                        </div>
                    </div>
                </motion.div>
            </div>
            <AnimatePresence>
                {showModal ? (
                    <ShowMoreModal
                        title={"Nuestra historia"}
                        description={"Desde los inicios de su desarrollo, Cap Cana, S.A., la empresa desarrolladora de la Ciudad Destino ha venido realizando una ardua labor para la preservación de toda la riqueza natural que dota este destino turístico, hotelero y residencial."}
                        handleClose={handleShowModal}
                    />
                ) : null}
            </AnimatePresence>
        </div>
    )
}

function FlowerSVG() {
    return (
        <svg width="60" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 22.5C36 19.83 36.7918 17.2199 38.2752 14.9998C39.7586 12.7797 41.867 11.0494 44.3338 10.0276C46.8006 9.00585 49.515 8.7385 52.1337 9.2594C54.7525 9.78031 57.1579 11.0661 59.0459 12.9541C60.934 14.8421 62.2197 17.2475 62.7406 19.8663C63.2615 22.485 62.9942 25.1994 61.9724 27.6662C60.9506 30.133 59.2203 32.2414 57.0002 33.7248C54.7801 35.2082 52.1701 36 49.5 36M36 22.5C36 19.83 35.2082 17.2199 33.7248 14.9998C32.2414 12.7797 30.133 11.0494 27.6662 10.0276C25.1994 9.00585 22.485 8.7385 19.8663 9.2594C17.2475 9.78031 14.8421 11.0661 12.9541 12.9541C11.0661 14.8421 9.78031 17.2475 9.2594 19.8663C8.7385 22.485 9.00585 25.1994 10.0276 27.6662C11.0494 30.133 12.7797 32.2414 14.9998 33.7248C17.2199 35.2082 19.83 36 22.5 36M36 22.5V27M49.5 36C52.1701 36 54.7801 36.7918 57.0002 38.2752C59.2203 39.7586 60.9506 41.867 61.9724 44.3338C62.9942 46.8006 63.2615 49.515 62.7406 52.1337C62.2197 54.7525 60.934 57.1579 59.0459 59.0459C57.1579 60.934 54.7525 62.2197 52.1337 62.7406C49.515 63.2615 46.8006 62.9942 44.3338 61.9724C41.867 60.9506 39.7586 59.2203 38.2752 57.0002C36.7918 54.7801 36 52.1701 36 49.5M49.5 36H45M22.5 36C19.83 36 17.2199 36.7918 14.9998 38.2752C12.7797 39.7586 11.0494 41.867 10.0276 44.3338C9.00585 46.8006 8.7385 49.515 9.2594 52.1337C9.78031 54.7525 11.0661 57.1579 12.9541 59.0459C14.8421 60.934 17.2475 62.2197 19.8663 62.7406C22.485 63.2615 25.1994 62.9942 27.6662 61.9724C30.133 60.9506 32.2414 59.2203 33.7248 57.0002C35.2082 54.7801 36 52.1701 36 49.5M22.5 36H27M36 49.5V45" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36 45C40.9706 45 45 40.9706 45 36C45 31.0294 40.9706 27 36 27C31.0294 27 27 31.0294 27 36C27 40.9706 31.0294 45 36 45Z" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 48L28.5 43.5" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.5 28.5L48 24" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 24L28.5 28.5" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.5 43.5L48 48" stroke="#7D8034" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}


function ShowMoreModal({ title, description, handleClose }: { title: string; description: string; handleClose: () => void }) {
    return (
        <div className={"fixed w-screen h-screen top-0 left-0"} style={{ zIndex: 100 }}>
            <div className={"bg-black opacity-50 w-full h-full absolute left-0 top-0"}></div>
            <div className={"absolute grid place-content-center w-full h-full"}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={"relative w-[90vw] sm:w-[75vw] lg:w-[50vw] h-fit max-h-[80vh] bg-white rounded-xl p-8"}
                >
                    <div className={"flex flex-col gap-6"}>
                        <div className={"flex items-center justify-between text-[#7D8034]"}>
                            <h3 className={"text-2xl font-semibold"}>{title}</h3>
                            <button onClick={handleClose}><i className="fa-solid fa-xmark text-3xl"></i></button>
                        </div>
                        <p className={""}>{description}</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}