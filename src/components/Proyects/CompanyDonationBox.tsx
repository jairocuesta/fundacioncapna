import React from 'react'

type Props = {
    companyName: string;
    setCompanyName: React.Dispatch<string>;
    isCommentVisible: boolean;
    setIsCommentVisible: React.Dispatch<boolean>;
    errorMessage: string;
}
const CompanyDonationBox = ({companyName, setCompanyName, isCommentVisible, setIsCommentVisible, errorMessage}: Props) => {

    const handleCheckboxChange = () => {
        setIsCommentVisible(!isCommentVisible); 
        if (!isCommentVisible) {
            setCompanyName('');
        }
    };
    
    const handleCommentChange = (event: string) => {
        setCompanyName(event);
    };

    return (
        <div className='flex flex-col gap-3'>
            <label className='flex gap-1 text-neutral-600'>
                <input
                    type="checkbox"
                    checked={isCommentVisible}
                    onChange={handleCheckboxChange}
                    style={{
                        accentColor: '#898C31',
                    }}
                />
                ¿Esta donación es en nombre de una empresa?
            </label>

            {isCommentVisible && (
                <div>
                    <input
                        type={'text'}
                        value={companyName}
                        onChange={(e) => handleCommentChange(e.target.value)}
                        placeholder="Empresa donante..."
                        className='custom-checkbox w-full border-b border-[#898C31] text-neutral-600'
                    />
                    {errorMessage && errorMessage !== "" && (
                        <div className="text-red-500 font-semibold">
                            {errorMessage}
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default CompanyDonationBox