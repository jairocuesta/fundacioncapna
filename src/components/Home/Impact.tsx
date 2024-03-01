// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomeImpact() {
    return (
        <div className={`${styles.impactContainer} py-32 w-full`}>
            <div className={"grid place-content-center gap-10 text-center max-w-[63rem] mx-auto"}>
                <motion.div
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .1 }}
                    className={"relative flex flex-col gap-5"}
                >
                    <h2 className={"text-3xl text-white"}>Nuestro <span className={"font-bold"}>impacto</span></h2>
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
                    className={"relative hidden lg:flex flex-row items-center gap-y-10 mx-10"}
                >
                    <div className={"text-white px-4 border-l-2 border-r-2 max-w-[11rem]"}>
                        <span className={"font-bold text-2xl"}>+34K</span>
                        <p>Injected humour and the like. Lorem ipsus</p>
                    </div>
                    <div className={"text-white px-4 border-r-2 max-w-[11rem]"}>
                        <span className={"font-bold text-2xl"}>+34K</span>
                        <p>Injected humour and the like. Lorem ipsus</p>
                    </div>
                    <div className={"text-white px-4 border-r-2 max-w-[11rem]"}>
                        <span className={"font-bold text-2xl"}>+34K</span>
                        <p>Injected humour and the like. Lorem ipsus</p>
                    </div>
                    <div className={"text-white px-4 border-r-2 max-w-[11rem]"}>
                        <span className={"font-bold text-2xl"}>+34K</span>
                        <p>Injected humour and the like. Lorem ipsus</p>
                    </div>
                    <div className={"text-white px-4 border-r-2 max-w-[11rem]"}>
                        <span className={"font-bold text-2xl"}>+34K</span>
                        <p>Injected humour and the like. Lorem ipsus</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .2 }}
                    className={"relative flex lg:hidden flex-col items-center gap-y-10 mx-5 sm:mx-10"}
                >
                    <div className={"flex items-center"}>
                        <div className={"text-white px-4 border-l-2 border-r-2 max-w-[11rem]"}>
                            <span className={"font-bold text-2xl"}>+34K</span>
                            <p>Injected humour and the like. Lorem ipsus</p>
                        </div>
                        <div className={"text-white px-4 border-r-2 max-w-[11rem]"}>
                            <span className={"font-bold text-2xl"}>+34K</span>
                            <p>Injected humour and the like. Lorem ipsus</p>
                        </div>
                    </div>
                    <div className={"flex items-center"}>
                        <div className={"text-white px-4 border-l-2 lg:border-l-0 border-r-2 max-w-[11rem]"}>
                            <span className={"font-bold text-2xl"}>+34K</span>
                            <p>Injected humour and the like. Lorem ipsus</p>
                        </div>
                        <div className={"text-white px-4 border-r-2 max-w-[11rem]"}>
                            <span className={"font-bold text-2xl"}>+34K</span>
                            <p>Injected humour and the like. Lorem ipsus</p>
                        </div>
                    </div>
                    <div className={"flex items-center"}>
                        <div className={"text-white px-4 border-l-2 border-r-2 max-w-[11rem]"}>
                            <span className={"font-bold text-2xl"}>+34K</span>
                            <p>Injected humour and the like. Lorem ipsus</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}