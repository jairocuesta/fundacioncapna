import { useEffect, useRef, useState } from 'react';
import styles from './Index.module.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

type SliderProps = {
    images: {
        src: string;
        classes?: {
            backgroundPosition?: string;
        };
        type: 'image' | 'video'
    }[];
    classes?: string;
}
export default function FullSlider({ images, classes }: SliderProps) {

    const [slideState, setSlideState] = useState<{ last: number; current: number }>({ last: -1, current: 0 });

    const properties = {
        prevArrow: <button className={"text-3xl text-white ml-5"}><i className="fa-regular fa-angle-left"></i></button>,
        nextArrow: <button className={"text-3xl text-white mr-5"}><i className="fa-regular fa-angle-right"></i></button>,
        autoplay: true,
        duration: 5000,
        transitionDuration: 500,
        easing: 'ease',
        onChange: (from: number, to: number) => setSlideState({ last: from, current: to }),
        canSwipe: false,
    }

    return (
        <div className={`relative w-full h-full ${classes ? classes : ''}`}>
            <Slide {...properties}>
                {images.map((img, i) => (
                    <SlideItem key={i} item={img} slideState={slideState} slideIndex={i} />
                ))}
            </Slide>
        </div>
    )
}

type SlideItemProps = {
    item: {
        src: string;
        classes?: {
            backgroundPosition?: string;
        };
        type: 'image' | 'video'
    },
    slideState: {
        last: number;
        current: number;
    };
    slideIndex: number;
}
function SlideItem({ item, slideState, slideIndex }: SlideItemProps) {

    const videoRef = useRef(null);

    useEffect(() => {
        const target = videoRef.current! as HTMLVideoElement;

        if (slideState.last === slideIndex) {
            if (!target) return;
            target.pause();
        }

        if (slideIndex == slideState.current && item.type == 'video') {
            target.play();
            target.volume = 0.5;
        }
    }, [slideState])

    useEffect(() => {
        if (videoRef.current == null) return;

        const target = videoRef.current as HTMLVideoElement;
        target.pause();
    }, [videoRef])

    return (
        <div className={"h-screen w-screen overflow-hidden"}>
            {item.type == 'image' ? (
                <div className={styles.imageContainer}>
                    <div style={{ position: 'relative', backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: item?.classes?.backgroundPosition ?? 'center' }}></div>
                </div>
            ) : item.type == 'video' ? (
                <div className={styles.imageContainer}>
                    <video ref={videoRef} className={"w-screen h-screen object-cover"} loop={true}>
                        <source src={item.src} type="video/mp4" className={"object-cover"} />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : null}
        </div>
    )
}