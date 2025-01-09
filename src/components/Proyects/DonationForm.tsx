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
    const [amount, setAmount] = useState(0);
    // COMENTARIO
    const [comment, setComment] = useState('asdasd');
    const [paymentSession, setPaymentSession] = useState<string | undefined>(undefined);

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
        <div className="flex flex-col w-full lg:w-1/2 shadow-custom overflow-hidden rounded-xl">
            <div className='flex justify-between items-center gap-5 w-full rounded-t-xl pt-10 px-10'>
                <p className="text-start text-xl text-[#afa96e] font-semibold futura-light-regular uppercase">
                    Elige la cantidad a donar
                </p>
                <Steps step={step} />
            </div>
            <div className='flex flex-col gap-5 p-10 rounded-xl overflow-hidden'>
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
