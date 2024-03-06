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
                        <div>Programa de Registro de</div>
                        <div><span className={"font-bold"}> Avistamientos de Manatíes</span></div>
                    </h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Conservando los manatíes, mamíferos marinos en peligro de extinción</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            En Cap Cana tenemos la suerte de contar con al menos seis manatíes que habitan en las aguas de la
                            Marina Cap Cana y de las costas de la Ciudad Destino Cap Cana, siendo uno de ellos una cría y los
                            otros cinco, adultos. Se trata del manatí antillano, también conocido como vaca marina, de nombre
                            científico Trichechus <span className="italic">manatus manatus</span>. Son herbívoros grandes y pesados, de movimientos lentos, que se alimentan principalmente de hierbas marinas y son sumamente dóciles porque no tienen
                            depredadores naturales. Los manatíes están declarados en estado de “peligro crítico” en la Lista Roja
                            de Especies en Peligro de Extinción, Amenazadas o Protegidas de la República Dominicana.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Creando una base de datos de avistamientos</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Frecuentemente recibimos reportes de avistamientos de manatíes en distintos puntos de la Marina Cap
                            Cana, por parte de residentes, visitantes y empleados que los ven transitando y descansando. Por esta
                            razón, hemos colocado letreros en la Marina y en Api Beach para incentivar a las personas a observar
                            y reportar los manatíes. Con el fin de estudiar estos mamíferos, nuestro programa se dedica al registro
                            de información de los avistamientos en una base de datos que incluye fecha, hora, localidad, número
                            de individuos, observaciones, entre otros. Esta información sirve para apoyar medidas de manejo para
                            proteger esta especie.
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
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Monitoreando los manatíes</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Bajo la mentoría de FUNDEMAR {'(Fundación Dominicana de Estudios Marinos)'}, iniciamos en 2023
                            un proyecto de investigación científica con duración de un año para monitorear con drones la
                            agrupación de manatíes que habita en las aguas de la Marina Cap Cana y de las costas de la Ciudad
                            Destino Cap Cana. Se trata de un esfuerzo conjunto que se está llevando a cabo simultáneamente en
                            Bayahíbe también, por iniciativa de FUNDEMAR. El mismo consiste en que un observador con el
                            ojo entrenado sobrevuele con un dron un área seleccionada tres veces al día en distintas horas {'(mañana, mediodía y tarde)'}, tres días a la semana y tres semanas cada mes, durante todos los meses
                            por un año. Para cada vuelo, se registran los avistamientos de manatíes, la cantidad de individuos
                            adultos y crías avistados, las coordenadas geográficas del lugar en el cual fueron observados, el
                            comportamiento, la cantidad de botes, la turbidez del agua, los avistamientos de otros animales tales
                            como tortugas y rayas, y cualquier otra observación. Este monitoreo permitirá conocer más sobre el
                            comportamiento de estos herbívoros marinos, así como los sitios que estos frecuentan en el <Link className="link" href={'#'}>Santuario Marino Arrecifes del Sureste {'(SAMAR)'}</Link>, información que facilitará tomar medidas para el manejo de esta área protegida y la conservación de esta especie.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Aplicando medidas de seguridad para proteger los manatíes en la Marina Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Para la protección de esta especie, la Marina Cap Cana implementa regulaciones estrictas para el
                            tránsito marítimo de embarcaciones: Para comenzar, la velocidad de navegación permitida dentro de
                            la marina es de 5 nudos, por lo cual todos los capitanes reducen la velocidad desde que llegan a la
                            entrada, pues de no cumplir con esta regulación reciben una multa. Adicionalmente, los capitanes se
                            comunican a través de la radio cuando avistan un manatí, para que los demás estén alertas y tengan
                            más cuidado al transitar en esa zona. Además, fuera de la marina existe un canal de navegación
                            delimitado con boyas.
                        </p>
                    </div>
                </div>
                <div className={"w-full flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Reporta tus avistamientos de manatíes</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Si ves un manatí, por favor reporta la fecha, hora, localidad y cantidad de individuos a la Fundación a
                            través de este formulario:

                        </p>
                        <Link href={'#'} className={"bg-[#7D8034] w-fit text-white py-2 px-5 sm:px-10 rounded-full font-semibold text-sm sm:text-base"}>Conviértete en miembro</Link>
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
                            Al unirte a nosotros en el Programa de Monitoreo de Registro de Avistamiento de Manatíes, estás
                            contribuyendo a proteger los manatíes que habitan en las aguas marinas que rodean la Ciudad Destino
                            Cap Cana. Descubre el encanto e importancia de estos herbívoros marinos en peligro de extinción.
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