import { formDonations } from '@/utils/formValidations';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Input from "@/components/Input/Index";
import CompanyDonationBox from './CompanyDonationBox';

type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>; 
    paymentSession: string | undefined;
}

const FormSecondStep = ({ setStep, paymentSession }: Props) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(formDonations)
    });

    const [comment, setComment] = useState('');
    const [anonymous, setAnonymous] = useState(false);

    const [companyName, setCompanyName] = useState('');
    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    
    // Estado para controlar el spinner
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCommentChange = (event: string) => {
        setComment(event);
    };

    const handleAnonumousChange = () => {
        setAnonymous(!anonymous);
    }

    useEffect(() => {
        if (companyName !== '') {
            setErrorMessage('');
        }
        if (!isCommentVisible) {
            setComment('');
        }
    }, [isCommentVisible, companyName]);

    const onSubmit = async (data: any) => {
        if (isCommentVisible && companyName === '') {
            setErrorMessage('Debes ingresar el nombre de la empresa');
            return;
        }
    
        let sessionId: string | undefined;
        if (paymentSession) {
            sessionId = paymentSession;
        }
    
        if (!sessionId) {
            setErrorMessage('No se ha encontrado el sessionId');
            return;
        }

        setIsSubmitting(true);
    
        const form = document.getElementById('authorization-form') as HTMLFormElement;
        const sessionInput = form.elements.namedItem('SESSION') as HTMLInputElement;
    
        if (sessionInput) {
            sessionInput.value = sessionId;
        }
        form.submit();
    }

    const handleBackClick = () => {
        setStep(1)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
            <div className='flex justify-between w-full gap-5'>
                <Input
                    htmlFor={`name`}
                    type={"text"}
                    label={"Nombre"}
                    placeholder={"Escribir aquí"}
                    props={register('name')}
                    errors={errors.name}
                />
                <Input
                    htmlFor={`surname`}
                    type={"text"}
                    label={"Apellido"}
                    placeholder={"Escribir aquí"}
                    props={register('surname')}
                    errors={errors.surname}
                />
            </div>
            <Input
                htmlFor={`email`}
                type={"email"}
                label={"Correo electrónico"}
                placeholder={"Escribir aquí"}
                props={register('email')}
                errors={errors.email}
            />
            <label className="text-xs flex gap-1 text-neutral-600">
                <input
                    type="checkbox"
                    checked={anonymous}
                    onChange={handleAnonumousChange}
                    style={{
                        accentColor: '#898C31',
                    }}
                />
                ¿Hacer donación anónima?
                <span className="info-icon">
                    <i className="fa-regular fa-circle-info"></i>
                    <span className="tooltip-text">La organización siempre mantendrá su información personal en privado.</span>
                </span>
            </label>
            <CompanyDonationBox
                companyName={companyName}
                setCompanyName={setCompanyName}
                isCommentVisible={isCommentVisible}
                setIsCommentVisible={setIsCommentVisible}
                errorMessage={errorMessage}
            />
            <textarea
                value={comment}
                onChange={(e) => handleCommentChange(e.target.value)}
                placeholder="Envíale un mensaje a esta causa"
                className='custom-checkbox w-full border-b border-[#898C31] text-neutral-600 min-h-20 max-h-32'
                rows={3}
            />

            <div className='flex gap-5 w-full'>
                <button
                    type='button'
                    onClick={handleBackClick}
                    className='flex gap-2 justify-center items-center w-full h-11 bg-neutral-400 hover:bg-neutral-500 py-2 text-white font-semibold text-lg transition-colors duration-500'>
                    Atrás
                </button>
                <button
                    type='submit'
                    className='flex gap-2 justify-center items-center w-full h-11 bg-[#898C31] hover:bg-[#646624] py-2 text-white font-semibold text-lg transition-colors duration-500'
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <div className="spinner"></div>  
                    ) : (
                        'Realizar Pago'
                    )}
                </button>
            </div>
            {/* Formulario HTML de autorización */}
            <form id="authorization-form" action="https://lab.cardnet.com.do/authorize" method="post">
                <input name="SESSION" type="hidden" />
            </form>
        </form>
    )
}

export default FormSecondStep;
