import Layout from "@/components/Layout";
import styles from './index.module.css'
import { TextSlider } from "@/components/Sliders";

export default function Alliances() {
    return (
        <Layout title={"Aliansas"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <h1 className={"flex items-center gap-3 text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                        <span>Alianzas</span>
                        <span className={"font-bold"}>corporativas</span>
                    </h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
                </div>
                <div className={"flex flex-col"}>
                    <div className={"py-20 px-5 sm:px-16"}>
                        <p className={"text-center max-w-5xl mx-auto"}>
                            Creemos en el poder de la colaboración para  lograr un impacto más significativo en la
                            conservación ambiental. A través de alianzas estratégicas con organizaciones, instituciones y empresas
                            comprometidas con la preservación del medio ambiente, hemos forjado un camino  hacia un futuro más
                            sostenible.
                        </p>
                    </div>
                    <TextSlider />
                </div>
            </div>
        </Layout>
    )
}