// React
import { useEffect, useRef, useState } from "react";
// Next
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
// Types
import { styles } from "@/types";
// Animations
import { AnimatePresence, motion } from "framer-motion";
import { headerLinks } from "@/utils/headerLinks";
import useClickOutside from "@/hooks/useClickOutside";

const ROUTES = ['/', '/alianzas', '/membresias', '/sostenibilidad', '/investigacion', '/blog', '/contacto'];

type NavbarProps = styles;
export default function Header({ styles }: NavbarProps) {

    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = () => {
        if (showMenu) {
            document.body.style.overflowY = 'scroll';
        } else {
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
            document.body.style.overflowY = 'scroll';
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
            <div className={"flex items-center justify-between lg:justify-center gap-10 px-10 w-full max-w-7xl"}>
                <Link href={"/"}>
                    <Image loading={'eager'} src={headerBackground ? "/logo-color.png" : styles?.image == 'color' ? "/logo-color.png" : "/logo.png"} width={95} height={95} alt={"Logo"} />
                </Link>
                <nav className={"hidden lg:flex items-center justify-between w-full"}>
                    <NavbarItem href={"/"} title={"Inicio"} />
                    <NavbarItem title={"Programas"} items={headerLinks.programs} />
                    <NavbarItem href={"/sostenibilidad/estrategia"} title={"Sostenibilidad"} />
                    {/* <NavbarItem href={"/membresias"} title={"Donaciones"} /> */}
                    <NavbarItem href={"/blog"} title={"Blog"} items={headerLinks.blog} />
                    <NavbarItem href={"/alianzas"} title={"Alianzas"} />
                    <NavbarItem href={"/investigacion"} title={"Investigacion"} />
                    <NavbarItem href={"/quienes-somos"} title={"Quienes somos"} />
                    <NavbarItem href={"https://capcana.com/es"} title={"Capcana"} />
                    <NavbarItem href={"/contacto"} title={"Contactos"} />
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

type Item = {
    name: string;
    href?: string;
    subitems?: Item[]
};

type NavbarItem = {
    title: string;
    href?: string;
    items?: Item[];
    children?: React.ReactNode;
}
function NavbarItem({ title, href, items }: NavbarItem) {
    const router = useRouter();

    const currentPath = `/${router.pathname.split('/')[1]}`;
    const isActualRoute = ROUTES.find(route => route == currentPath);

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const handleShowMenu = () => setShowMenu(!showMenu);

    const [subMenus, setSubMenus] = useState<{ first: Item[], second: Item[] }>({ first: [], second: [] });
    const handleSetSubmenus = (items: { first: Item[], second: Item[] }) => {
        setSubMenus({ first: [], second: [] });
        setSubMenus(items);
    }

    useEffect(() => {
        if (!showMenu) {
            setSubMenus({ first: [], second: [] });
        }
    }, [showMenu])

    return (
        <div
            onMouseEnter={handleShowMenu}
            onMouseLeave={handleShowMenu}
            className={"relative"}
        >
            <div
                className={` ${isActualRoute == href ? 'font-semibold' : 'font-normal'}`}
            >
                {href ? (
                    <Link href={href} target={href.slice(0, 5) == 'https' ? '_blank' : '_self'} className={"futura-light-regular uppercase text-sm border-b-2 py-2 border-transparent hover:border-white transition-colors"}>{title}</Link>
                ) : (
                    <span className={"cursor-pointer futura-light-regular uppercase text-sm border-b-2 py-2 border-transparent hover:border-white transition-colors"}>{title}</span>
                )}
            </div>
            {items && items?.length != 0 ? (
                <AnimatePresence>
                    {showMenu ? (
                        <motion.div
                            className={"absolute left-0 pt-5 flex items-start"}
                            initial={{ opacity: 0, left: 20 }}
                            animate={{ opacity: 1, left: 0 }}
                            exit={{ opacity: 0, left: 20 }}
                        >
                            <div className={`flex flex-col divide-y bg-white shadow-md rounded text-black p-3 py-2 min-w-52 ${subMenus.first.length != 0 ? 'border-r-2 border-r-[#AFA96E] rounded-r-none' : ''}`}>
                                {items.map((item, i) => item.href ? (
                                    <div key={i} className={"border-[#e4e4e4]"}>
                                        <Link
                                            onMouseEnter={item?.subitems ? () => handleSetSubmenus({ first: item.subitems || [], second: [] }) : () => null}
                                            className={"flex items-center gap-2 text-sm p-2 my-1 hover:bg-[#AFA96E4D] rounded whitespace-nowrap transition-colors"}
                                            href={item.href}
                                        >
                                            <span className={"futura-light-regular"}>{item.name}</span>
                                            {item.subitems ? (<i className="fa-regular fa-arrow-right"></i>) : null}
                                        </Link>
                                    </div>
                                ) : (
                                    <div key={i} className={"border-[#AFA96E]"}>
                                        <div
                                            onMouseEnter={item?.subitems ? () => handleSetSubmenus({ first: item.subitems || [], second: [] }) : () => null}
                                            className={"flex items-center gap-2 text-sm p-2 my-1 hover:bg-[#AFA96E4D] rounded whitespace-nowrap transition-colors"}
                                        >
                                            <span className={"futura-light-regular"}>{item.name}</span>
                                            {item.subitems ? (<i className="fa-regular fa-arrow-right"></i>) : null}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {subMenus.first.length != 0 && (
                                <div className={`flex flex-col divide-y bg-white shadow-md rounded rounded-l-none text-black p-3 py-2 min-w-52 ${subMenus.second.length != 0 ? 'border-r-2 border-r-[#AFA96E] rounded-r-none' : ''}`}>
                                    {subMenus.first.map((item, i) => item.href ? (
                                        <div key={i} className={"border-[#AFA96E]"}>
                                            <Link
                                                onMouseEnter={item?.subitems ? () => handleSetSubmenus({ ...subMenus, second: item.subitems || [] }) : () => null}
                                                className={"flex items-center gap-2 text-sm p-2 my-1 hover:bg-[#AFA96E4D] rounded whitespace-nowrap transition-colors"}
                                                href={item.href}
                                            >
                                                <span className={"futura-light-regular"}>{item.name}</span>
                                                {item.subitems ? (<i className="fa-regular fa-arrow-right"></i>) : null}
                                            </Link>
                                        </div>
                                    ) : (
                                        <div key={i} className={"border-[#AFA96E]"}>
                                            <div
                                                onMouseEnter={item?.subitems ? () => handleSetSubmenus({ ...subMenus, second: item.subitems || [] }) : () => null}
                                                className={"flex items-center gap-2 text-sm p-2 my-1 hover:bg-[#AFA96E4D] rounded whitespace-nowrap transition-colors"}
                                            >
                                                <span className={"futura-light-regular"}>{item.name}</span>
                                                {item.subitems ? (<i className="fa-regular fa-arrow-right"></i>) : null}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {subMenus.second.length != 0 && (
                                <div className={"flex flex-col divide-y bg-white shadow-md rounded rounded-l-none text-black p-3 py-2 border min-w-52"}>
                                    {subMenus.second.map((item, i) => item.href ? (
                                        <div key={i} className={"border-[#AFA96E]"}>
                                            <Link
                                                className={"flex items-center gap-2 text-sm p-2 my-1 hover:bg-[#AFA96E4D] rounded whitespace-nowrap transition-colors"}
                                                href={item.href}
                                            >
                                                <span className={"futura-light-regular"}>{item.name}</span>
                                                {item.subitems ? (<i className="fa-regular fa-arrow-right"></i>) : null}
                                            </Link>
                                        </div>
                                    ) : (
                                        <div key={i} className={"border-[#AFA96E]"}>
                                            <div
                                                className={"flex items-center gap-2 text-sm p-2 my-1 hover:bg-[#AFA96E4D] rounded whitespace-nowrap transition-colors"}
                                            >
                                                <span className={"futura-light-regular"}>{item.name}</span>
                                                {item.subitems ? (<i className="fa-regular fa-arrow-right"></i>) : null}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
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
        <div className={"futura-light-regular fixed left-0 top-0 bg-white text-[#7D8034] w-screen h-screen px-5 py-10 sm:p-10 overflow-scroll"}>
            <button className={"absolute top-10 right-12"} onClick={closeMenu}>
                <i className={"fa-solid fa-times text-3xl"}></i>
            </button>
            <div className={"flex flex-col gap-16 items-center"}>
                <Link href={"/"}>
                    <Image loading={'eager'} src={"/logo-color.png"} width={95} height={95} alt={"Logo"} />
                </Link>
                <nav className={"flex flex-col items-center justify-between w-fit"}>
                    <MenuItem href={"/"} title={"Inicio"} />
                    <MenuItem title={"Programas"} items={headerLinks.programs} />
                    <MenuItem href={"/sostenibilidad/estrategia"} title={"Sostenibilidad"} />
                    {/* <MenuItem href={"/membresias"} title={"Donaciones"} /> */}
                    <MenuItem href={"/blog"} title={"Blog"} items={headerLinks.blog} />
                    <MenuItem href={"/alianzas"} title={"Alianzas"} />
                    <MenuItem href={"/investigacion"} title={"Investigacion"} />
                    <MenuItem href={"/quienes-somos"} title={"Quienes somos"} />
                    <MenuItem href={"https://capcana.com/es"} title={"Capcana"} />
                    <MenuItem href={"/contacto"} title={"Contactos"} />
                </nav>
            </div>
        </div>
    )
}


function MenuItem({ title, href, items, children }: NavbarItem) {
    const router = useRouter();

    const menuRef = useRef(null);
    const currentPath = `/${router.pathname.split('/')[1]}`;
    const isActualRoute = ROUTES.find(route => route == currentPath);

    const [showMenu, setShowMenu] = useState<boolean>(false);
    const handleShowMenu = () => setShowMenu(true);

    const [subMenus, setSubMenus] = useState<{ first: { items: Item[] | [], item: number }, second: { items: Item[] | [], item: number } }>({ first: { items: [], item: 0 }, second: { items: [], item: 0 } });
    const handleSetSubmenus = (items: { first: { items: Item[] | [], item: number }, second: { items: Item[] | [], item: number } }) => {
        setSubMenus({ first: { items: [], item: 0 }, second: { items: [], item: 0 } });
        setSubMenus(items);
    }

    useClickOutside({ ref: menuRef, fn: () => setShowMenu(false) })

    useEffect(() => {
        if (!showMenu) {
            setSubMenus({ first: { items: [], item: 0 }, second: { items: [], item: 0 } });
        }
    }, [showMenu])

    return (
        <div
            ref={menuRef}
            className={"flex flex-col gap-2 relative text-center py-2 w-full"}
        >
            <div
                className={` ${isActualRoute == href ? 'font-semibold' : 'font-normal'} futura-light-regular uppercase text-sm flex flex-col`}
            >
                <Link 
                    onClick={() => setShowMenu(!showMenu)} 
                    href={href ?? '#'} 
                    className={`${showMenu ? 'border-b border-[#7D8034]' : ''} py-2 transition-colors`}
                    target={href?.slice(0, 5) == 'https' ? '_blank' : '_self'}
                >{title}</Link>
                {items && items?.length != 0 ? (
                    <AnimatePresence>
                        {showMenu ? (
                            <motion.div
                                className={"grid grid-cols-1"}
                                initial={{ opacity: 0, left: 20 }}
                                animate={{ opacity: 1, left: 0 }}
                                exit={{ opacity: 0, left: 20 }}
                            >
                                {items.map((item, i) => (
                                    <div key={i} className={"flex flex-col py-2"}> 
                                        <Link className={`${subMenus.first.items.length != 0 && subMenus.first.item == i ? 'pb-2 border-b border-[#7D8034]' : ''}`} href={item.href ?? '#'} onClick={() => subMenus.first.items.length == 0 ? handleSetSubmenus({ first: { items: item.subitems ?? [], item: i}, second: { items: [], item: 0 } }) : handleSetSubmenus({ first: { items: [], item: 0 }, second: { items: [], item: 0 }})}>{item.name}</Link>
                                        {i == subMenus.first.item && subMenus.first.items.map((item, j) => (
                                            <div key={j} className={`flex flex-col py-2 ${subMenus.second.items.length != 0 && subMenus.second.item == j ? 'pb-2 border-b border-[#7D8034]' : ''}`}>
                                                <Link className={`${subMenus.second.items.length != 0 && subMenus.second.item == j ? 'pb-2 border-b border-[#7D8034]' : ''}`} href={item.href ?? '#'} onClick={() => subMenus.second.items.length == 0 ? handleSetSubmenus({ first: { items: subMenus.first.items, item: subMenus.first.item }, second: { items: item.subitems ?? [], item: j } }) : handleSetSubmenus({ first: { items: subMenus.first.items, item: subMenus.first.item }, second: { items: [], item: 0 } })}>{item.name}</Link>
                                                {j == subMenus.second.item && subMenus.second.items.map((item, k) => (
                                                    <div key={k} className={"flex flex-col py-2"}>
                                                        <Link href={item.href ?? '#'}>{item.name}</Link>
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                ) : null}
            </div>
        </div>
    )
}