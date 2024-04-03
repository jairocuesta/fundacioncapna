// Next
import Image from 'next/image';
// Components
import Button from '../Button/Index';
// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomePrograms() {
    return (
        <div className={`relative w-full h-[600px] overflow-x-clip`}>
            <div className={`${styles.programBackground}`}></div>
            <div className={"grid grid-cols-3 h-full"}>
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
            </div>
            <div className={"absolute w-full h-full top-0 left-0 z-10"}>
                <div className={"grid place-content-center gap-20 w-full h-full text-white px-5"}>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .1, duration: .5 }}
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
                        viewport={{ once: true }}
                        transition={{ delay: .2, duration: .5 }}
                        className={"relative flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"}
                    >
                        <Button 
                            href={"#"}
                            text={"Conoce más"}
                            type={"white"}
                        />
                        <Button
                            href={"#"}
                            text={"Quiero donar"}
                            type={"main"}
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}