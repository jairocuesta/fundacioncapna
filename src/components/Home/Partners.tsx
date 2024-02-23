// Next
import Image from 'next/image';
// Styles
import styles from './Home.module.css';

export default function HomePartners() {
    return (
        <div className={"bg-[#F9F9F9]"}>
            <div className={`flex flex-col gap-20 py-28 mx-auto max-w-7xl px-5`}>
                <div className={"grid place-content-center gap-8 text-center mx-auto"}>
                    <div className={"flex flex-col gap-5"}>
                        <h2 className={"text-3xl "}>Nuestros <span className={"font-bold text-[#AFA96E]"}>aliados</span></h2>
                        <div className={"flex items-center justify-center gap-1"}>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                            <div className={"h-[2px] w-8 bg-[#AFA96E]"}></div>
                        </div>
                    </div>
                    <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.`}</p>
                </div>
                <div className={"flex flex-col gap-10"}>
                    <div className={"grid grid-cols-5 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/svg.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/autotrac.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/vector.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} /> 
                        </div>
                    </div>
                    <div className={"grid grid-cols-5 gap-3"}>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/autotrac.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/vector.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/svg.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                        <div className={`${styles.partnerImageContainer}`}>
                            <Image src={"/home/partners/igol.webp"} className={`${styles.partnerImage}`} fill alt={"Partner image"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}