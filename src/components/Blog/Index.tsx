import Image from "next/image";
import Link from "next/link";
import styles from './Index.module.css'
import { DateTime } from "luxon";

interface BlogProps {
    blog: {
        title: string;
        description: string;
        image: string;
        date: string;
        href: string;
    }
}

export default function Blog({ blog }: BlogProps) {

    const date = DateTime.fromISO(blog.date).toLocaleString({ month: 'long', day: 'numeric', year: 'numeric' });

    return (
        <div className={"flex flex-col items-start gap-3"}>
            <div className={"overflow-hidden rounded-lg w-full"}>
                <div className={`${styles.blogImageContainer} lg:max-h-[13rem]`}>
                    <Image src={blog.image} className={`${styles.blogImage}`} fill loading={'eager'} alt={"Blog image"} />
                </div>
            </div>
            <div className={"flex flex-col items-start gap-3 text-left"}>
                <div className={"flex flex-col gap-2"}>
                    <span className={"text-sm text-[#898C31]"}>{date}</span>
                    <div className={"flex flex-col gap-1"}>
                        <span className={"text-[#7D8034] font-bold"}>{blog.title}</span>
                        <p>{blog.description}</p>
                    </div>
                </div>
                <Link href={`/blog/${blog.href}`} className={"flex items-center gap-2 font-semibold text-[#7D8034]"}>
                    <span>Ver más</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}