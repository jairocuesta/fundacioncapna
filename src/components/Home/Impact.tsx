// Styles
import CounterAnimation from '../Counter/Index';
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomeImpact() {
    return (
        <div className={`${styles.impactContainer} py-32 w-full overflow-x-clip`}>
            <div className={"grid place-content-center gap-10 text-center max-w-[63rem] mx-auto"}>
                <motion.div
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .1, duration: .5 }}
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
                    viewport={{ once: true }}
                    transition={{ delay: .2, duration: .5 }}
                    className={"relative flex flex-col sm:flex-row items-center gap-y-10 mx-10 gap-x-10"}
                >
                    <div className={"text-white max-w-[11rem]"}>
                        <span className={"flex items-center justify-center font-bold text-2xl"}>
                            <CounterAnimation from={0} to={34} />
                        </span>
                        <span className={"futura-light-regular text-lg"}>Especies vistas</span>
                    </div>
                    <div className={"text-white max-w-[11rem]"}>
                        <span className={"flex items-center justify-center font-bold text-2xl"}>
                            <CounterAnimation from={0} to={34} />
                        </span>
                        <span className={"futura-light-regular text-lg"}>Botellas recolectadas</span>
                    </div>
                    <div className={"text-white max-w-[11rem]"}>
                        <span className={"flex items-center justify-center font-bold text-2xl"}>
                            <CounterAnimation from={0} to={34} />
                        </span>
                        <span className={"futura-light-regular text-lg"}>Arboles plantados</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}