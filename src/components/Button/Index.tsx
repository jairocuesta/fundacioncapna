import Link from "next/link";

type ButtonProps = {
    href?: string;
    type: 'main' | 'white';
    text: string;
    action?: () => void;
    classes?: string;
    py?: string;
    px?: string;
}
export default function Button({ href, type, text, action, classes, py, px }: ButtonProps) {

    const classesObj = {
        main: "px-10 py-2 font-medium bg-[#7D8034] hover:bg-[#616328] text-white rounded-full transition-colors text-center",
        white: "px-10 py-2 font-medium bg-white hover:bg-neutral-200 text-[#7D8034] rounded-full transition-colors text-center"
    }

    return href ? (
        <Link className={classes ? classes : `${classesObj[type]} ${px ? px : 'px-10'} ${py ? py : 'py-10'}`} href={href}>{text}</Link>
    ) : (
        <button className={classes ? classes : `${classesObj[type]} ${px ? px : 'px-10'} ${py ? py : 'py-10'}`} onClick={action ? action : () => null}>{text}</button>
    )
}