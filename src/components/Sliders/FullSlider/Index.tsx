import styles from './Index.module.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

type SliderProps = {
    images: {
        src: string;
        classes?: {
            backgroundPosition?: string;
        };
    }[];
    classes?: string;
}
export default function FullSlider({ images, classes }: SliderProps) {

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
        <div className={`relative w-full h-full ${classes ? classes : ''}`}>
            <Slide {...properties}>
                {images.map(img => (
                    <div className={styles.imageContainer}>
                        <div style={{ position: 'relative', backgroundImage: `url(${img.src})`, backgroundSize: 'cover', backgroundPosition: img?.classes?.backgroundPosition ?? 'center' }}></div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}