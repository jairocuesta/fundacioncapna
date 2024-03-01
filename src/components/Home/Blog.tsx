// Next
import Image from 'next/image';
import Link from 'next/link';
// Styles
import styles from './Home.module.css';
// Animations
import { motion } from 'framer-motion';

export default function HomeBlog() {
    return (
        <div className={`flex flex-col gap-20 py-28 mx-auto max-w-7xl overflow-x-clip`}>
            <div className={"grid place-content-center gap-8 text-center mx-auto"}>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .1 }}
                    className={"relative flex flex-col gap-5"}
                >
                    <h2 className={"text-3xl "}>Nuestros <span className={"font-bold text-[#AFA96E]"}>blog</span></h2>
                    <div className={"flex items-center justify-center gap-1"}>
                        <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                        <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                        <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ bottom: '-50px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .2 }}
                    className={"relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto px-5 md:px-10"}
                >
                    <Blog 
                        blog={{ 
                            title: "Nombre del blog",
                            description: "Pequeña descripción sobre el gran blog para que sepa de qué se trata.",
                            image: "/home/blogs/1.jpeg",
                            date: "12 agosto 2024",
                            href: "#",
                        }}
                    />
                    <Blog
                        blog={{
                            title: "Nombre del blog",
                            description: "Pequeña descripción sobre el gran blog para que sepa de qué se trata.",
                            image: "/home/blogs/2.jpeg",
                            date: "12 agosto 2024",
                            href: "#",
                        }}
                    />
                    <Blog
                        blog={{
                            title: "Nombre del blog",
                            description: "Pequeña descripción sobre el gran blog para que sepa de qué se trata.",
                            image: "/home/blogs/3.jpeg",
                            date: "12 agosto 2024",
                            href: "#",
                        }}
                    />
                </motion.div>
            </div>
        </div>
    )
}

interface BlogProps {
    blog: {
        title: string;
        description: string;
        image: string;
        date: string;
        href: string;
    }
}

function Blog({ blog }: BlogProps) {
    return (
        <div className={"flex flex-col items-start gap-3"}>
            <div className={"overflow-hidden rounded-lg w-full"}>
                <div className={`${styles.blogImageContainer} lg:max-h-[13rem]`}>
                    <Image src={blog.image} className={`${styles.blogImage}`} fill alt={"Blog image"} />
                </div>
            </div>
            <div className={"flex flex-col items-start gap-3 text-left"}>
                <div className={"flex flex-col gap-2"}>
                    <span className={"text-sm text-[#898C31]"}>{blog.date}</span>
                    <div className={"flex flex-col gap-1"}>
                        <span className={"text-[#7D8034] font-bold"}>{blog.title}</span>
                        <p>{blog.description}</p>
                    </div>
                </div>
                <Link href={blog.href} className={"flex items-center gap-2 font-semibold text-[#7D8034]"}>
                    <span>Ver más</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}