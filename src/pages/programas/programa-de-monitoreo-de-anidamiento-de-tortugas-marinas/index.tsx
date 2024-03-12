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
        <Layout title={"Programa de monitoreo de anidamiento de tortugas marinas"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa de Monitoreo de</div>
                        <div><span className={"font-bold"}> Anidamiento de Tortugas Marinas</span></div>
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
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Conservando tortugas marinas en peligro de extinción</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            En Cap Cana tenemos la suerte de compartir algunas de las playas con las tortugas marinas que las
                            utilizan como hábitat de anidamiento. Estas pasan su vida completa en el océano, a excepción de
                            cuando las hembras salen a la costa para depositar sus huevos al regresar a la misma playa en la que
                            nacieron. Tres de las siete especies de tortugas marinas que existen en en el mundo anidan en las
                            playas de Cap Cana y del resto de la República Dominicana: la tortuga tinglar <span className="italic">{'(Dermochelys coriacea)'}</span>, la tortuga verde <span className="italic">{'(Chelonia mydas)'}</span> y la tortuga carey <span className="italic">{'(Eretmochelys imbricata)'}</span>. Estas tres
                            especies están enlistadas bajo categorías de amenaza de extinción en la Lista Roja de Especies de
                            Fauna en Peligro, Amenazadas o Protegidas de la República Dominicana.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Monitoreando los anidamientos</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            En Cap Cana tenemos mucho por conocer sobre nuestras tortugas marinas, por ejemplo, la cantidad
                            de nidos que tenemos cada año y la cantidad de neonatos que nacen. ¡Esta información es crucial para
                            protegerlas! Por esto monitoreamos las playas en busca señales de anidamiento, con el fin de detectar
                            los nidos a tiempo para aportarles protección y darles seguimiento hasta el momento de su eclosión y
                            llegada al mar, así como para construir una base de información que permita conocer el
                            comportamiento de las tendencias del anidamiento a lo largo del tiempo.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/example/2.jpg"
                        },
                        {
                            src: "/sostenibilidad/estrategia/2.jpg",
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Protegiendo los nidos en las playas</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Además de monitorear las playas, nuestro programa también se dedica a implementar medidas para
                            proteger los nidos. Estas incluyen la señalización de las playas con letreros informativos y el cercado
                            de los nidos.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Educación y conciencia</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            También nos dedicamos a educar a la comunidad en general y en especial al personal de los hoteles
                            que trabaja diariamente en las playas, sobre las amenazas que enfrentan las tortugas marinas hoy en
                            día y qué deben hacer en caso de presenciar un anidamiento o una eclosión.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Únete al voluntariado Turtle Patrol</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Necesitamos voluntarios para caminar por las playas de Cap Cana cada mañana al amanecer en busca
                            de huellas frescas de tortugas, desde el 1 de mayo hasta el 31 de octubre de cada año. Pedimos a
                            nuestros voluntarios que puedan comprometerse al menos una vez a la semana durante toda la
                            temporada y que asistan a una charla de capacitación. Si deseas unirte al patrullaje de tortugas
                            marinas, envía un correo electrónico a <a className="link" href="mailto:info@fundacioncapcana.org">info@fundacioncapcana.org</a>.
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
                            Al unirte a nosotros en el Programa de Monitoreo de Anidamiento de Tortugas Marinas, estás
                            contribuyendo a proteger los nidos de tortugas en las playas de Cap Cana. Descubre la belleza e
                            importancia de estas especies en peligro de extinción.
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