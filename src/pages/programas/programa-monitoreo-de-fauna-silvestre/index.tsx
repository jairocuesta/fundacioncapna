// Components
import Layout from "@/components/Layout";
import { TextSlider } from "@/components/Sliders";
import Button from "@/components/Button/Index";
// Next
import Image from "next/image";
import Link from "next/link";
// Styles
import styles from './Index.module.css';
// Animations
import { motion } from "framer-motion";

export default function ProgramExample() {
    return (
        <Layout title={"Programa monitoreo de fauna silvestre"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa Monitoreo de</div>
                        <div><span className={"font-bold"}>Fauna Silvestre</span></div>
                    </motion.h1>
                    <motion.span
                        animate={{ top: '30px' }}
                        transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                        className={"relative flex justify-center text-3xl md:text-4xl"}
                    >
                        <i className="fa-regular fa-angles-down"></i>
                    </motion.span>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Monitoreando la fauna silvestre de Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Para poder tomar medidas adecuadas para el manejo y la conservación de las especies, es necesario
                            contar con información acerca de las mismas. Con el propósito de generar información útil para el
                            manejo, nuestro programa se dedica al monitoreo de la fauna silvestre dentro de Cap Cana, que nos
                            permite identificar las especies de animales que habitan dentro de la Ciudad Destino, conocer su distribución geográfica, su comportamiento, su dieta, sus interacciones con otras especies, entre otras
                            variables a las cuales damos seguimiento a lo largo del tiempo.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Fototrampeando a los animales</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Colocamos 11 cámaras trampa en la <Link className="link" href={'#'}>Reserva Ecológica Falda del Farallón</Link> para estudiar a los animales en su hábitat natural sin alterar su comportamiento. Estas cámaras tienen un diseño que se mimetiza con el entorno del bosque, haciéndolas difíciles de percibir para los animales. A través de un sensor de movimiento infrarrojo, la cámara detecta la presencia de un animal y automáticamente toma fotos y/o vídeos.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/1.webp"
                        },
                        {
                            src: "/programas/monitoreo-de-fauna-silvestre/2.webp",
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Detectando amenazas y oportunidades de conservación</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            A través del uso de las cámaras trampa, hemos podido identificar amenazas para los animales, tales
                            como la presencia de especies exóticas invasoras, entre ellas los gatos y los hurones. Por otro lado,
                            también hemos podido identificar oportunidades para la conservación, tales como la reproducción del
                            jobo de puerco como alimento para las iguanas rinoceronte, a partir de observaciones de las cámaras
                            trampa de las iguanas alimentándose de los frutos de esta planta nativa.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Aplicando medidas de manejo para conservar</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            A partir de la información conseguida a través del monitoreo, aplicamos medidas de manejo para
                            reducir las amenazas a estas especies y contribuir con su supervivencia.
                        </p>
                    </div>
                </div>
                <div className={`flex items-end ${styles.thirdImage} h-[25rem] text-white px-5`}>
                    <div className={"flex flex-col justify-center items-center gap-10 h-full w-full text-center"}>
                        <h2 className={"text-xl sm:text-[1.7rem] sm:leading-9"}>
                            <div>Te invitamos a <span className={"font-bold"}>ser parte de<br/> nuestra misión</span> de conservación</div>
                        </h2>
                        <Button
                            href={"#"}
                            text={"¿Cómo puedo ayudar?"}
                            type={"white"}
                        />
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Monitoreo de Fauna Silvestre, estás contribuyendo al estudio
                            de la diversidad de fauna única de Cap Cana, el este y República Dominicana. Descubre la belleza y
                            la importancia de nuestros animales.
                        </p>
                    </div>
                </div>
                <div className={`max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 w-full`}>
                    <div className={`${styles.fourImage} grid place-content-center w-full h-[10rem] sm:h-[20rem] rounded-2xl`}>
                        <Button
                            href={"#"}
                            text={"Conviértete en miembro"}
                            type={"main"}
                        />
                    </div>
                </div>

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}