// Components
import Layout from "@/components/Layout";
// Next
import Image from "next/image";
// Styles
import styles from './Index.module.css';
import Link from "next/link";

export default function ProgramExample() {
    return (
        <Layout title={"Programa de ejemplo"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <h1 className={"text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                        <div>Programa Atención Primaria</div> 
                        <div><span className={"font-bold"}>Fauna Silvestre</span></div>
                    </h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Rescatando los animales silvestres de Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            A menudo aparecen animales silvestres heridos, enfermos, desplazados o juveniles que han quedado
                            huérfanos. Nuestro programa se dedica a rescatar, rehabilitar y liberar la vida silvestre nativa devuelta
                            a la naturaleza.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Brindando atención primaria</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Recibimos animales traídos o reportados a la Fundación y le brindamos atención primaria en
                            situaciones de emergencia que comprometan la vida del animal.
                        </p>
                    </div>
                </div>
                <div className={`flex items-end ${styles.secondImage} lg:h-[30rem] text-white px-5 lg:px-52 text-center lg:text-left py-20 lg:py-0`}>
                    <div className={"flex flex-col gap-12 lg:gap-5 lg:pb-24"}>
                        <div className={"flex flex-col gap-4 lg:w-2/3"}>
                            <h2 className={"text-xl sm:text-[1.7rem] font-medium"}>Frase para esta imagen que irá aquí </h2>
                            <p className={"text-sm sm:text-base"}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}</p>
                            <div className={"flex items-center justify-center lg:justify-start gap-2"}>
                                <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                                <div className={"h-1 w-12 bg-white rounded-full"}></div>
                                <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                                <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                            </div>
                        </div>
                        <div className={"flex items-center justify-center lg:justify-end gap-5"}>
                            <button>
                                <i className="fa-light fa-circle-arrow-left text-[2rem]"></i>
                            </button>
                            <button>
                                <i className="fa-light fa-circle-arrow-right text-[2rem]"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Reubicando ejemplares en situación de riesgo</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            En ocasiones nos reportan nidos o ejemplares en situación de riesgo que necesitan ser reubicados, ya
                            sea para su propia protección y/o la protección de los seres humanos, por lo que nos encargamos de
                            trasladar los animales a un hábitat seguro. En todos los casos, respondemos según requerimientos de
                            manejo de especies por parte del Ministerio de Medio Ambiente.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Reporta a través de la línea directa de rescate de vida silvestre</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Reporta animales silvestres heridos, enfermos, desplazados, que hayan quedado huérfanos o que se
                            encuentren en situación de riesgo, llamando al <a className="link" href="tel:+18096691392">{'+1 (809) 669-1392'}</a>, alternativamente al <a className="link" href="tel:+18094697241">{'+1 (809)469-7241'}</a>. También puedes escribir al correo <a className="link" href="mailto:info@fundacioncapcana.org">info@fundacioncapcana.org</a>.
                        </p>
                    </div>
                </div>
                <div className={`flex items-end ${styles.thirdImage} h-[25rem] text-white px-5`}>
                    <div className={"flex flex-col justify-center items-center gap-10 h-full w-full text-center"}>
                        <h2 className={"text-xl sm:text-[1.7rem] sm:leading-9"}>
                            <div>Te invitamos a <span className={"font-bold"}>ser parte de<br/> nuestra misión</span> de conservación</div>
                        </h2>
                        <button className={"bg-white text-[#7D8034] font-semibold py-2 px-5 sm:px-10 rounded-full text-sm sm:text-base"}>¿Cómo puedo ayudar?</button>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Atención Primaria a Fauna Silvestre, estás contribuyendo a la
                            protección de la diversidad de fauna única de Cap Cana, el este y República Dominicana. Descubre la
                            belleza y la importancia de nuestros animales.
                        </p>
                    </div>
                </div>
                <div className={`max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 w-full`}>
                    <div className={`${styles.fourImage} grid place-content-center w-full h-[10rem] sm:h-[20rem] rounded-2xl`}>
                        <button className={"bg-[#7D8034] text-white py-2 px-5 sm:px-10 rounded-full font-semibold text-sm sm:text-base"}>Conviértete en miembro</button>
                    </div>
                </div>

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}