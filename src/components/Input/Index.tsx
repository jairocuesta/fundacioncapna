import { FieldError } from "react-hook-form";

type InputTypes = {
    htmlFor: string;
    type: React.HTMLInputTypeAttribute | undefined
    label: string;
    placeholder?: string | undefined;
    props: any;
    errors: FieldError | undefined
}
export default function Input({ htmlFor, type, label, placeholder, props, errors }: InputTypes) {
    return (
        <div className={"flex flex-col"}>
            <label 
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <input 
                id={htmlFor}
                className={`py-2 px-3 rounded-md w-full border ${errors?.message ? 'border-red-500' : 'focus:border-[#7D8034]'}`} 
                type={type} 
                placeholder={placeholder || ''} 
                {...props} 
            />
        </div>
    )
}