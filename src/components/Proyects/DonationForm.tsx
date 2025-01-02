import React, { useEffect, useState } from 'react';
import SelectCurrency from './SelectCurrency';
import Steps from './Steps';
import DonationOption from './DonationOption';
import Subtitle from '../Subtitle';
import BoxComent from './BoxComent';
import Button from '../Button/Index';
import FormFirsStep from './FormFirsStep';
import FormSecondStep from './FormSecondStep';

const DonationForm = () => {

    // PASOS
    const [step, setStep] = useState(1);

    // MONEDA SELECCIONADA
    const [selectedCurrency, setSelectedCurrency] = useState('DOP');
    const [codeCurrency, setCodeCurrency] = useState('')
    const [amount, setAmount] = useState(0);
    // COMENTARIO
    const [comment, setComment] = useState('asdasd');
    const [paymentSession, setPaymentSession] = useState<string | undefined>(undefined);

    useEffect(() => {
        if(selectedCurrency === 'DOP') {
            setCodeCurrency('214')
        } else if(selectedCurrency === 'USD') {
            setCodeCurrency('840')
        } else {
            setCodeCurrency('214')
        }
    }, [selectedCurrency])


    useEffect(() => {
        if (step === 2) {
            window.scrollBy({
                top: -400,  
                behavior: 'smooth', 
            });
        }
    }, [step]);

    //console.log(codeCurrency) 

    return (
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/3'>
            <div className='flex justify-between items-center gap-5 w-full bg-[#898C31] p-5'>
                <p className='text-white font-semibold'>Elige la cantidad</p>
                <Steps step={step} />
            </div>
            <div className='flex flex-col gap-5 border border-[#898C31] border-opacity-30 p-5'>
                {step === 1 ? (
                    <FormFirsStep
                        step={step}
                        setStep={setStep}
                        amount={amount}
                        setAmount={setAmount}
                        comment={comment}
                        setComment={setComment}
                        selectedCurrency={selectedCurrency}
                        setSelectedCurrency={setSelectedCurrency}
                        setPaymentSession={setPaymentSession}
                        codeCurrency={codeCurrency}
                    />
                ) : (
                    <FormSecondStep 
                        setStep={setStep}
                        paymentSession={paymentSession}
                    />
                )}
            </div>
        </div>
    );
};

export default DonationForm;
