// React
import { useEffect, useState } from "react";
// Next
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// Types
import { styles } from "@/types";
// Animations
import { AnimatePresence, motion } from "framer-motion";

const ROUTES = ['/'];

type NavbarProps = styles;
export default function Header({ styles }: NavbarProps) {

    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        if(showMenu) {
            console.log(showMenu);
            document.body.style.overflowY = 'scroll';
        } else {
            console.log(showMenu);
            document.body.style.overflowY = 'hidden'
        }

        setShowMenu(!showMenu);
    };

    const [scrollY, setScrollY] = useState(0);
    const [headerBackground, setHeaderBackground] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollY > 50) {
            setHeaderBackground('white');
        } else {
            setHeaderBackground('');
        }
    }, [scrollY]);

    return (
        <header className={`w-screen flex items-center justify-center h-28 z-20 transition-colors ${headerBackground ? 'shadow-md border-b' : ''}`} style={{ backgroundColor: headerBackground ? headerBackground : styles?.background, color: headerBackground ? '#7D8034' : styles?.color || 'white', position: styles?.position || 'fixed' }}>
            <div className={"flex items-center justify-between lg:justify-center gap-16 px-10 w-full lg:w-auto"}>
                <Image src={headerBackground ? "/logo-color.png" : styles?.image == 'color' ? "/logo-color.png" : "/logo.png"} width={70} height={70} alt={"Logo"} />
                <nav className={"hidden lg:flex items-center gap-5"}>
                    <NavbarItem href={"/"} title={"Inicio"} />
                    <NavbarItem title={"Programas"}>
                        <div className={"flex flex-col gap-3 whitespace-nowrap text-sm text-[#7D8034]"}>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Conservación ambiental</Link>
                                <div>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Conservación terrestre</Link></li>
                                    </ul>
                                    <ul className={"ml-14 list-decimal"}>
                                        <li><Link href={"#"}>Flora</Link></li>
                                        <li><Link href={"#"}>Fauna terrestre</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Desarrollo social</Link>
                                <ul className={"ml-8 list-disc"}>
                                    <li><Link href={"#"}>{`Programa "Ni una gota más", reconstrucción de techos`}</Link></li>
                                    <li><Link href={"#"}>Programa de concienciación ambiental</Link></li>
                                </ul>
                            </div>
                        </div>
                    </NavbarItem>
                    <NavbarItem href={"#"} title={"Sostenibilidad"}>
                        <div className={"flex flex-col gap-3 whitespace-nowrap text-sm text-[#7D8034]"}>
                            <Link href={"#"} className={"font-semibold"}>Estrategia de sostenibilidad Cap Cana</Link>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Iniciativas sostenibles</Link>
                                <div>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Programa recuperación de PET</Link></li>
                                        <li><Link href={"#"}>Huerto orgánico</Link></li>
                                        <li><Link href={"#"}>Política de poda sostenible</Link></li>
                                        <li><Link href={"#"}>Políticas de pesca y liberación especies de Marlín</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Distrito de Sostenibilidad</Link>
                                <div>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Centro de investigación</Link></li>
                                    </ul>
                                    <ul className={"ml-14 list-decimal mb-2"}>
                                        <li><Link href={"#"}>Laboratorio Marino Punta Espada</Link></li>
                                        <li><Link href={"#"}>Laboratorio botánico</Link></li>
                                    </ul>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Museo interactivo</Link></li>
                                        <li><Link href={"#"}>Colecciones científicas de referencia</Link></li>
                                        <li><Link href={"#"}>Vivero de plantas nativas</Link></li>
                                        <li><Link href={"#"}>Huerto Orgánico</Link></li>
                                        <li><Link href={"#"}>Mariposario</Link></li>
                                        <li><Link href={"#"}>Apiario</Link></li>
                                        <li><Link href={"#"}>Orquideario</Link></li>
                                        <li><Link href={"#"}>Estación de compostaje</Link></li>
                                        <li><Link href={"#"}>Eco-tienda</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </NavbarItem>
                    <NavbarItem href={"#"} title={"Donaciones"}>
                        <div className={"flex flex-col gap-3 whitespace-nowrap text-sm text-[#7D8034]"}>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Membresías</Link>
                                <ul className={"ml-8 list-disc"}>
                                    <li><Link href={"#"}>Membresía empresarial</Link></li>
                                    <li><Link href={"#"}>Membresía personal</Link></li>
                                </ul>
                            </div>
                            <Link href={"#"} className={"font-semibold"}>Donación única</Link>
                            <Link href={"#"} className={"font-semibold"}>Compra nuestros productos</Link>
                        </div>
                    </NavbarItem>
                    <NavbarItem href={"#"} title={"Blog"}>
                        <div className={"flex flex-col gap-3 whitespace-nowrap text-sm text-[#7D8034]"}>
                            <Link href={"#"} className={"font-semibold"}>Eventos</Link>
                            <Link href={"#"} className={"font-semibold"}>Noticias</Link>
                            <Link href={"#"} className={"font-semibold"}>Newsletter</Link>
                        </div>
                    </NavbarItem>
                    <NavbarItem href={"#"} title={"Alianzas"} />
                    <NavbarItem href={"#"} title={"Investigación"} />
                    <NavbarItem href={"#"} title={"Contactos"} />
                </nav>
                <button className={"block lg:hidden"} onClick={handleShowMenu}>
                    <i className="fa-solid fa-bars text-3xl"></i>
                </button>
            </div>
            {showMenu ? (
                <MobileMenu closeMenu={handleShowMenu} />
            ) : null}
        </header>
    )
}

type NavbarItem = {
    title: string;
    href?: string;
    children?: React.ReactNode;
}
function NavbarItem({ title, href, children }: NavbarItem) {
    const router = useRouter();

    const currentPath = router.pathname;
    const isActualRoute = ROUTES.find(route => route == currentPath);

    const [ showMenu, setShowMenu ] = useState<boolean>(false);
    const handleShowMenu = () => setShowMenu(!showMenu);

    return (
        <div
            onMouseEnter={handleShowMenu}
            onMouseLeave={handleShowMenu}  
            className={"relative"}
        >
            <div 
                className={`text-sm ${isActualRoute == href ? 'font-semibold' : 'font-normal'}`}
            >
                {href ? (
                    <Link href={href}>{title}</Link>
                ) : (
                    <span className={"cursor-pointer"}>{title}</span>
                )}
            </div>
            {children ? (
                <AnimatePresence>
                    {showMenu ? (
                        <motion.div
                            className={"absolute left-0 pt-5"}
                            initial={{ opacity: 0, left: 20 }}
                            animate={{ opacity: 1, left: 0 }}
                            exit={{ opacity: 0, left: 20 }}
                        >
                            <div className={"bg-white shadow-md rounded-lg text-black p-5 border min-w-52"}>
                                {children}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            ) : null}
        </div>
    )
}

type MobileMenuProps = {
    closeMenu: () => void;
}
function MobileMenu({ closeMenu }: MobileMenuProps) {
    return (
        <div className={"fixed left-0 top-0 bg-white text-[#7D8034] w-screen h-screen px-5 py-10 sm:p-10 overflow-scroll"}>
            <button className={"absolute top-10 right-12"} onClick={closeMenu}>
                <i className={"fa-solid fa-times text-3xl"}></i>
            </button>
            <div className={"flex flex-col gap-16 items-center"}>
                <Image src={"/logo-color.png"} width={70} height={70} alt={"Logo"} />
                <nav className={"flex flex-col items-center gap-5"}>
                    <MenuItem href={"/"} title={"Inicio"} />
                    <MenuItem title={"Programas"}>
                        <div className={"flex flex-col gap-3 text-sm"}>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Conservación ambiental</Link>
                                <div>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Conservación terrestre</Link></li>
                                    </ul>
                                    <ul className={"ml-14 list-decimal"}>
                                        <li><Link href={"#"}>Flora</Link></li>
                                        <li><Link href={"#"}>Fauna terrestre</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Desarrollo social</Link>
                                <ul className={"ml-8 list-disc"}>
                                    <li><Link href={"#"}>{`Programa "Ni una gota más", reconstrucción de techos`}</Link></li>
                                    <li><Link href={"#"}>Programa de concienciación ambiental</Link></li>
                                </ul>
                            </div>
                        </div>
                    </MenuItem>
                    <MenuItem href={"#"} title={"Sostenibilidad"}>
                        <div className={"flex flex-col gap-3 text-sm"}>
                            <Link href={"#"} className={"font-semibold"}>Estrategia de sostenibilidad Cap Cana</Link>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Iniciativas sostenibles</Link>
                                <div>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Programa recuperación de PET</Link></li>
                                        <li><Link href={"#"}>Huerto orgánico</Link></li>
                                        <li><Link href={"#"}>Política de poda sostenible</Link></li>
                                        <li><Link href={"#"}>Políticas de pesca y liberación especies de Marlín</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Distrito de Sostenibilidad</Link>
                                <div>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Centro de investigación</Link></li>
                                    </ul>
                                    <ul className={"ml-14 list-decimal mb-2"}>
                                        <li><Link href={"#"}>Laboratorio Marino Punta Espada</Link></li>
                                        <li><Link href={"#"}>Laboratorio botánico</Link></li>
                                    </ul>
                                    <ul className={"ml-8 list-disc"}>
                                        <li><Link href={"#"}>Museo interactivo</Link></li>
                                        <li><Link href={"#"}>Colecciones científicas de referencia</Link></li>
                                        <li><Link href={"#"}>Vivero de plantas nativas</Link></li>
                                        <li><Link href={"#"}>Huerto Orgánico</Link></li>
                                        <li><Link href={"#"}>Mariposario</Link></li>
                                        <li><Link href={"#"}>Apiario</Link></li>
                                        <li><Link href={"#"}>Orquideario</Link></li>
                                        <li><Link href={"#"}>Estación de compostaje</Link></li>
                                        <li><Link href={"#"}>Eco-tienda</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </MenuItem>
                    <MenuItem href={"#"} title={"Donaciones"}>
                        <div className={"flex flex-col gap-3 text-sm"}>
                            <div className={"flex flex-col gap-1"}>
                                <Link href={"#"} className={"font-semibold"}>Membresías</Link>
                                <ul className={"ml-8 list-disc"}>
                                    <li><Link href={"#"}>Membresía empresarial</Link></li>
                                    <li><Link href={"#"}>Membresía personal</Link></li>
                                </ul>
                            </div>
                            <Link href={"#"} className={"font-semibold"}>Donación única</Link>
                            <Link href={"#"} className={"font-semibold"}>Compra nuestros productos</Link>
                        </div>
                    </MenuItem>
                    <MenuItem href={"#"} title={"Blog"}>
                        <div className={"flex flex-col gap-3 text-sm"}>
                            <Link href={"#"} className={"font-semibold"}>Eventos</Link>
                            <Link href={"#"} className={"font-semibold"}>Noticias</Link>
                            <Link href={"#"} className={"font-semibold"}>Newsletter</Link>
                        </div>
                    </MenuItem>
                    <MenuItem href={"#"} title={"Alianzas"} />
                    <MenuItem href={"#"} title={"Contactos"} />
                    <MenuItem href={"#"} title={"Investigación"} />
                </nav>
            </div>
        </div>
    )
}


function MenuItem({ title, href, children }: NavbarItem) {

    const router = useRouter();

    const currentPath = router.pathname;
    const isActualRoute = ROUTES.find(route => route == currentPath);

    const [showContent, setShowContent] = useState<boolean>(false);
    const handleShowContent = () => setShowContent(!showContent);

    return (
        <div
            className={"flex flex-col gap-2 relative"}
        >
            <div
                onClick={handleShowContent}
                className={`flex items-center justify-center gap-2 ${isActualRoute == href ? 'font-semibold' : 'font-normal'} cursor-pointer`}
            >
                {href ? (
                    <Link href={href}>{title}</Link>
                ) : (
                    <span className={"cursor-pointer"}>{title}</span>
                )}
                {children ? <i className="fa-regular fa-angle-down"></i> : null}
            </div>
            {children ? (
                <AnimatePresence>
                    {showContent ? (
                        <motion.div
                            initial={{ opacity: 0, left: 20 }}
                            animate={{ opacity: 1, left: 0 }}
                            exit={{ opacity: 0, left: 20 }}
                        >
                            <div className={"py-5 border-b border-t"}>
                                {children}
                            </div>
                        </motion.div>
                    ) : null}
                </AnimatePresence>
            ) : null}
        </div>
    )
}