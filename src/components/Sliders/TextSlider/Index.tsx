import { Slide } from 'react-slideshow-image';
import styles from './Index.module.css'
import { useEffect, useRef, useState } from 'react';

type SliderProps = {
    images: {
        src: string;
        classes?: {
            backgroundPosition?: string;
        };
        type?: 'video' | 'image';
        title?: string;
        description?: string;
    }[];
    classes?: string;
    title: string;
    description: string;
}
export default function TextSlider({ images, classes, title, description }: SliderProps) {

    const [ slideState, setSlideState ] = useState<{ last: number; current: number }>({ last: -1, current: 0 });

    const properties = {
        prevArrow: <button className={"text-slider-prev-arrow"}><i className="fa-light fa-circle-arrow-left text-[2rem]"></i></button>,
        nextArrow: <button className={"text-slider-next-arrow"}><i className="fa-light fa-circle-arrow-right text-[2rem]"></i></button>,
        autoplay: false,
        duration: 5000,
        transitionDuration: 500,
        easing: 'ease',
        canSwipe: false,
        // indicators: (index?: number) => <div className={"indicator"}></div>,
        onChange: (from: number, to: number) => setSlideState({ last: from, current: to }),
        infinite: true,
    }

    return (
        <div className={`relative w-full text-white ${classes ? classes : ''}`}>
            <Slide {...properties}>
                {images.map((img, i) => (
                    <SlideItem key={i} slide={img} title={title} description={description} slideState={slideState} slideIndex={i} />
                ))}
            </Slide>
        </div>

    )
}

type SlideItemProps = {
    slide: {
        src: string;
        classes?: {
            backgroundPosition?: string;
        };
        type?: 'video' | 'image';
        title?: string;
        description?: string;
    };
    title: string;
    description: string;
    slideState: {
        last: number;
        current: number;
    };
    slideIndex: number;
}
function SlideItem({ slide, title, description, slideState, slideIndex }: SlideItemProps) {

    const videoRef = useRef(null);

    useEffect(() => {
        const target = videoRef.current! as HTMLVideoElement;

        if(slideState.last === slideIndex) {
            if(!target) return;
            target.pause();
        }

        if(slideIndex == slideState.current && slide.type == 'video') {
            target.play();
            target.volume = 0.5;
        }
    }, [slideState])

    useEffect(() => {
        if(videoRef.current == null) return;

        const target = videoRef.current as HTMLVideoElement;
        target.pause();
    }, [videoRef])

    return (
        slide.type == 'video' ? (
            <div className={`${styles.imageContainer}`}>
                <video ref={videoRef} width={'w-full'} controls>
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <section className={"absolute bottom-0 left-0 pb-10 lg:pb-28 flex flex-col gap-4 px-5 lg:px-52 text-center lg:text-left 2xl:w-3/4"} style={{ zIndex: '-1' }}>
                    {title ? <h2 className={"text-xl sm:text-[1.7rem] font-medium"}>{slide.title}</h2> : null}
                    {description ? <p className={"text-sm sm:text-base text-white text-shadow"}>{slide.description}</p> : null}
                </section> */}
            </div>
        ) : (
            <div className={`${styles.imageContainer}`}>
                <div className={"grid place-content-end"} style={{ position: 'relative', backgroundImage: `url(${slide.src})`, backgroundSize: 'cover', backgroundPosition: slide?.classes?.backgroundPosition ?? 'center' }}>
                    {/* <div className={"pb-10 lg:pb-32 flex flex-col gap-4 px-5 lg:px-52 text-center lg:text-left 2xl:w-3/4"}>
                        <h2 className={"text-xl sm:text-[1.7rem] font-medium text-shadow"}>{title}</h2>
                        <p className={"text-sm sm:text-base text-white"}>{description}</p>
                    </div> */}
                </div>
            </div>
        )
    )
}