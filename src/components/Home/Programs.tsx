// Next
import Image from 'next/image';
// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomePrograms() {
    return (
        <div className={`relative w-full h-full`}>
            <div className={`${styles.programBackground}`}></div>
            <div className={"grid grid-cols-2 grid-rows-2"}>
                <div>
                    <div className={`${styles.programImageContainer}`}>
                        <Image src={"/home/programs/1.jpeg"} className={`${styles.programImage}`} fill alt={"Programs image"} />
                    </div>
                </div>
                <div>
                    <div className={`${styles.programImageContainer}`}>
                        <Image src={"/home/programs/2.jpeg"} className={`${styles.programImage}`} fill alt={"Programs image"} />
                    </div>
                </div>
                <div>
                    <div className={`${styles.programImageContainer}`}>
                        <Image src={"/home/programs/3.jpeg"} className={`${styles.programImage}`} fill alt={"Programs image"} />
                    </div>
                </div>
                <div>
                    <div className={`${styles.programImageContainer}`}>
                        <Image src={"/home/programs/4.jpeg"} className={`${styles.programImage}`} fill alt={"Programs image"} />
                    </div>
                </div>
            </div>
            <div className={"absolute w-full h-full top-0 left-0 z-10"}>
                <div className={"grid place-content-center gap-20 w-full h-full text-white px-5"}>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .1 }}
                        className={"relative flex flex-col gap-7"}
                    >
                        <h2 className={"text-center text-3xl md:text-[2.5rem]"}>Conoce nuestros <span className={"font-bold text-[#AFA96E]"}>programas</span></h2>
                        <div className={"flex items-center justify-center gap-1"}>
                            <div className={"h-[2px] w-8 bg-white"}></div>
                            <div className={"h-[2px] w-8 bg-white"}></div>
                            <div className={"h-[2px] w-8 bg-white"}></div>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .2 }}
                        className={"relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"}
                    >
                        <button className={"w-52 py-2 font-medium bg-white text-[#AFA96E] rounded-full border border-white"}>Conoce más</button>
                        <button className={"w-52 py-2 font-medium bg-[#AFA96E] text-white rounded-full border border-white"}>Quiero donar</button>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}