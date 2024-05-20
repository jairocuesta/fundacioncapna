import axios from "axios";
// Next
import Image from "next/image";
import { useRouter } from "next/navigation";
// Components
import Layout from "@/components/Layout";
import Markdown from 'react-markdown'
// Types
import { Blog } from "@/types";
// DateFormat
import { DateTime } from 'luxon';

type BlogProps = {
    blog: Blog;
}
export default function DynamicBlog({ blog }: BlogProps) {
    const router = useRouter();

    useEffect(() => {
        if(!blog.alias) {
            router.push('/blog');
        }
    }, [blog]);

    if(!blog.alias) {
        return <div></div>
    }

    const date = DateTime.fromISO(blog.publishedAt).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <Layout title={"Blog"} header={{ styles: { color: '#7D8034', image: 'color' }}}>
            <section className={"flex flex-col gap-20 pt-28 pb-20"}>
                <div className={"flex flex-col gap-4 text-center pt-16 text-[#7D8034]"}>
                    <h1 className={"font-bold text-xl sm:text-2xl lg:text-3xl"}>{blog.name}</h1>
                    <span className={"text-sm sm:text-base"}>{blog.author} - {date}</span>
                </div>
                <div className={"image-container"}>
                    <Image loading={'eager'} src={`${process.env.NEXT_PUBLIC_STRAPI_URI}${blog.bannerImage.data.attributes.url}`} className={"image bg-center max-h-[30rem]"} fill alt={"Banner image"} />
                </div>
                <div className={"flex flex-col gap-6 max-w-7xl mx-auto px-5 sm:px-10 lg:px-20"}>
                    {blog.content.map((item, i) => item.__component == 'blog-content.subtitle' ? (
                        <span key={i} className={"text-xl sm:text-2xl font-bold text-[#7D8034]"}>{item.subtitle}</span>
                    ) : item.__component == 'blog-content.content' ? (
                        <div key={i} className={"flex flex-col gap-3"}>
                            {item.content.split('\n').map((p, i) => (<Markdown key={i} className={"leading-8"}>{p}</Markdown>))}
                        </div>
                    ) : null)}
                </div>
            </section>
        </Layout>
    )
}

import type { GetServerSideProps } from 'next'
import { useEffect } from "react";
export const getServerSideProps = (async (context) => {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const apiUrl = isDevelopment ? 'http://localhost:3000' : `http://${context.req.headers.host}`;

    try {
        const { data } = await axios.request({
            url: `${apiUrl}/api/blogs/getByUrl?blog=${context?.params?.blog}`
        });
        return { props: { blog: data } };
    } catch (error) {
        return { props: { blog: {} } };
    }
}) satisfies GetServerSideProps<{
    blog: Blog
}>