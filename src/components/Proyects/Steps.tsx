import React from 'react'

type Props = {
    step: number;
}
const Steps = ({step}: Props) => {
    return (
        <div className='flex justify-center items-center gap-2'>
            <i className={`${step >= 1 ? 'fa-solid' : null} fa-circle text-xs text-[#afa96e]`}></i>
            <i className={`${step >= 2 ? 'fa-solid' : 'fa-regular'} fa-circle text-xs text-[#afa96e]`}></i>
            <i className={`${step === 3 ? 'fa-solid' : 'fa-regular'} fa-circle text-xs text-[#afa96e]`}></i>
            {/* <i className="fa-solid fa-arrow-right text-white opacity-50 text-lg pl-2"></i> */}
        </div>
    )
}

export default Steps