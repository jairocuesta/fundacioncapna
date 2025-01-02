import React, { useState } from 'react'

type Props = { 
    setSelectedCurrency: React.Dispatch<string>   
}
const SelectCurrency = ({setSelectedCurrency}: Props) => {

    const [moneySelected, setMoneySelected] = useState('Peso Dominicano (DOP)');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleCurrencyChange = (currency:any, value: string) => {
        setSelectedCurrency(currency);
        setMoneySelected(value)
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen((prevState) => !prevState);
    };
    return (
        <div className='custom-select'>
            <div className='currency-dropdown' onClick={toggleDropdown}>
                <span>{moneySelected}</span>
                <i className="fa-duotone fa-solid fa-angle-down"></i>
            </div>
            {dropdownOpen && (
                <div className='custom-options'>
                    <div className='option' onClick={() => handleCurrencyChange('DOP', 'Peso Dominicano (DOP)')}>Peso Dominicano (DOP)</div>
                    <div className='option' onClick={() => handleCurrencyChange('USD', 'Dólar Estadounidense (USD)')}>Dólar Estadounidense (USD)</div>
                    <div className='option' onClick={() => handleCurrencyChange('EUR', 'Euro (EUR)')}>Euro (EUR)</div>
                </div>
            )}
        </div>
    )
}

export default SelectCurrency