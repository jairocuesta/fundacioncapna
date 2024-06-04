import Button from "../Button/Index";
import styles from './index.module.css'

export default function BecomeMember() {

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const image = randomIntFromInterval(1, 2);

    return (
        <div className={`max-w-7xl mx-auto px-5 sm:px-10 lg:px-20 w-full`}>
            <div className={`${styles.becomeMember} grid place-content-center w-full h-[20rem] sm:h-[30rem] rounded-2xl`} style={{ backgroundImage: `url('/programas/banners/${image}.webp')`}}>
                <Button
                    href={"#"}
                    text={"Conviértete en miembro"}
                    type={"main"}
                />
            </div>
        </div>
    )
}