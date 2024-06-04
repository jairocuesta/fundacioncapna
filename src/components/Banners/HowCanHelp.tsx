import Button from "../Button/Index";
import styles from './index.module.css'

export default function HowCanHelp() {

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const image = randomIntFromInterval(3, 4);

    return (
        <div className={`flex items-end ${styles.howCanHelp} h-[35rem] text-white px-5`} style={{ backgroundImage: `url('/programas/example/${image}.jpg')` }}>
            <div className={"flex flex-col justify-center items-center gap-10 h-full w-full text-center"}>
                <h2 className={"text-xl sm:text-[1.7rem] sm:leading-9"}>
                    <div>Te invitamos a <span className={"font-bold"}>ser parte de<br /> nuestra misión</span> de conservación</div>
                </h2>
                <Button
                    href={"#"}
                    text={"¿Cómo puedo ayudar?"}
                    type={"white"}
                />
            </div>
        </div>
    )
}