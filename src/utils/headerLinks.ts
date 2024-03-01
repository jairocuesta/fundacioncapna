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
                            name: "Flora",
                            href: "#",
                        },
                        {
                            name: "Fauna terrestre",
                            href: "#",
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
                    name: 'Programa "Ni una gota más", reconstrucción de techos',
                    href: "#",
                },
                {
                    name: 'Programa de concienciación ambiental',
                    href: "#",
                },
            ]
        },
    ],
    sustainability: [
        {
            name: "Estrategia de sostenibilidad Cap Cana",
            href: "#",
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