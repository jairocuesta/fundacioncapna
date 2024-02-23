import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    // TODO: Agregar acerca de nosotros (agencia 7am) en el footer
    return (
        <footer className={"bg-[#222222] py-16 text-white"}>
            <div className={"grid grid-cols-1 lg:grid-cols-4 gap-10 xl:gap-16 max-w-7xl mx-auto text-sm px-10"}>
                <div className={"flex flex-col gap-7"}>
                    <Image src={"/logo.png"} width={75} height={75} alt={"Logo"} />
                    <p className={"text-neutral-200"}>Organización sin fines de Lucro creada en el año 2016</p>
                    <div className={"flex items-center gap-5 text-xl"}>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </div>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <span className={"text-[#AFA96E] font-semibold"}>Contacto</span>
                    <div className={"flex flex-col gap-1 text-neutral-200"}>
                        <span>Box 3233</span>
                        <span>1810 Kings Way</span>
                        <span>King Street, 5th Avenue, New York</span>
                        <span>Punta Cana: 1800 - 2355-2356</span>
                        <span>info@fundacióncapcana.org</span>
                    </div>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <span className={"text-[#AFA96E] font-semibold"}>Navegación</span>
                    <div className={"flex flex-col gap-1 text-neutral-200"}>
                        <Link href={"#"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Inicio</span>
                        </Link>
                        <Link href={"#"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Programas</span>
                        </Link>
                        <Link href={"#"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Actividades</span>
                        </Link>
                        <Link href={"#"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Colaboraciones</span>
                        </Link>
                        <Link href={"#"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Blog</span>
                        </Link>
                        <Link href={"#"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Galería</span>
                        </Link>
                        <Link href={"#"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Contactos</span>
                        </Link>
                    </div>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <span className={"text-[#AFA96E] font-semibold"}>Portafolio de proyectos</span>
                    <div className={"flex flex-col gap-1 text-neutral-200"}>
                        <p>Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus Lorem Ipsus </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}