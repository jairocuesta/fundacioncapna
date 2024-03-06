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
                        <div>Programa de</div>
                        <div><span className={"font-bold"}>monitoreo de salud arrecifal y de enfermedades de coral</span></div>
                    </h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Monitoreando la salud de los arrecifes de Cap Cana y del SAMAR</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Debido a la importancia de los arrecifes coralinos, los rápidos cambios y el deterioro que están
                            experimentando hoy en día, es fundamental darle seguimiento al estado de salud de estos ecosistemas
                            para documentar si están degradándose, estables o recuperándose, así como para comprender las
                            causas y los efectos de su estado a escala local, regional y global. Como parte del Plan Operativo
                            Anual del <Link className="link" href={'#'}>Santuario Marino Arrecifes del Sureste {'(SAMAR)'}</Link>,
                            dos veces al año semonitorea la salud de los arrecifes de coral de esta área protegida. Nuestro programa de monitoreo se enfoca en la Zona Centro del SAMAR, pero en realidad se trata de un esfuerzo conjunto que se está
                            realizando paralelamente por los demás co-manejantes en las otras dos zonas del santuario también,
                            utilizando un mismo protocolo unificado para la colecta de datos. En estos monitoreos, se levanta un
                            conjunto de variables, tales como la biomasa de peces, la cobertura bentónica, la densidad de reclutas
                            de coral, de erizos y otros invertebrados. La información científica levantada se utiliza para apoyar la
                            toma de decisiones para el manejo y rehabilitación de los arrecifes del SAMAR.
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
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Un esfuerzo conjunto a nivel nacional para monitorear las enfermedades de coral</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Además de monitorear la salud arrecifal, también monitoreamos la prevalencia de enfermedades y
                            blanqueamiento en corales pétreos. El incremento de la temperatura en los océanos ha ocasionado que
                            los fenómenos de blanqueamiento de corales sean cada vez más frecuentes y graves, lo que, a su vez,
                            ha aumentado la susceptibilidad de los corales pétreos a infecciones oportunistas y, por ende, ha
                            incrementado la prevalencia de enfermedades emergentes y la mortalidad en estas especies.
                            Monitorear esta prevalencia es prioritario para construir una base sólida de información científica
                            sobre el estatus de enfermedades y eventos de blanqueamiento en los arrecifes de coral de la
                            República Dominicana, que permita contribuir a la implementación de acciones efectivas de manejo
                            del ecosistema arrecifal. Este monitoreo se realiza tres veces al año a nivel nacional en conjunto con
                            las demás organizaciones pertenecientes a la Comisión de Enfermedades de la <Link className="link" href={'#'}>Red Arrecifal Dominicana</Link> y forma parte del <Link className="link" href={'#'}>Plan para el Estudio de la Epizootiología de Corales</Link>.
                        </p>
                    </div>
                </div>
                
                <div className={`flex items-end ${styles.thirdImage} h-[25rem] text-white px-5`}>
                    <div className={"flex flex-col justify-center items-center gap-10 h-full w-full text-center"}>
                        <h2 className={"text-xl sm:text-[1.7rem] sm:leading-9"}>
                            <div>Te invitamos a <span className={"font-bold"}>ser parte de<br /> nuestra misión</span> de conservación</div>
                        </h2>
                        <button className={"bg-white text-[#7D8034] font-semibold py-2 px-5 sm:px-10 rounded-full text-sm sm:text-base"}>¿Cómo puedo ayudar?</button>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Monitoreo de Salud Arrecifal y de Enfermedades de Coral,
                            estás contribuyendo a generar información científica acerca de los arrecifes coralinos de Cap Cana y
                            del SAMAR. Descubre la complejidad y la importancia de nuestros ecosistemas arrecifales.
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