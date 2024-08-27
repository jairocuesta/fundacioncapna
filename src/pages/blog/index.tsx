import axios from "axios";
import { useEffect, useState } from "react";
// Next
import { useRouter } from "next/router";
// Styles
import styles from './index.module.css'
// Types
import { Blog as BlogType } from "@/types";
// Components
import Layout from "@/components/Layout";
import BlogComponent from "@/components/Blog/Index";
import LoadingSpinner from "@/components/LoadingSpinner/Index";
import Button from "@/components/Button/Index";
// Animations
import { motion } from 'framer-motion'

export default function Blog({ data, page, pageCount }: { data: BlogType[]; page: number; pageCount: number; }) {

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);
    const [blogData, setBlogData] = useState<BlogType[]>(data.length ? data : []);
    const [actualPage, setActualPage] = useState<number>(page || 1);

    const handleChangeActualPage = (newPage: number) => {
        if (newPage > pageCount) return;
        if (newPage < 1) return;

        setActualPage(newPage);
        setLoading(true);
    }
    const handleNextPage = () => {
        const newPage = actualPage + 1;
        
        if (newPage > pageCount) return;
        setActualPage(newPage);
        setLoading(true);
    }
    const handlePrevPage = () => {
        const newPage = actualPage - 1;

        if (newPage < 1) return;
        setActualPage(newPage);
        setLoading(true);
    }

    async function handleGetData() {
        try {
            const { data } = await axios.request({
                url: `/api/blogs/getByLimit?limit=6&page=${actualPage}`
            });
            setBlogData(data.data);
            setLoading(false);
        } catch (error) {
            setBlogData([])
            setLoading(false);
        }
    }

    useEffect(() => {
        if(!loading && actualPage == page) return;
        handleGetData();
    }, [actualPage]);

    return (
        <Layout title={"Blog"}>
            <div className={"flex flex-col text-center sm:text-left"}>
                <div className={`flex items-end justify-start ${styles.firstImage} h-[40rem] text-white px-5`}>
                    <motion.div 
                        initial={{ bottom: '-30px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .3, duration: .5 }}
                        className={"relative flex flex-col gap-4 px-5 sm:px-10 lg:px-28 py-20 w-full max-w-6xl mx-auto text-center"}
                    >
                        <h1 className={"flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] text-shadow text-center"}>
                            Blogs
                        </h1>
                       {/*  <div className={"flex items-center justify-center gap-2"}>
                            <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                            <div className={"h-1 w-12 bg-white rounded-full"}></div>
                            <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                            <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                        </div> */}
                    </motion.div>
                </div>
                <motion.div 
                    initial={{ bottom: '-30px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: .3, duration: .5 }}
                    className={"relative flex flex-col items-center gap-16 py-20 max-w-6xl mx-auto"}
                >
                    <div className={"flex flex-col items-center gap-5"}>
                        <div className={"flex gap-2 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] uppercase"}>
                            <span className={"relative -bottom-[2px]"}>Últimas</span>
                            <span className={"relative top-[2px] font-bold text-[#AFA96E]"}>entradas</span>
                        </div>
                        <div className={"flex items-center justify-center gap-2"}>
                            <div className={"h-[2px] w-8 bg-[#7D8034] rounded-full"}></div>
                            <div className={"h-[2px] w-8 bg-[#7D8034] rounded-full"}></div>
                            <div className={"h-[2px] w-8 bg-[#7D8034] rounded-full"}></div>
                        </div>
                    </div>
                    {!loading && blogData.length != 0 ? (
                        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 px-5 sm:px-10 text-left"}>
                            {blogData.map((blog, index) => (
                                <BlogComponent key={index} blog={{
                                    title: blog.name,
                                    description: blog.description,
                                    image: `${process.env.NEXT_PUBLIC_STRAPI_URI}${blog.blogPreview.data.attributes.url}`,
                                    date: blog.publishedAt,
                                    href: blog.alias,
                                }} />
                            ))}
                        </div>
                    ) : null}
                    {loading ? (
                        <div className={"grid place-content-center py-20"}>
                            <LoadingSpinner />
                        </div>
                    ) : null}
                    <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 px-5 sm:px-10 text-left"}>
                    </div>
                    {!loading && !blogData.length ? (
                        <div className={"text-center text-lg font-medium"}>No se pudieron obtener blogs</div>
                    ) : null}
                    <div className={"flex items-center gap-2"}>
                        <button onClick={handlePrevPage} className={`grid place-content-center w-8 h-8 border-2 border-[#7D8034] text-[#7D8034] rounded`}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        {Array.from(Array(pageCount).keys()).map((page, i) => (
                            <button key={i} onClick={() => handleChangeActualPage(page + 1)} className={`grid place-content-center w-8 h-8 border-2 border-[#7D8034] ${(page + 1) == actualPage ? "bg-[#7D8034] text-white" : "bg-transparent text-[#7D8034]"} font-medium rounded`}>{page + 1}</button>
                        ))}
                        <button onClick={handleNextPage} className={`grid place-content-center w-8 h-8 border-2 border-[#7D8034] text-[#7D8034] rounded`}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </motion.div>
                <div className={"flex flex-col"}>
                    {/* <div className={`flex items-center ${styles.newsImage} h-[35rem] text-white`}>
                        <div className={"flex flex-col items-center gap-12 max-w-4xl mx-auto px-5"}>
                            <div className={"flex flex-col items-center gap-5"}>
                                <div className={"flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}>
                                    <span className={"relative -bottom-[2px]"}>Nuestras</span>
                                    <span className={"font-bold"}>noticias</span>
                                </div>
                                <div className={"flex items-center justify-center gap-2"}>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                    <div className={"h-[2px] w-8 bg-white rounded-full"}></div>
                                </div>
                            </div>
                            <p className={"text-center"}>
                                Nos enorgullece compartir nuestras experiencias y los éxitos de nuestra comunidad de
                                voluntarios, miembros y aliados. Juntos, estamos creando un impacto real en la reservación de los
                                ecosistemas de Cap Cana y más allá.
                            </p>
                            <button className={"py-2 px-4 sm:px-8 bg-white text-[#7D8034] rounded-full font-semibold w-fit"}>
                                Ver noticias
                            </button>
                        </div>
                    </div> */}
                    <HomeNewsletter />
                </div>
            </div>
        </Layout>
    )
}

import type { GetServerSideProps } from 'next'
import HomeNewsletter from "@/components/Home/Newsletter";
export const getServerSideProps = (async (context) => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const apiUrl = isDevelopment ? 'http://localhost:3000' : `http://${context.req.headers.host}`;

    try {
        const { data } = await axios.request({
            url: `${apiUrl}/api/blogs/getByLimit?limit=6&page=1`
        });
        return { props: { data: data.data, page: data.page, pageCount: data.pageCount } };
    } catch (error) {
        return { props: { data: {}, page: 0, pageCount: 0 } };
    }
}) satisfies GetServerSideProps<{
    data: BlogType[];
    page: number;
    pageCount: number;
}>