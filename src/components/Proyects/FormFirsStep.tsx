import React, { useEffect, useState, useRef } from 'react'
import SelectCurrency from './SelectCurrency';
import DonationOption from './DonationOption';
import BoxComent from './BoxComent';
import axios from 'axios';

type Props = {
    step: number,
    setStep: React.Dispatch<React.SetStateAction<number>>,
    amount: number,
    setAmount: React.Dispatch<React.SetStateAction<number>>,
    comment: string,
    setComment: React.Dispatch<string>,
    selectedCurrency: string,
    setSelectedCurrency: React.Dispatch<string>
    setPaymentSession: React.Dispatch<string | undefined>
    codeCurrency: string;
}

const FormFirsStep = ({ step, setStep, amount, setAmount, comment, setComment, selectedCurrency, setSelectedCurrency, setPaymentSession, codeCurrency }: Props) => {

    // Estados
    const [isCommentVisible, setIsCommentVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (amount > 0) {
            setError(false);
        }
        if (!isCommentVisible) {
            setComment('');
        }
    }, [amount, isCommentVisible]);

    const handleSelect = (amount: any) => {
        setAmount(amount);
    };

    const handleSubmitFirsStep = async () => {
        let errorMessage = '';

        if (amount === 0) {
            errorMessage = 'Debes seleccionar un monto';
            setError(true);
            return;
        }
        if (isCommentVisible && comment === '') {
            setErrorMessage('Debes escribir un comentario');
            return;
        }
        setLoading(true);

        try {
            const { data: response } = await axios.request({
                url: `/api/donations/createSession`,
                method: 'POST',
                data: {
                    amount,
                    codeCurrency,
                }
            })
            setError(false);
            setStep(2);
            console.log(response); 
            setPaymentSession(response.SESSION);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <SelectCurrency setSelectedCurrency={setSelectedCurrency} />
            <div>
                <DonationOption
                    amounts={[
                        { amount: 100, message: "¡Tu granito de arena cambia vidas!" },
                        { amount: 300, message: "Poco a poco lo haremos realidad." },
                        { amount: 500, message: "¡Ahora estamos más cerca de lograrlo!" },
                        { amount: 1000, message: "Gracias por unirte a esta hermosa causa." },
                        { amount: 3000, message: "¡Wow! Estamos llegando a la meta" },
                        { amount: 5000, message: "¡Muchísimas gracias por reescribir historias!" },
                    ]}
                    onSelect={(amount: any) => handleSelect(amount)}
                    selectedCurrency={selectedCurrency}
                    error={error}
                    setError={setError}
                />
            </div>
            <BoxComent
                comment={comment}
                setComment={setComment}
                isCommentVisible={isCommentVisible}
                setIsCommentVisible={setIsCommentVisible}
                errorMessage={errorMessage}
            />
            <button
                type='submit'
                onClick={handleSubmitFirsStep}
                className='flex gap-2 justify-center items-center w-full h-11 bg-[#898C31] hover:bg-[#646624] py-2 text-white font-semibold text-lg transition-colors duration-500'>
                {loading ? (
                    <div className="spinner"></div>
                ) : 'Siguiente'}
            </button>
        </>
    );
};

export default FormFirsStep;
