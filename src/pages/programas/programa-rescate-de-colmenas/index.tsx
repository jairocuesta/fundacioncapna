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
import HowCanHelp from "@/components/Banners/HowCanHelp";

export default function ProgramExample() {
    return (
        <Layout title={"Programa rescate de colmenas"}>
            <div className={"flex flex-col gap-16 pb-20 text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.h1
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                    >
                        <div>Programa Rescate de</div>
                        <div><span className={"font-bold"}>Colmenas</span></div>
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
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Protegiendo las abejas en zonas urbanizadas
                    </span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            El Programa de Rescate de Colmenas surge bajo la continua necesidad de proteger las abejas que
                            hacen sus panales en zonas urbanizadas, donde representaban un peligro para los residentes y
                            huéspedes. El programa, iniciado formalmente en el 2014, consiste en rescatar los panales ubicados
                            en residencias, hoteles, y áreas comunes de Cap Cana, para ser reubicados a un apiario donde son
                            debidamente trasladados a una caja que se convierte en su nuevo hogar.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Valiosos polinizadores</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Las abejas y algunos otros animales como las mariposas, murciélagos y colibríes ejercen un rol
                            sumamente valioso, tanto para el medio ambiente como para los seres humanos: polinizan las plantas,
                            incluyendo muchos cultivos alimentarios, llevando el polen de flor en flor, permitiendo así que den
                            frutos y se reproduzcan. Esto es importante porque los polinizadores contribuyen directamente a la
                            seguridad alimentaria. Un tercio de la producción mundial de alimentos depende de las abejas, según
                            los expertos de la Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO).
                        </p>
                        <p>
                            Sin embargo, hoy en día la población mundial de abejas se encuentra disminuida por el uso intensivo
                            de agroquímicos como los pesticidas, el cambio climático, la contaminación y la pérdida de hábitat.
                        </p>
                    </div>
                </div>
                <TextSlider
                    title={"Frase para esta imagen que irá aquí"}
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"}
                    images={[
                        {
                            src: "/programas/rescate-de-colmenas/1.webp",
                            classes: { backgroundPosition: '0 60%' }
                        },
                        {
                            src: "/programas/rescate-de-colmenas/2.webp",
                            classes: { backgroundPosition: '0 20%' }
                        }
                    ]}
                />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Un apiario donde se respeta la integridad de las abejas</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Gracias a esta iniciativa se han rescatado cientos de colmenas que hoy en día habitan sin peligro en
                            nuestro apiario, donde se respeta la integridad de las abejas, aplicando diversos reglamentos tales
                            como el no-uso de fertilizantes inorgánicos, exterminadores de plagas químicos, entre otros productos
                            que alteran o interrumpen el desarrollo natural de esta especie.
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>La Colmena Agradecida: Miel 100% orgánica</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            La miel 100% orgánica producida en nuestro apiario es comercializada bajo el nombre “La Colmena
                            Agradecida” y los fondos recaudados de las ventas son reinvertidos en el mismo programa para
                            garantizar su autosostenibilidad a través del tiempo. Puedes adquirirla en la <Link className="link" href={'#'}>Eco-tienda</Link> de la Fundación.
                        </p>
                    </div>
                </div>
                <Link href={'#'} className={"bg-[#7D8034] w-fit mx-auto text-white py-2 px-5 sm:px-10 rounded-full font-semibold text-sm sm:text-base"}>SIGUE A LA COLMENA AGRADECIDA EN INSTAGRAM O FACEBOOK</Link>
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <span className={"text-lg sm:text-xl font-bold text-[#7D8034]"}>Reporta las colmenas en situación de riesgo a la Fundación</span>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Si conoces una colmena ubicada en una zona urbanizada que represente un peligro para los seres
                            humanos, por favor ¡no la fumigues! En cambio, repórtala a la Fundación llamando al <a className="link" href="tel:+18094697241">+1 (809) 469-7241</a> o escribiendo al correo <a className="link" href="mailto:info@fundacioncapcana.org">info@fundacioncapcana.org</a>. Nuestro apicultor se trasladará hasta el lugar para retirarla y trasladarla a nuestro apiario.
                        </p>
                    </div>
                </div>
                <HowCanHelp />
                <div className={"flex flex-col gap-4 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    <div className={"flex flex-col gap-4 leading-6 sm:leading-8 text-sm sm:text-base"}>
                        <p>
                            Al unirte a nosotros en el Programa de Rescate de Colmenas, estás contribuyendo a la protección de
                            los valiosos polinizadores que constituyen las abejas. Descubre la belleza y la importancia de estos
                            insectos.
                        </p>
                    </div>
                </div>
                <BecomeMember />

                {/* TODO: HACER GALERIA DE IMAGENES */}
            </div>
        </Layout>
    )
}