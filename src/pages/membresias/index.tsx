// Components
import Layout from "@/components/Layout";
import Button from "@/components/Button/Index";
// Styles
import styles from './index.module.css'
// Animations
import { motion } from 'framer-motion'

export default function Memberships() {
    return (
        <Layout title={"Membresías"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1 
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>
                            Donaciones
                        </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-3"}>
                    <motion.div
                        initial={{ left: '-30px', opacity: 0 }}
                        whileInView={{ left: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .1, duration: .5 }}
                        className={`relative flex flex-col justify-between ${styles.secondImage} py-12 text-white px-5 sm:px-8 md:px-12 gap-32`}
                    >
                        <h3 className={"flex flex-col items-center text-center text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>
                            <span>Membresía</span>
                            <span>empresarial</span>
                        </h3>
                        <div className={"flex flex-col items-center gap-5"}>
                            <p className={"text-center"}>
                                ¿Deseas que tu empresa tenga compromiso con la sostenibilidad y la conservación de su entorno
                                natural? Al unirte a esta membresía, recibirá apoyo y asesoramiento y además podrá disfrutar de
                                beneficios exclusivos.
                            </p>
                            <Button
                                href={"#"}
                                text={"Conviértete en miembro"}
                                type={"white"}
                            />
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ left: '-30px', opacity: 0 }}
                        whileInView={{ left: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .2, duration: .5 }}
                        className={`relative flex flex-col justify-between ${styles.thirdImage} py-12 text-white px-5 sm:px-8 md:px-12 gap-32`}
                    >
                        <h3 className={"flex flex-col items-center text-center text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>
                            <span>Membresía</span>
                            <span>personal</span>
                        </h3>
                        <div className={"flex flex-col items-center gap-5"}>
                            <p className={"text-center"}>
                                ¿Quieres aportar de manera individual? Conviértete en un voluntario asociado
                            </p>
                            <Button
                                href={"#"}
                                text={"Conviértete en miembro"}
                                type={"white"}
                            />
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ left: '-30px', opacity: 0 }}
                        whileInView={{ left: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={`relative flex flex-col justify-between ${styles.fourImage} py-12 text-white px-5 sm:px-8 md:px-12 gap-32`}
                    >
                        <h3 className={"flex flex-col items-center text-center text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>
                            <span>Donación</span>
                            <span>única</span>
                        </h3>
                        <div className={"flex flex-col items-center gap-5"}>
                            <p className={"text-center"}>
                                Una sola acción es valiosa para nosotros, aporta una única vez.
                            </p>
                            <Button
                                href={"#"}
                                text={"Donar ahora"}
                                type={"white"}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </Layout>
    )
}