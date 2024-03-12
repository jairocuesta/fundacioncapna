import axios from 'axios';
// React
import { useEffect, useState } from 'react';
// Animations
import { motion } from 'framer-motion';
// Components
import LoadingSpinner from '../LoadingSpinner/Index';
import Blog from '@/components/Blog/Index';
// Types
import { Blog as BlogType } from '@/types';

export default function HomeBlog() {

    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.request({
                    url: `/api/blogs/getByLimit?limit=3`,
                });
                setBlogs(data);
            } catch (error) {
                setBlogs([]);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        !loading && blogs.length != 0 ? (
            <div className={`flex flex-col gap-20 py-28 mx-auto max-w-7xl overflow-x-clip`}>
                <div className={"grid place-content-center gap-8 text-center mx-auto"}>
                    <motion.div
                        initial={{ bottom: '-50px', opacity: 0 }}
                        whileInView={{ bottom: '0px', opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: .1, duration: .5 }}
                        className={"relative flex flex-col gap-5"}
                    >
                        <h2 className={"text-3xl "}>Nuestros <span className={"font-bold text-[#AFA96E]"}>blog</span></h2>
                        <div className={"flex items-center justify-center gap-1"}>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                        </div>
                    </motion.div>
                    {loading ? (
                        <div className={"py-20 grid place-content-center"}>
                            <LoadingSpinner />
                        </div>
                    ) : (
                        <motion.div
                            initial={{ bottom: '-50px', opacity: 0 }}
                            whileInView={{ bottom: '0px', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: .2, duration: .5 }}
                            className={"relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto px-5 md:px-10"}
                        >
                            {blogs.length != 0 && blogs.map((blog, i) => (
                                <Blog
                                    key={i}
                                    blog={{
                                        title: blog.name,
                                        description: blog.description,
                                        image: `${process.env.NEXT_PUBLIC_STRAPI_URI}${blog.blogPreview.data.attributes.url}`,
                                        date: blog.publishedAt,
                                        href: blog.alias,
                                    }}
                                />
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>
        ) : <></>
    )
}