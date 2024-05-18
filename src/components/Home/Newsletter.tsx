// Styles
import Image from 'next/image'
import styles from './Home.module.css'
// Animations
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HomeNewsletter() {
    return (
        <div className={"overflow-hidden h-[35rem]"}>
            <Link href={"#"} className={"text-white h-[35rem]"}>
                <div className={`${styles.imageScale} relative h-full`}>
                    <div className={``}></div>
                    <div className={`${styles.programImageContainer}`}>
                        <Image src={"/newsletter/background.webp"} className={`${styles.programImage}`} fill loading={'eager'} alt={"Programs image"} />
                        <div className={"absolute top-0 left-0 w-full h-full grid place-content-center text-white z-10"}>
                            <h2 className={"futura-light-regular flex flex-col items-center gap-2 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                                <span className={"relative -bottom-[2px]"}>Suscribete a nuestro</span>
                                <span className={"font-bold"}>newsletter</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}