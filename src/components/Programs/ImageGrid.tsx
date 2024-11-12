import Link from "next/link"

type ImageGridProps = {
    images: {
        src: string,
        text: string,
        href: string,
    }[]
}
export default function ImageGrid({ images }: ImageGridProps) {
    return (
        <div className={"grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-14 pt-4"}>
            {images ? images.map((img, i) => (
                <Link key={i} href={`/programas/${img.href}`} className={"relative overflow-hidden w-full image-scale"} style={{ aspectRatio: '4/3' }}>
                    {img.src ? (
                        <img src={img.src} className={"absolute w-full h-full object-cover program-image transition-transform"} alt={img.text} />

                    ) : (
                        <div className={"absolute w-full h-full bg-neutral-200"}></div>
                    )}
                    <div className={"absolute top-0 w-full h-full grid place-content-center"}>
                        <span className={"text-shadow text-white futura-light-regular text-base sm:text-lg md:text-xl select-none uppercase text-center px-4"}>{img.text}</span>
                    </div>
                </Link>
            )) : null}
        </div>
    )
}