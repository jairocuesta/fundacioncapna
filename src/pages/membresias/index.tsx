import Layout from "@/components/Layout";
import styles from './index.module.css'
import Button from "@/components/Button/Index";

export default function Memberships() {
    return (
        <Layout title={"Membresías"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`grid place-content-center gap-10 ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <h1 className={"text-center text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>Donaciones</h1>
                    <span className={"flex justify-center text-3xl md:text-4xl"}>
                        <i className="fa-light fa-angles-down"></i>
                    </span>
                </div>
                <div className={"grid grid-cols-1 lg:grid-cols-3"}>
                    <div className={`flex flex-col justify-between ${styles.secondImage} py-12 text-white px-5 sm:px-8 md:px-12 gap-32`}>
                        <h3 className={"flex flex-col items-center text-center text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>
                            <span>Membresía</span>
                            <span>empresarial</span>
                        </h3>
                        <div className={"flex flex-col items-center gap-5"}>
                            <p className={"text-center"}>
                                ¿Deseas que tu empresa tenga compromiso con la sostenibilidad y la conservación de su entorno
                                natural? Al unirte a esta membresía, recibirá apoyo y asesoramiento y además podrá disfrutar de
                                beneficios exclusivos.
                            </p>
                            <Button
                                href={"#"}
                                text={"Conviértete en miembro"}
                                type={"white"}
                            />
                        </div>
                    </div>
                    <div className={`flex flex-col justify-between ${styles.thirdImage} py-12 text-white px-5 sm:px-8 md:px-12 gap-32`}>
                        <h3 className={"flex flex-col items-center text-center text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>
                            <span>Membresía</span>
                            <span>personal</span>
                        </h3>
                        <div className={"flex flex-col items-center gap-5"}>
                            <p className={"text-center"}>
                                ¿Quieres aportar de manera individual? Conviértete en un voluntario asociado
                            </p>
                            <Button
                                href={"#"}
                                text={"Conviértete en miembro"}
                                type={"white"}
                            />
                        </div>
                    </div>
                    <div className={`flex flex-col justify-between ${styles.fourImage} py-12 text-white px-5 sm:px-8 md:px-12 gap-32`}>
                        <h3 className={"flex flex-col items-center text-center text-3xl lg:text-4xl lg:leading-[3rem] font-bold"}>
                            <span>Donación</span>
                            <span>única</span>
                        </h3>
                        <div className={"flex flex-col items-center gap-5"}>
                            <p className={"text-center"}>
                                Una sola acción es valiosa para nosotros, aporta una única vez.
                            </p>
                            <Button
                                href={"#"}
                                text={"Donar ahora"}
                                type={"white"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}