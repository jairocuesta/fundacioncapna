import Button from "../Button/Index";
import styles from './index.module.css'

type Props = {
    type?: 'terrestre' | 'marino'
}
export default function Inaturalist({ type }: Props) {

    function randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const image = randomIntFromInterval(3, 4);

    return (
        <div className={`flex items-end ${styles.howCanHelp} h-[20rem] text-white px-5`} style={{ backgroundImage: `url('/home/programs/1.webp')` }}>
            <div className={"flex flex-col justify-center items-center gap-10 h-full w-full text-center"}>
                <h2 className={"text-xl sm:text-[1.7rem] sm:leading-9"}>
                    <div>Inaturalist</div>
                </h2>
                <Button
                    href={"https://www.inaturalist.org/projects/biodiversidad-de-cap-cana"}
                    hrefTarget={"_blank"}
                    text={"Ir a Inaturalist"}
                    type={'main'}
                />
            </div>
        </div>
    )
}