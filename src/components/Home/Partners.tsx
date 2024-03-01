// Next
import Image from 'next/image';
// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomePartners() {
    return (
        <div className={"bg-[#F9F9F9] overflow-x-clip"}>
            <div className={`flex flex-col gap-20 py-28 mx-auto max-w-7xl px-5`}>
                <div className={"grid place-content-center gap-8 text-center mx-auto"}>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .1 }}
                        className={"relative flex flex-col gap-5"}
                    >
                        <h2 className={"relative text-3xl"}>Nuestros <span className={"font-bold text-[#AFA96E]"}>aliados</span></h2>
                        <div className={"flex items-center justify-center gap-1"}>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                        </div>
                    </motion.div>
                    <motion.p 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        transition={{ delay: .2 }}
                        className={"relative"}
                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.`}</motion.p>
                </div>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .3 }}
                    className={"relative flex flex-col gap-10"}
                >
                    <div className={"grid grid-cols-5 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/svg.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/autotrac.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/vector.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} /> 
                        </div>
                    </div>
                    <div className={"grid grid-cols-5 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/autotrac.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/vector.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/svg.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}