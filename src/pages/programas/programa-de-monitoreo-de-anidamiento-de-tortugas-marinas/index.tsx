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
                        <div>Programa de Monitoreo de</div>
                        <div><span className={"font-bold"}> Anidamiento de Tortugas Marinas</span></div>
                    </h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
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
                        <button className={"bg-white text-[#7D8034] font-semibold py-2 px-5 sm:px-10 rounded-full text-sm sm:text-base"}>¿Cómo puedo ayudar?</button>
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
                        <button className={"bg-[#7D8034] text-white py-2 px-5 sm:px-10 rounded-full font-semibold text-sm sm:text-base"}>Conviértete en miembro</button>
                    </div>
                </div>

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}