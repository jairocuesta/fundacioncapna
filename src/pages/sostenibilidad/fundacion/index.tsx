// Next
import Image from "next/image";
// Components
import Layout from "@/components/Layout";
import { TextSlider } from "@/components/Sliders";
// Styles
import styles from './Index.module.css';
// Animations
import { motion } from "framer-motion";
import Link from "next/link";
import Subtitle from "@/components/Subtitle";

export default function SustainabilityStrategy() {
    return (
        <Layout title={"Estrategia de sostenibilidad"}>
            <div className={"flex flex-col gap-4 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-shadow"}
                    >
                        <div className={"font-bold"}>Sostenibilidad fundación</div>
                        <div>Cap Cana</div>
                    </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>
                <div className={"flex flex-col py-16 gap-4"}>
                    <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                        <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                            <p>
                                La ciudad destino Cap Cana se distingue por su compromiso con la sostenibilidad a través de su infraestructura 
                                resiliente y sus iniciativas que promueven el cuidado del medio ambiente, la eficiencia energética y la protección 
                                de los recursos naturales. Bajo la dirección de la Fundación Cap Cana, se han implementado una serie de proyectos y 
                                políticas que no solo garantizan el desarrollo responsable del destino, sino que también contribuyen de manera activa a
                                l bienestar de las comunidades locales y al ecosistema circundante.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <Subtitle text={"Iniciativas clave en sostenibilidad"} />
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm sm:text-base"}>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>ACUATUR: Gestión eficiente del agua</span>
                            <p className={"leading-7"}>
                                La empresa encargada de gestionar el ciclo del agua en Cap Cana, ha establecido una infraestructura 
                                avanzada que refleja su visión a largo plazo. Su compromiso con la eficiencia energética se materializa en la 
                                implementación de sistemas de distribución por gravedad, los cuales reducen significativamente el consumo de 
                                energía y, por ende, la huella de carbono asociada a sus operaciones.

                                Además, ACUATUR ha adoptado un modelo de gestión circular del agua, reutilizando el 100% del agua tratada en sus 
                                plantas de depuración para el riego de los campos de golf y jardines de la ciudad. Esta práctica no solo optimiza 
                                el uso del agua, sino que también protege los ecosistemas acuáticos al evitar la descarga de aguas residuales en 
                                cuerpos de agua.

                                En colaboración con la Fundación Cap Cana, ACUATUR ha encontrado una solución innovadora para los lodos generados 
                                en el tratamiento de aguas residuales. Estos lodos, ricos en nutrientes, se transforman en un sustrato fértil para 
                                la reproducción de plantas nativas y endémicas en peligro de extinción, contribuyendo a la conservación de la 
                                biodiversidad local.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>CENETUR: Energía renovable y eficiencia</span>
                            <p className={"leading-7"}>
                                Responsable de la distribución eléctrica en Cap Cana, ha integrado una serie de soluciones energéticas 
                                innovadoras, destacando su apuesta por las energías renovables. La implementación de un parque fotovoltaico 
                                de 5.2 MW y sistemas de paneles solares con capacidad de 1.5 MW, que cubren el 11.3% de la demanda energética 
                                del destino, ayuda a reducir la huella de carbono y a diversificar la matriz energética de Cap Cana.

                                Además, CENETUR ha instalado un sistema de distribución eléctrica soterrada, lo cual no solo mejora la 
                                estética urbana, sino que también incrementa la resiliencia ante fenómenos naturales como huracanes, 
                                garantizando así un suministro eléctrico más seguro y confiable.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>La campaña "Plastic Not Today"</span>
                            <div className={'flex flex-col gap-3'}>
                                <p className={"leading-7"}>
                                    La Fundación Cap Cana ha lanzado la campaña "Plastic Not Today" como respuesta al creciente desafío global de
                                    la contaminación por plásticos. Esta iniciativa integral busca reducir el uso de plásticos de un solo uso y
                                    promover alternativas sostenibles dentro de la comunidad.
                                </p>
                                <p className={"leading-7"}>Dentro de esta campaña, se destacan los siguientes programas y políticas:</p>
                                <p>
                                    <ul className={"leading-7 pl-5"}>
                                        <li className={'list-disc'}>
                                            <b>Recuperación de PET:</b> En colaboración con NUVI PET, se recuperan botellas plásticas para ser
                                            recicladas y reincorporadas a su ciclo productivo, aplicando principios de economía circular.
                                        </li>
                                        <li className={'list-disc'}>
                                            <b>Eliminación del plástico de un solo uso:</b> Se busca erradicar productos plásticos descartables
                                            en hoteles y comercios, fomentando el uso de botellas reutilizables, bolsas de tela y cubiertos biodegradables.
                                        </li>
                                        <li className={'list-disc'}>
                                            <b>Eliminación del foam y sorbetes plásticos:</b> Se restringe el uso de poliestireno expandido
                                            (foam) y sorbetes plásticos, reemplazándolos por materiales biodegradables.
                                        </li>
                                        <li className={'list-disc'}>
                                            <b>Alianza con Fundación Botellas de Amor:</b> Esta colaboración convierte botellas plásticas
                                            llenas de plásticos flexibles en material de construcción, apoyando tanto el reciclaje como el
                                            desarrollo de viviendas sostenibles para comunidades vulnerables.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>Distrito de Sostenibilidad de la Fundación Cap Cana</span>
                            <div className={'flex flex-col gap-3'}>
                                <p className={"leading-7"}>
                                    El Distrito de Sostenibilidad es un espacio donde se concentran los principales proyectos e iniciativas 
                                    en sostenibilidad ambiental y social que impulsa la Fundación Cap Cana. Este distrito alberga una 
                                    serie de instalaciones que refuerzan el compromiso de Cap Cana con el desarrollo sostenible:
                                </p>
                                <p>
                                    <ul className={"leading-7 pl-5"}>
                                        <li className={'list-disc'}>
                                            <b>Centro de Investigación Ambiental:</b> Espacio dedicado a la investigación científica 
                                            y la conservación de los ecosistemas.
                                        </li>
                                        <li className={'list-disc'}>
                                            <b>Laboratorio Marino y Botánico:</b> Áreas destinadas a la investigación y reproducción de 
                                            especies marinas y botánicas de interés ecológico.
                                        </li>
                                        <li className={'list-disc'}>
                                            <b>Vivero de Plantas Nativas y Huerto Orgánico:</b> Producción y mantenimiento de especies locales, fomentando 
                                            un consumo responsable y saludable.
                                        </li>
                                        <li className={'list-disc'}>
                                            <b>Apiario, Mariposario y Refugio de Fauna:</b> Proyectos enfocados en la conservación de 
                                            polinizadores y fauna nativa.
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={'pt-5'}>
                        <p>
                            Cada uno de estos proyectos y espacios está diseñado para promover la conservación, educación ambiental y 
                            el fomento de la biodiversidad local, alineándose con los Objetivos de Desarrollo Sostenible (ODS) establecidos 
                            por la ONU para el 2030.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}