// Next
import Image from 'next/image';
// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomeVisionMision() {
    return (
        <div className={`flex flex-col items-center gap-16 md:gap-28 py-28 w-full max-w-5xl mx-auto px-5 sm:px-10 xl:px-0`}>
            <motion.div
                initial={{ left: '100px', opacity: 0 }}
                whileInView={{ left: '0px', opacity: 1 }}
                transition={{ delay: .15 }}
                className={"relative flex flex-col md:flex-row item-center gap-8 lg:gap-16 text-center md:text-left w-full"}
            >
                <div className={"w-full md:w-1/2"}>
                    <div className={`${styles.imageContainer}`}>
                        <Image src={"/home/flower.jpeg"} className={`${styles.image} rounded-lg`} fill alt={"Flower image"} />
                    </div>
                </div>
                <div className={"flex flex-col justify-center items-center md:items-start gap-5 lg:gap-8 w-full md:w-1/2"}>
                    <div className={"relative scale-75 lg:scale-100"}>
                        <div className={"w-12 h-12 bg-[#7d80342a] rounded-full"}></div>
                        <div className={"absolute top-3 left-3"}>
                            <VisionSVG />
                        </div>
                    </div>
                    <div className={"flex flex-col gap-3"}>
                        <h3 className={"text-lg lg:text-xl"}>Nuestra <span className={"font-semibold text-[#7D8034]"}>visión</span></h3>
                        <p className={"text-sm lg:text-base"}>Involucrarnos en labores y proyectos de rescate
                            y conservación con el propósito de convertir a
                            Cap Cana
                            en un destino completamente
                            eco-amigable.
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ left: '-100px', opacity: 0 }}
                whileInView={{ left: '0px', opacity: 1 }}
                transition={{ delay: .3 }}
                className={"relative flex flex-col-reverse md:flex-row item-center gap-8 lg:gap-16 text-center md:text-left w-full"}
            >
                <div className={"flex flex-col justify-center items-center md:items-start gap-5 lg:gap-8 w-full md:w-1/2"}>
                    <div className={"relative scale-75 lg:scale-100"}>
                        <div className={"w-12 h-12 bg-[#7d80342a] rounded-full"}></div>
                        <div className={"absolute top-3 left-3"}>
                            <MisionSVG />
                        </div>
                    </div>
                    <div className={"flex flex-col gap-3"}>
                        <h3 className={"text-lg lg:text-xl"}>Nuestra <span className={"font-semibold text-[#7D8034]"}>misión</span></h3>
                        <p className={"text-sm lg:text-base"}>Garantizar el mantenimiento de las diversas
                            especies endémicas y áreas protegidas para
                            que puedan ser
                            disfrutadas de manera
                            sostenible a través del tiempo.
                        </p>
                    </div>
                </div>
                <div className={"w-full md:w-1/2"}>
                    <div className={`${styles.imageContainer}`}>
                        <Image src={"/home/lions.jpeg"} className={`${styles.image} rounded-lg`} fill alt={"Flower image"} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

function VisionSVG() {
    return (
        <svg width="60" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36 39.5V6.5L60 18.5L36 30.5" stroke="#7D8034" strokeWidth="4.32" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M61.6503 31.19C63.2468 36.1104 63.3961 41.3859 62.0807 46.3888C60.7652 51.3916 58.0402 55.9113 54.23 59.4101C50.4198 62.9088 45.6847 65.2394 40.588 66.1245C35.4914 67.0096 30.2477 66.412 25.481 64.4027C20.7142 62.3934 16.625 59.0571 13.6998 54.7907C10.7746 50.5243 9.13652 45.5074 8.98054 40.3368C8.82456 35.1662 10.1572 30.0597 12.8199 25.6247C15.4826 21.1897 19.3633 17.6129 24.0003 15.32" stroke="#7D8034" strokeWidth="4.32" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24.0003 30.5C22.497 32.5011 21.5184 34.8465 21.1534 37.3226C20.7885 39.7987 21.049 42.3267 21.9111 44.6763C22.7732 47.026 24.2096 49.1226 26.0893 50.7751C27.969 52.4276 30.2324 53.5835 32.6731 54.1375C35.1139 54.6915 37.6544 54.6259 40.0634 53.9468C42.4723 53.2676 44.673 51.9965 46.465 50.2492C48.2569 48.502 49.5832 46.3341 50.323 43.9431C51.0627 41.5521 51.1925 39.014 50.7003 36.56" stroke="#7D8034" strokeWidth="4.32" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function MisionSVG() {
    return (
        <svg width="60" height="60" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 66.5V12.5C18 10.9087 18.6321 9.38258 19.7574 8.25736C20.8826 7.13214 22.4087 6.5 24 6.5H48C49.5913 6.5 51.1174 7.13214 52.2426 8.25736C53.3679 9.38258 54 10.9087 54 12.5V66.5H18Z" stroke="#7D8034" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18 36.5H12C10.4087 36.5 8.88258 37.1321 7.75736 38.2574C6.63214 39.3826 6 40.9087 6 42.5V60.5C6 62.0913 6.63214 63.6174 7.75736 64.7426C8.88258 65.8679 10.4087 66.5 12 66.5H18" stroke="#7D8034" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M54 27.5H60C61.5913 27.5 63.1174 28.1321 64.2426 29.2574C65.3679 30.3826 66 31.9087 66 33.5V60.5C66 62.0913 65.3679 63.6174 64.2426 64.7426C63.1174 65.8679 61.5913 66.5 60 66.5H54" stroke="#7D8034" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 18.5H42" stroke="#7D8034" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 30.5H42" stroke="#7D8034" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 42.5H42" stroke="#7D8034" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M30 54.5H42" stroke="#7D8034" strokeWidth="4.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}