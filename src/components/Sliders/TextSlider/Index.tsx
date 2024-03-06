import { Slide } from 'react-slideshow-image';
import styles from './Index.module.css'

type SliderProps = {
    images: {
        src: string;
        classes?: {
            backgroundPosition?: string;
        };
    }[];
    classes?: string;
    title: string;
    description: string;
}
export default function TextSlider({ images, classes, title, description }: SliderProps) {

    const properties = {
        prevArrow: <button className={"text-3xl text-white ml-5"}><i className="fa-regular fa-angle-left"></i></button>,
        nextArrow: <button className={"text-3xl text-white mr-5"}><i className="fa-regular fa-angle-right"></i></button>,
        autoplay: true,
        duration: 5000,
        transitionDuration: 500,
        easing: 'ease',
        canSwipe: false,
    }

    return (
        <div className={`relative w-full text-white ${classes ? classes : ''}`}>
            <Slide {...properties}>
                {images.map((img, i) => (
                    <div key={i} className={`${styles.imageContainer}`}>
                        <div className={"grid place-content-center"} style={{ position: 'relative', backgroundImage: `linear-gradient(#7D803480, #7D803480), url(${img.src})`, backgroundSize: 'cover', backgroundPosition: img?.classes?.backgroundPosition ?? 'center' }}>
                            <div className={"flex flex-col gap-4 lg:w-2/3 text-center mx-auto"}>
                                <h2 className={"text-xl sm:text-[1.7rem] font-medium"}>{title}</h2>
                                <p className={"text-sm sm:text-base"}>{description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>

    )
}

/* 
<div className={`flex items-end ${styles.background} lg:h-[30rem] text-white px-5 lg:px-52 text-center lg:text-left py-20 lg:py-0`}>
    <div className={"flex flex-col gap-12 lg:gap-5 lg:pb-24"}>
        <div className={"flex flex-col gap-4 lg:w-2/3"}>
            <h2 className={"text-xl sm:text-[1.7rem] font-medium"}>Frase para esta imagen que irá aquí </h2>
            <p className={"text-sm sm:text-base"}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`}</p>
            <div className={"flex items-center justify-center lg:justify-start gap-2"}>
                <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                <div className={"h-1 w-12 bg-white rounded-full"}></div>
                <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
                <div className={"h-1 w-12 bg-white opacity-50 rounded-full"}></div>
            </div>
        </div>
        <div className={"flex items-center justify-center lg:justify-end gap-5"}>
            <button>
                <i className="fa-light fa-circle-arrow-left text-[2rem]"></i>
            </button>
            <button>
                <i className="fa-light fa-circle-arrow-right text-[2rem]"></i>
            </button>
        </div>
    </div>
</div>

*/