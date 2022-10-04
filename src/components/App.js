import React from 'react';
import { useContext } from 'react';
import './App.css';
import { NumberContext } from './NumberProvider';
import CalculatorItem from './CalculatorItem';
import ConclusionItem from './ConclusionItem';
import Button from './Button';
import api from '../utils/API';

import { TailSpin } from 'react-loader-spinner';

function App(props) {
  const { price, initial, percent, months, setPrice, setPercent, setMonths, sum, monthPay, isReadonly,
    matchMedia, disabled, setDisabled, btnName, setBtnName } = useContext(NumberContext);

  const handleAddInfo = (description) => {
    api.postInfo(description)
      .then((info) => {
        setBtnName('Оставить заявку');
        setDisabled(false);

      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleSubmit(e) {
    e.preventDefault()

    handleAddInfo({
      price: price,
      initial: initial,
      percent: percent,
      months: months,
      sum: sum,
      monthPay: monthPay
    });

    setDisabled(true);

    setBtnName(<TailSpin
      height="3rem"
      width="3rem"
      color="white"
      ariaLabel="tail-spin-loading"
      radius="1"
      margin="0"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true} />)
  }

  return (
    <div className="container">
      <h2 className="container__heading">Рассчитайте стоимость автомобиля в лизинг</h2>

      <form className="container__content" name="avatar-form" onSubmit={handleSubmit} >

        <CalculatorItem
          title={`${matchMedia ? 'Желаемая сумма кредита' : 'Стоимость автомобиля'}`}
          name='₽' value={price} setValue={setPrice}
          min={1000000} max={6000000} disabled={disabled} mask='9 999 999' />
        <CalculatorItem title='Первоначальный взнос' name='%' value={percent} mask={`${Number(initial) > 999999 ? '9 999 999' :
          Number(initial) < 100000 ? '99 999' : '999 999'}`}
          setValue={setPercent} deposite={initial} min={10} max={60} withAdditionalField={true} readOnly={isReadonly} disabled={disabled}
        />
        <CalculatorItem title='Срок лизинга' name='мес.' value={months} setValue={setMonths} min={1} max={60} disabled={disabled}
          mask={`${Number(months) > 9 ? '99' : '9'}`} />
        <ConclusionItem title='Сумма договора лизинга' name='₽' value={sum} readOnly={isReadonly} />
        <ConclusionItem title='Ежемесячный платеж от' name='₽' value={monthPay} readOnly={isReadonly} />
        <Button disabled={disabled ? true : false} name={btnName} />

      </form>
    </div>
  );
}

export default App;
