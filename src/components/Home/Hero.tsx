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
                            src: '/home/background.webp',
                            classes: { backgroundPosition: 'bottom' }
                        },
                        {
                            src: '/home/lions.jpeg'
                        },
                    ]
                } 
            />
            <div className={"absolute flex flex-col gap-5 w-full text-center top-1/2 -translate-y-1/2 text-white"}>
                <motion.h2
                    initial={{ bottom: '-30px', opacity: 0 }}
                    whileInView={{ bottom: '0px', opacity: 1 }}
                    transition={{ delay: .3 }}
                    className={"relative flex flex-col px-5 lg:p-0 text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]"}
                >
                    <span className={"sm:whitespace-nowrap"}>{`"Todo lo que le damos a la Naturaleza,`}</span>
                    <span className={"sm:whitespace-nowrap"}>{`nos lo damos a nosotros"`}</span>
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