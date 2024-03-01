import { FullSlider } from '../Sliders'
import styles from './Home.module.css'

export default function HomeHero() {
    return (
        <div className={`h-screen w-full`}>
            <FullSlider 
                images={
                    [
                        { 
                            src: '/home/background.webp',
                            classes: { backgroundPosition: 'bottom' }
                        },
                        {
                            src: '/home/lions.jpeg'
                        },
                    ]
                } 
            />
            <div className={"absolute flex flex-col gap-5 w-full text-center top-[40vh] md:top-[26vh] text-white"}>
                <h2 className={"flex flex-col px-5 lg:p-0 text-xl sm:text-3xl"}>
                    <span className={"sm:whitespace-nowrap"}>{`"Todo lo que le damos a la Naturaleza,`}</span>
                    <span className={"sm:whitespace-nowrap"}>{`nos lo damos a nosotros"`}</span>
                </h2>
                <span className={"text-2xl"}>
                    <i className="fa-regular fa-angles-down"></i>
                </span>
            </div>
        </div>
    )
}