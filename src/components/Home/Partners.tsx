// Next
import Image from 'next/image';
// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomePartners() {
    return (
        <div className={"flex flex-col gap-28 bg-[#F9F9F9] overflow-x-clip py-28"}>
            <div className={`flex flex-col gap-20 mx-auto max-w-7xl px-5`}>
                <div className={"grid place-content-center gap-8 text-center mx-auto"}>
                    <motion.div 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .1, duration: .5 }}
                        className={"relative flex flex-col gap-5"}
                    >
                        <h2 className={"relative text-3xl font-bold text-[#AFA96E]"}>Alianzas Corporativas</h2>
                        <div className={"flex items-center justify-center gap-1"}>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                        </div>
                    </motion.div>
                    {/* <motion.p 
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .2, duration: .5 }}
                        className={"relative"}
                    >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.`}</motion.p> */}
                </div>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .3, duration: .5 }}
                    className={"relative flex flex-col gap-10"}
                >
                    <div className={"grid grid-cols-4 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_01.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_02.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_03.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_04.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                    </div>
                    <div className={"grid grid-cols-4 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_05.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_06.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_07.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/alianzas/coorporativas/logo_08.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                    </div>
                </motion.div>
            </div>
            {/* <div className={`flex flex-col gap-20 mx-auto max-w-7xl px-5`}>
                <div className={"grid place-content-center gap-8 text-center mx-auto"}>
                    <motion.div
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .1, duration: .5 }}
                        className={"relative flex flex-col gap-5"}
                    >
                        <h2 className={"relative text-3xl font-bold text-[#AFA96E]"}>Miembros Asociados</h2>
                        <div className={"flex items-center justify-center gap-1"}>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .3, duration: .5 }}
                    className={"relative flex flex-col gap-10"}
                >
                    <div className={"grid grid-cols-5 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/svg.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/autotrac.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/vector.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                    </div>
                    <div className={"grid grid-cols-5 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/autotrac.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/vector.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/svg.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image loading={'eager'} src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                    </div>
                </motion.div>
            </div> */}
        </div>
    )
}