// Components
import Layout from "@/components/Layout";
// Next
import Image from "next/image";
// Styles
import styles from './Index.module.css';
import { TextSlider } from "@/components/Sliders";

export default function SustainabilityStrategy() {
    return (
        <Layout title={"Estrategia de sostenibilidad"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <h1 className={"text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                        <div className={"font-bold"}>Estrategia de sostenibilidad</div>
                        <div>Cap Cana</div>
                    </h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            La Fundación Cap Cana como entidad creada para la protección de los recursos naturales y el desarrollo
                            social de la Ciudad Destino, lidera y funciona como brazo ejecutor para impulsar y aplicar todas aquellas
                            iniciativas técnicas, operativas y de gestión que se requieren para lograr el desarrollo sostenible en Cap
                            Cana.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            La Agenda 2030 para el Desarrollo Sostenible de las Naciones Unidas, elaborada y adoptada en el 2015,
                            acarreó la creación de los 17 Objetivos de Desarrollo Sostenible (ODS) y 169 metas con el fin de
                            establecer el plan de acción de la comunidad internacional por los próximos 15 años.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Estos objetivos, en palabras de la Asamblea General de las Naciones Unidas, “son de carácter integrado e
                            indivisible y conjugan las tres dimensiones del desarrollo sostenible: económica, social y ambiental”.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Ante este panorama, la ciudad destino Cap Cana ha decidido implementar una Estrategia de
                            Sostenibilidad basada en las áreas materiales, ejes, objetivos y acciones estratégicas claves armonizadas con los ODS y el END, alineándose con la ideación internacional y nacional. De esta manera, se busca
                            hacer de Cap Cana una Ciudad Destino Sostenible.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#898C31]"}>Distrito de sostenibilidad Cap Cana</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            El Distrito de Sostenibilidad de la Ciudad Destino Cap Cana es el espacio geográfico donde se
                            engloban los principales proyectos e iniciativas en materia de sostenibilidad ambiental y social que se
                            desarrollan a través de la Fundación Cap Cana.
                            Oficinas administrativas Fundación Cap Cana, centro de Investigación ambiental, laboratorio marino,
                            laboratorio botánico, área de atención de fauna, museo virtual, alojamientos para pasantes técnicos,
                            refugio de rescate doméstico, orquideario, vivero de plantas nativas, huerto urbano, apiario de colmenas
                            rescatadas, área de acuaponía, área de compost, mariposario y refugio de aves son las amenidades que
                            componen el Distrito.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/sostenibilidad/estrategia/2.jpg"
                        },
                        {
                            src: "/alianzas/1.jpeg",
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#898C31]"}>Iniciativas sostenibles</span>
                    <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-sm sm:text-base"}>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>Programa recuperación de PET</span>
                            <p className={"leading-7"}>
                                Por medio de la alianza privada entre NUVI
                                PET y la Fundación Cap Cana, se recuperan las botellas plásticas de PET
                                provenientes de hoteles, comercios y espacios comunes de la ciudad destino Cap
                                Cana para su reciclado y reincorporación a su ciclo productivo, logrando aplicar
                                el principio de economía circular para este material.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>Huerto orgánico</span>
                            <p className={"leading-7"}>
                                En este espacio se producen verduras y hortalizas libres de
                                agroquímicos con el fin de incentivar el consumo de productos locales saludables
                                con una menor huella ambiental, ya que al ser producidos en la zona no requieren
                                ser transportados por largas distancias.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>Política de poda sostenible</span>
                            <p className={"leading-7"}>
                                La poda sostenible garantiza la salud, funcionalidad
                                y estética del paisajismo de la ciudad destino Cap Cana. Las especies botánicas
                                son podadas respetando su periodo de floración y fructificación para mantener
                                saludable la relación entre plantas y animales, propiciando así la polinización,
                                alimentación de la fauna y dispersión de semillas de especies de valor ecológico.
                            </p>
                        </div>
                        <div className={"flex flex-col gap-1"}>
                            <span className={"text-[#898C31] leading-6 sm:leading-8"}>Políticas de pesca y liberación de especies de Marlín</span>
                            <p className={"leading-7"}>
                                De acuerdo a las
                                regulaciones de la Asociación Internacional de Pesca Deportiva, Cap Cana posee
                                esta estricta política de pesca y liberación del marlin para conservar la salud
                                poblacional de estas especies, por lo que todos los ejemplares son regresados al
                                océano tras su captura.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}