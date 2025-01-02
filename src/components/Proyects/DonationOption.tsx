import React, { useEffect, useState } from "react";

type Props = {
    amounts: { amount: number; message: string }[];
    onSelect?: (amount: number) => void;
    selectedCurrency: string;
    error: boolean;
    setError: React.Dispatch<boolean>
};

const DonationOption = ({ amounts, onSelect, selectedCurrency, error, setError}: Props) => {
    const [selected, setSelected] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState<number | null>(null);
    const [currency, setCurrency] = useState("DOP");
    const [convertedAmounts, setConvertedAmounts] = useState(amounts);

    // Tasas de cambio basadas en DOP
    const exchangeRates = {
        DOP: 1,
        USD: 0.01642, // Ejemplo de tasa de cambio (1 DOP = 0.0185 USD)
        EUR: 0.01575, // Ejemplo de tasa de cambio (1 DOP = 0.0157 EUR)
    };

    const handleSelect = (amount: number) => {
        setSelected(amount);
        setCustomAmount(null);
        if (onSelect) {
            onSelect(amount);
        }
    };

    const handleCustomSelect = (amount: string) => {
        const value = parseFloat(amount);
        if (!isNaN(value)) {
            setSelected(null); // Desmarcar las opciones predeterminadas si seleccionan custom
            setCustomAmount(value);
            if (onSelect) {
                onSelect(value);
            }
        }
    };

    useEffect(() => {
        if (selectedCurrency in exchangeRates) {
            setCurrency(selectedCurrency);

            const rate = exchangeRates[selectedCurrency as keyof typeof exchangeRates];
            const updatedAmounts = amounts.map((item) => ({
                ...item,
                amount: Math.round(item.amount * rate),
            }));
            setConvertedAmounts(updatedAmounts);
        }
    }, [selectedCurrency, amounts]);

    return (
        <div>
            {convertedAmounts.map((item, index) => (
                <div key={index} style={{ margin: "10px 0" }}>
                    <div
                        className={`flex gap-3 border p-5 rounded-md cursor-pointer ${selected === item.amount ? "border-[#898C31]" : "border-neutral-200"
                            }`}
                        onClick={() => handleSelect(item.amount)}
                    >
                        <input
                            type="radio"
                            name="donation"
                            value={item.amount}
                            checked={selected === item.amount}
                            onChange={() => handleSelect(item.amount)}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                accentColor: selected === item.amount ? "#898C31" : "initial",
                            }}
                        />
                        <div className="flex flex-col">
                            <p className="font-bold text-neutral-600">{`${currency} $${item.amount}`}</p>
                            <p className="text-xs">{item.message}</p>
                        </div>
                    </div>
                </div>
            ))}
            {/* Opción personalizada */}
            <div style={{ margin: "10px 0" }}>
                <div
                    className={`flex gap-3 border p-5 rounded-md cursor-pointer ${customAmount !== null ? "border-[#898C31]" : "border-neutral-200"
                        }`}
                >
                    <input
                        type="radio"
                        name="donation"
                        value="custom"
                        checked={customAmount !== null}
                        onChange={() => setSelected(null)}
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            accentColor: customAmount !== null ? "#898C31" : "initial",
                        }}
                    />
                    <div className="flex flex-col">
                        <div className="flex gap-1 justify-start items-center w-full">
                            {error ? (
                                <p className="font-bold text-red-500">{currency} $</p>
                            ) :
                                <p className="font-bold text-neutral-600">{currency} $</p>
                            }

                            <input
                                type="number"
                                min={0}
                                className=""
                                placeholder={`Otra cantidad`}
                                value={customAmount || ""}
                                onChange={(e) => handleCustomSelect(e.target.value)}
                            />
                        </div>
                        {error ? (
                            <p className="text-sm text-red-500 font-semibold">Por favor seleccione una cantidad</p>
                        ) :
                            <p className="text-xs">Escriba otro valor</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationOption;
