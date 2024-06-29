// Components
import { FullSlider } from '../Sliders'
// Animations
import { motion } from 'framer-motion'

export default function HomeHero() {
    return (
        <div className={`h-screen w-full overflow-x-clip`}>
            <FullSlider 
                images={
                    [
                        { 
                            src: '/home/banner/3.webp',
                            type: 'image'
                        },
                        {
                            src: '/home/banner/1.webp',
                            type: 'image'
                        },
                        {
                            src: '/home/banner/2.webp',
                            type: 'image'
                        },
                        {
                            src: '/home/banner/farallon.mp4',
                            type: 'video'
                        }
                    ]
                } 
            />
            <div className={"absolute flex flex-col items-center gap-5 w-full text-center left-1/2 -translate-x-1/2 bottom-20 text-white max-w-5xl overflow-x-clip"}>
                <motion.h2
                    initial={{ bottom: '-30px', opacity: 0 }}
                    animate={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .3, duration: .5 }}
                    className={"relative flex flex-col px-5 lg:p-0 text-lg md:text-xl lg:text-2xl w-fit"}
                >
                    <span className={"sm:whitespace-nowrap z-10 relative text-shadow"}>{`Todo lo que le damos a la Naturaleza,`}</span>
                    <span className={"sm:whitespace-nowrap z-10 relative text-shadow"}>{`nos lo damos a nosotros`}</span>
                    <div className={"absolute w-full h-full bg-black opacity-20 blur-2xl"}></div>
                </motion.h2>
                <motion.span
                    animate={{ top: '30px' }}
                    transition={{ repeat: Infinity, duration: .5, ease: 'easeInOut', repeatType: "reverse" }}
                    className={"relative text-3xl md:text-4xl"}
                >
                    <i className="fa-regular fa-angles-down"></i>
                </motion.span>
            </div>
        </div>
    )
}