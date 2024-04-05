// Styles
import styles from './Home.module.css'
// Button
import Button from "@/components/Button/Index";
// Animations
import { motion } from 'framer-motion'

export default function HomeNewsletter() {
    return (
        <div className={`flex items-center ${styles.newsletterImage} h-[35rem] text-white`}>
            <motion.div
                initial={{ bottom: '-30px', opacity: 0 }}
                whileInView={{ bottom: '0px', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: .3, duration: .5 }}
                className={"relative flex flex-col items-center gap-12 max-w-4xl mx-auto px-5"}
            >
                <div className={"flex flex-col items-center gap-5"}>
                    <h2 className={"flex flex-col items-center gap-2 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                        <span className={"relative -bottom-[2px]"}>Suscribete a nuestro</span>
                        <span className={"font-bold"}>newsletter</span>
                    </h2>
                    <div className={"flex items-center justify-center gap-2"}>
                        <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                        <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                        <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                    </div>
                </div>
                {/* <p className={"text-center text-white"}>
                    Recibe las últimas noticias de conservación, eventos emocionantes y consejos para un estilo de
                    vida más sostenible directamente en tu bandeja de entrada. ¡No te pierdas ni un solo momento de nuestra
                    misión! Suscríbete ahora.
                </p> */}
                <Button
                    href={"#"}
                    text={"Inscríbete ahora"}
                    type={"white"}
                />
            </motion.div>
        </div>
    )
}