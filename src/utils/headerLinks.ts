type Item = { 
    name: string; 
    href?: string; 
    subitems?: Item[] 
};

type Props = {
    [key: string]: Item[]
}

export const headerLinks: Props = {
    programs: [
        {
            name: "Conservación ambiental",
            href: "#",
            subitems: [
                {
                    name: "Conservación terrestre",
                    href: "#",
                    subitems: [
                        {
                            name: "Reproducción de plantas nativas y endémicas amenazadas",
                            href: "/programas/programa-reproduccion-de-plantas-nativas-y-endemicas-amenazadas",
                        },
                        {
                            name: "Conservación de orquídeas nativas",
                            href: "/programas/programa-conservacion-de-orquideas-nativas",
                        },
                        {
                            name: "Protección de especies de fauna amenazadas",
                            href: "/programas/programa-proteccion-de-especies-de-fauna-amenazadas",
                        },
                        {
                            name: "Monitoreo de fauna silvestre",
                            href: "/programas/programa-monitoreo-de-fauna-silvestre",
                        },
                        {
                            name: "Atención primaria a fauna silvestre",
                            href: "/programas/programa-atencion-primaria-fauna-silvestre",
                        },
                        {
                            name: "Rescate de colmenas",
                            href: "/programas/programa-rescate-de-colmenas",
                        },
                    ]
                },
                {
                    name: "Conservación marina",
                    href: "#",
                    subitems: [
                        {
                            name: "Acuerdo de co-gestión del Santuario Marino Arrecifes del Sureste (SAMAR)",
                            href: "/programas/programa-reproduccion-de-plantas-nativas-y-endemicas-amenazadas",
                        },
                        {
                            name: "Rehabilitación de arrecifes de coral",
                            href: "/programas/programa-rehabilitacion-de-arrecifes-de-coral",
                        },
                        {
                            name: "Monitoreo de salud arrecifal y de enfermedades de coral",
                            href: "/programas/programa-de-monitoreo-de-salud-arrecifal-y-de-enfermedades-de-coral",
                        },
                        {
                            name: "Monitoreo de anidamiento de tortugas marinas",
                            href: "/programas/programa-de-monitoreo-de-anidamiento-de-tortugas-marinas",
                        },
                        {
                            name: "Registro de avistamientos de manatíes",
                            href: "/programas/programa-de-registro-de-avistamientos-de-manaties",
                        },
                        {
                            name: "Rescate de colmenas",
                            href: "/programas/programa-rescate-de-colmenas",
                        },
                    ]
                }
            ]
        },
        {
            name: "Desarrollo social",
            href: "#",
            subitems: [
                {
                    name: '"Ni una gota más", reconstrucción de techos',
                    href: "/programas/programa-ni-una-gota-mas-reconstruccion-de-techos",
                },
                {
                    name: 'Concienciación ambiental',
                    href: "/programas/programa-de-concienciacion-socioambiental",
                },
                {
                    name: 'Apoyo Comunitario',
                    href: "/programas/programa-de-apoyo-comunitario",
                },
            ]
        },
        {
            name: "Sostenibilidad",
            href: "/sostenibilidad/estrategia"
        }
    ],
    sustainability: [
        {
            name: "Estrategia de sostenibilidad Cap Cana",
            href: "/sostenibilidad/estrategia",
        },
        {
            name: "Iniciativas sostenibles",
            href: "#",
            subitems: [
                {
                    name: 'Programa recuperación de PET',
                    href: "#",
                },
                {
                    name: 'Huerto orgánico',
                    href: "#",
                },
                {
                    name: 'Política de poda sostenible',
                    href: "#",
                },
                {
                    name: 'Políticas de pesca y liberación especies de Marlín',
                    href: "#",
                },
            ]
        },
        {
            name: "Distrito de Sostenibilidad",
            href: "#",
            subitems: [
                {
                    name: 'Centro de investigación',
                    href: "#",
                },
                {
                    name: 'Museo interactivo',
                    href: "#",
                },
                {
                    name: 'Colecciones científicas de referencia',
                    href: "#",
                },
                {
                    name: 'Vivero de plantas nativas',
                    href: "#",
                },
                {
                    name: 'Huerto Orgánico',
                    href: "#",
                },
                {
                    name: 'Mariposario',
                    href: "#",
                },
                {
                    name: 'Apiario',
                    href: "#",
                },
                {
                    name: 'Orquideario',
                    href: "#",
                },
                {
                    name: 'Estación de compostaje',
                    href: "#",
                },
                {
                    name: 'Eco-tienda',
                    href: "#",
                },
            ]
        },
    ],
    memberships: [
        {
            name: "Membresías",
            href: "#",
            subitems: [
                {
                    name: "Membresía empresarial",
                    href: "#",
                },
                {
                    name: "Membresía personal",
                    href: "#",
                },
            ]
        },
        {
            name: "Donación única",
            href: "#",
        },
        {
            name: "Compra nuestros productos",
            href: "#",
        },
    ],
    blog: [
        {
            name: "Eventos",
            href: "#",
        },
        {
            name: "Noticias",
            href: "#",
        },
        {
            name: "Newsletter",
            href: "#",
        },
    ],
}