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
import BecomeMember from "@/components/Banners/BecomeMember";

export default function ProgramExample() {
    return (
        <Layout title={"Programa rehabilitacion de arrecifes de coral"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa rehabilitación de</div>
                        <div><span className={"font-bold"}> Arrecifes de Coral</span></div>
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
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Los arrecifes de coral, grandes héroes</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Los arrecifes de coral cubren menos del 1% del fondo del océano, pero albergan al 25% de todas las
                            especies marinas del planeta. Las comunidades costeras dependen de los pescados y mariscos que se
                            extraen de ellos para su alimentación y sustento. Además, fungen como una barrera que atenúa la
                            fuerza de las olas antes de su llegada a la orilla, protegiendo así la costa de la erosión y del impacto de
                            las tormentas. En la República Dominicana, los arrecifes de coral generan más de mil millones de
                            dólares al año para la economía del país a través del turismo, mediante actividades adyacentes a los
                            arrecifes, como visitas a la playa, y actividades directamente en los arrecifes, como el esnórquel,
                            según un estudio realizado por The Nature Conservancy en 2018.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>El grave declive</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            No obstante, los arrecifes están en grave declive. En el área del Gran Caribe, el Golfo de México y las
                            Bermudas, la cobertura de coral promedio disminuyó en un 49% desde 1984, según un estudio
                            elaborado por Jackson et al. en el 2014. Hoy en día, los arrecifes enfrentan varias amenazas globales
                            y locales: el cambio climático que trae consigo el aumento de temperatura del agua; la acidificación
                            del océano y el aumento del nivel del mar; la contaminación, la sobrepesca, entre otros daños que surgen de la actividad humana. Debido a esto, la Fundación Cap Cana ha decidido unirse a los
                            esfuerzos nacionales de conservación y rehabilitación de los arrecifes de coral.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/rehabilitacion-de-arrecifes-de-coral/1.webp",
                            classes: { backgroundPosition: '0 70%' }
                        },
                        {
                            src: "/programas/rehabilitacion-de-arrecifes-de-coral/2.webp",
                            classes: { backgroundPosition: '0 60%' }
                        },
                        {
                            src: "/programas/rehabilitacion-de-arrecifes-de-coral/3.webp",
                            classes: { backgroundPosition: '0 70%' }
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Recuperando los arrecifes de Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Nuestro Programa de Rehabilitación de Arrecifes de Coral se dedica a la reproducción y recuperación
                            de especies de corales, hasta el momento el coral cuerno de ciervo <span className="italic">(Acropora cervicornis)</span> y el coral cuerno de alce <span className="italic">(Acropora palmata)</span>. Procuramos multiplicar el número de individuos de diferentes genotipos de estos corales, para que continúen prosperando en su hábitat natural y ejerciendo su rol en el ecosistema.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Propagando corales asexualmente</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Actualmente contamos con un vivero de corales bajo el mar frente a la playa de Juanillo, un sitio que
                            bautizamos como “Sendero Coralino de Cap Cana”, en el cual estamos reproduciendo corales
                            mediante jardinería de corales, una técnica de reproducción asexual que consiste en fragmentar los
                            corales y colocar dichos fragmentos en estructuras submarinas adecuadas para su crecimiento, hasta
                            que tengan un tamaño suficiente para ser fragmentados nuevamente y ser trasplantados al arrecife.
                            Esto se hace con el fin de aumentar la cobertura de coral vivo en los arrecifes y recuperar las
                            funciones de este ecosistema. Hasta el momento, nuestro vivero de corales cuenta con 10 estructuras
                            submarinas y +600 fragmentos de corales.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Propagando larvas de coral mediante reproducción sexual asistida</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Nos estamos preparando para incursionar próximamente en una técnica alternativa, la propagación de
                            larvas de coral mediante la reproducción sexual asistida. Esta técnica se basa en la recolección de
                            gametos (óvulos y espermatozoides), su fertilización y posterior cultivo de embriones y larvas hasta
                            convertirse en reclutas de coral que se trasplantan hacia los arrecifes. A diferencia de la jardinería de
                            corales, esta técnica es más lenta, pero produce individuos genéticamente distintos, lo cual es
                            importante para aumentar la diversidad genética de las poblaciones de corales, haciéndolas más
                            resilientes ante las amenazas como el cambio climático. Pronto tendremos el Laboratorio Marino
                            Punta Espada para estos fines.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Educación y conciencia</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            El Programa de Rehabilitación de Arrecifes de Coral no se termina cuando introducimos los corales
                            en su hábitat. También nos dedicamos a educar a la comunidad sobre la importancia de la
                            conservación de los arrecifes de coral y cómo pueden ayudar. Cada coral que se propaga es una
                            oportunidad para aprender y crear conciencia.

                        </p>
                    </div>
                </div>
                <div className={`flex items-end ${styles.thirdImage} py-16 text-white px-5 h-[35rem]`}>
                    <div className={"flex flex-col justify-center items-center gap-10 h-full w-full text-center"}>
                        <h2 className={"text-xl sm:text-[1.7rem] sm:leading-9"}>
                            <span className={"font-bold"}>Únete a nuestra misión</span>
                        </h2>
                        <p className="w-full sm:w-2/3 lg:w-1/2 mx-auto px-5 text-white">
                            Te invitamos a ser parte de nuestra misión de conservación. Si eres buzo certificado, regístrate para
                            ser voluntario de nuestro programa. Si aún no eres buzo certificado, puedes tomar el curso o comprar
                            una excursión Discover Scuba Diving a nuestro vivero de corales con el centro de buceo Sea Klub
                            Ultra Marine Divers, ubicado en Fishing Lodge, Cap Cana.
                        </p>
                        <Link href={'#'} className={"bg-white text-[#7D8034] font-semibold py-2 px-5 sm:px-10 rounded-full text-sm sm:text-base"}>CONVIÉRTETE EN VOLUNTARIO</Link>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Rehabilitación de Arrecifes de Coral, estás contribuyendo a la
                            recuperación de los corales en Cap Cana. Descubre la belleza y la importancia de nuestros arrecifes.
                        </p>
                    </div>
                </div>
                <BecomeMember />

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}