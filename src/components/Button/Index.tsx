import Link from "next/link";

type ButtonProps = {
    href?: string;
    type: 'main' | 'white';
    text: string;
    buttonType?: "submit" | "button" | "reset" | undefined;
    action?: (e?: any) => void;
    classes?: string;
    py?: string;
    px?: string;
}
export default function Button({ href, type, text, buttonType, action, classes, py, px }: ButtonProps) {

    const classesObj = {
        main: "font-bold uppercase bg-[#afa96e] hover:bg-[#8f8959] text-white rounded-full transition-colors text-center futura-light-regular",
        white: "font-bold uppercase bg-white hover:bg-neutral-200 text-[#afa96e] rounded-full transition-colors text-center futura-light-regular"
    }

    return href ? (
        <Link className={classes ? classes : `${classesObj[type]} ${px ? px : 'px-10'} ${py ? py : 'py-2'}`} href={href}>{text}</Link>
    ) : (
        <button type={buttonType} className={classes ? classes : `${classesObj[type]} ${px ? px : 'px-10'} ${py ? py : 'py-2'}`} onClick={action ? action : () => null}>{text}</button>
    )
}