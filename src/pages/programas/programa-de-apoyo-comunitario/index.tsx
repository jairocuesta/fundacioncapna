// Components
import Layout from "@/components/Layout";
// Next
import Image from "next/image";
// Styles
import styles from './Index.module.css';

export default function ProgramExample() {
    return (
        <Layout title={"Programa de ejemplo"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <h1 className={"text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                        <div>Programa de</div> 
                        <div><span className={"font-bold"}> Apoyo Comunitario</span></div>
                    </h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}></span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Trabajamos de la mano con líderes comunitarios que nos ayudan a identificar las necesidades y desafíos
                            de las comunidades. A través de esta colaboración, proporcionamos recursos, prestación de servicios y
                            actividades que apuntan a fortalecer y mejorar la comunidad en múltiples aspectos, apuntando siempre al
                            enfoque de desarrollo y bienestar.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}