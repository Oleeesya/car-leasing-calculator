import React, { useEffect, useState } from 'react';
export const NumberContext = React.createContext();

const NumberProvider = (props) => {

    const [price, setPrice] = useState(1000000);
    const [initial, setInitial] = useState(0);
    const [percent, setPercent] = useState(10);
    const [months, setMonths] = useState(1);
    const [sum, setSum] = useState(1031500);
    const [monthPay, setMonthPay] = useState(931500);

    const [isReadonly, setIsReadonly] = useState(true);

    const [matchMedia, setMatchMedia] = useState(false);

    const [disabled, setDisabled] = useState(false);
    const [isInput, setIsInput] = useState(false);
    const [btnName, setBtnName] = useState('Оставить заявку');

    useEffect(() => {
        setMatchMedia(matchMedia)
    }, [matchMedia]);

    function checkMediaQuery() {
        if (window.innerWidth <= 320) {
            setMatchMedia(true)
        }
        else if (window.innerWidth > 320) {
            setMatchMedia(false)
        }
    }
    window.addEventListener('resize', checkMediaQuery);

    useEffect(() => {
        setInitial(Math.round(`${percent * price / 100}`));
    }, [price, percent])

    useEffect(() => {
        setSum(Math.round(`${initial + months * monthPay}`))
    }, [initial, months, monthPay])

    useEffect(() => {
        setMonthPay(Math.round(`${(price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1))}`));
    }, [initial, price, months])

    return (
        <NumberContext.Provider
            value={{
                price,
                initial,
                percent,
                months,
                sum,
                monthPay,
                isReadonly,
                matchMedia,
                disabled,
                isInput,
                btnName,
                setPrice,
                setInitial,
                setPercent,
                setMonths,
                setSum,
                setMonthPay,
                setIsReadonly,
                setMatchMedia,
                setDisabled,
                setIsInput,
                setBtnName,
            }}>
            {props.children}
        </NumberContext.Provider>
    );
};

export default NumberProvider;
