import Link from "next/link";
import { useRouter } from "next/router"

type Props = {
    routes: { name: string; url: string }[]
}
export default function Breadcrumb({ routes }: Props) {

    return (
        <div className={"text-[#7D8034]"}>
            <div className={"flex items-center gap-2"}>
                {routes?.map((route, i) => (
                    <div key={i} className={"flex items-center gap-2"}>
                        <Link href={route.url} className={"underline"}>{route.name}</Link>
                        <span>{(i + 1) < routes.length ? <i className={"fa-light fa-angle-right"}></i> : ''}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}