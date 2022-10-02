import React, { useEffect, useState } from 'react';
export const NumberContext = React.createContext();

const NumberProvider = (props) => {

    const [price, setPrice] = useState('1000000');
    const [deposite, setDeposite] = useState('0');
    const [percent, setPercent] = useState('10');
    const [months, setMonths] = useState('1');
    const [sum, setSum] = useState('0');
    const [payment, setPayment] = useState('');


    useEffect(() => {
        setDeposite(Math.round(`${percent * price / 100}`));
    }, [price, percent])


    return (
        <NumberContext.Provider
            value={{
                price,
                deposite,
                percent,
                months,
                sum,
                payment,
                setPrice,
                setDeposite,
                setPercent,
                setMonths,
                setSum,
                setPayment,
            }}>
            {props.children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;
