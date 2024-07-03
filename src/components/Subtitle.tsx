export default function Subtitle({ text }: { text: string;}) {
    return (
        <span className={"text-lg sm:text-xl font-bold text-[#898C31] uppercase"}>{text}</span>
    )
}