// Next
import Image from 'next/image';
// Components
import Button from '../Button/Index';
// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePrograms() {
    return (
        <div className={`relative w-full overflow-x-clip pb-2 px-2`}>
            <div className={`absolute w-full h-full`}></div>
            <div className={"grid grid-rows-3 grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 xl:grid-rows-1 xl:grid-cols-3 gap-2 sm:h-[2100px] xl:h-[700px]"}>
                <Link href={"#"} className={"overflow-hidden h-full"}>
                    <div className={"relative h-full"}>
                        <div className={``}></div>
                        <div className={`${styles.programImageContainer}`}>
                            <Image src={"/home/programs/1.webp"} className={`${styles.programImage}`} fill loading={'eager'} alt={"Programs image"} />
                            <div className={"absolute top-0 left-0 w-full h-full grid place-content-center text-white z-10"}>
                                <h4 className={"text-xl font-bold text-shadow"}>Conservación ambiental</h4>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"#"} className={"overflow-hidden h-full"}>
                    <div className={"relative h-full"}>
                        <div className={``}></div>
                        <div className={`${styles.programImageContainer}`}>
                            <Image src={"/home/programs/2-1.webp"} className={`${styles.programImage}`} fill loading={'eager'} alt={"Programs image"} />
                            <div className={"absolute top-0 left-0 w-full h-full grid place-content-center text-white z-10"}>
                                <h4 className={"text-xl font-bold text-shadow"}>Desarrollo social</h4>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"#"} className={"overflow-hidden h-full"}>
                    <div className={"relative h-full sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-4 xl:row-end-auto xl:row-start-auto xl:col-start-auto xl:col-end-auto"}>
                        <div className={``}></div>
                        <div className={`${styles.programImageContainer}`}>
                            <Image src={"/home/programs/3.webp"} className={`${styles.programImage}`} fill loading={'eager'} alt={"Programs image"} />
                            <div className={"absolute top-0 left-0 w-full h-full grid place-content-center text-white z-10"}>
                                <h4 className={"text-xl font-bold text-shadow"}>Sostenibilidad</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            {/* <div className={"absolute w-full h-full top-0 left-0 z-10"}>
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
            </div> */}
        </div>
    )
}