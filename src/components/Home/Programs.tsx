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
                <Link href={"/conservacion-ambiental"} className={"overflow-hidden h-full"}>
                    <div className={`${styles.imageScale} relative h-full`}>
                        <div className={``}></div>
                        <div className={`${styles.programImageContainer}`}>
                            <Image src={"/home/programs/1.webp"} className={`${styles.programImage}`} fill loading={'eager'} alt={"Programs image"} />
                            <div className={"absolute top-0 left-0 w-full h-full grid place-content-center text-white z-10"}>
                                <h4 className={"text-xl font-bold futura-light-regular"}>Conservación ambiental</h4>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/desarrollo-social"} className={"overflow-hidden h-full"}>
                    <div className={`${styles.imageScale} relative h-full`}>
                        <div className={``}></div>
                        <div className={`${styles.programImageContainer}`}>
                            <Image src={"/home/programs/2-1.webp"} className={`${styles.programImage}`} fill loading={'eager'} alt={"Programs image"} />
                            <div className={"absolute top-0 left-0 w-full h-full grid place-content-center text-white z-10"}>
                                <h4 className={"text-xl font-bold futura-light-regular"}>Desarrollo social</h4>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/sostenibilidad/estrategia"} className={"overflow-hidden h-full"}>
                    <div className={`${styles.imageScale} relative h-full sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-4 xl:row-end-auto xl:row-start-auto xl:col-start-auto xl:col-end-auto`}>
                        <div className={``}></div>
                        <div className={`${styles.programImageContainer}`}>
                            <Image src={"/home/programs/3.webp"} className={`${styles.programImage}`} fill loading={'eager'} alt={"Programs image"} />
                            <div className={"absolute top-0 left-0 w-full h-full grid place-content-center text-white z-10"}>
                                <h4 className={"text-xl font-bold futura-light-regular"}>Sostenibilidad</h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}