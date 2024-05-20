import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    // TODO: Agregar acerca de nosotros (agencia 7am) en el footer
    return (
        <footer className={"bg-[#222222] py-16 text-white"}>
            <div className={"grid grid-cols-1 lg:grid-cols-4 gap-10 xl:gap-16 max-w-7xl mx-auto text-sm px-10"}>
                <div className={"flex flex-col gap-7"}>
                    <Image loading={'eager'} src={"/logo.png"} width={75} height={75} alt={"Logo"} />
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
                        <Link href={"/"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Inicio</span>
                        </Link>
                        <Link href={"/programas/programa-de-concienciacion-socioambiental"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Programas</span>
                        </Link>
                        <Link href={"/sostenibilidad/estrategia"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Sostenibilidad</span>
                        </Link>
                        <Link href={"/membresias"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Donaciones</span>
                        </Link>
                        <Link href={"/blog"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Blog</span>
                        </Link>
                        <Link href={"/alianzas"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Alianzas</span>
                        </Link>
                        <Link href={"/investigacion"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Investigación</span>
                        </Link>
                        <Link href={"/contacto"} className={"flex items-center gap-3 border-b py-2 border-neutral-500"}>
                            <i className="fa-regular fa-angle-right text-lg"></i>
                            <span>Contactos</span>
                        </Link>
                    </div>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <span className={"text-[#AFA96E] font-semibold"}>Programas</span>
                    <Link href={"/programas/programa-atencion-primaria-fauna-silvestre"} className={"hover:text-[#AFA96E] transition-colors"}>Fauna silvestre</Link>
                    <Link href={"/programas/programa-conservacion-de-orquideas-nativas"} className={"hover:text-[#AFA96E] transition-colors"}>Conservación de orquideas nativas</Link>
                    <Link href={"/programas/programa-de-apoyo-comunitario"} className={"hover:text-[#AFA96E] transition-colors"}>Apoyo comunitario</Link>
                    <Link href={"/programas/programa-de-concienciacion-socioambiental"} className={"hover:text-[#AFA96E] transition-colors"}>Concienciación socioambiental</Link>
                    <Link href={"/programas/programa-de-monitoreo-de-anidamiento-de-tortugas-marinas"} className={"hover:text-[#AFA96E] transition-colors"}>Monitoreo de anidamiento de tortugas marinas</Link>
                    <Link href={"/programas/programa-de-monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral"} className={"hover:text-[#AFA96E] transition-colors"}>Monitoreo de salud arrecifal y de enfermedades de coral</Link>
                    <Link href={"/programas/programa-de-registro-de-avistamientos-de-manaties"} className={"hover:text-[#AFA96E] transition-colors"}>Registro de avistamientos de manatíes</Link>
                    <Link href={"/programas/programa-monitoreo-de-fauna-silvestre"} className={"hover:text-[#AFA96E] transition-colors"}>Monitoreo de fauna silvestre</Link>
                    <Link href={"/programas/programa-proteccion-de-especies-de-fauna-amenazadas"} className={"hover:text-[#AFA96E] transition-colors"}>Protección de especies de fauna amenazadas</Link>
                </div>
            </div>
        </footer>
    )
}