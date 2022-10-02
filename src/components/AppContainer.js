import React from 'react';
import CalculatorItem from './CalculatorItem';
import { useContext } from 'react';
import { NumberContext } from './NumberProvider';

function AppContainer(props) {
  const { price, deposite, percent, months, setPrice, setPercent, setMonths } = useContext(NumberContext);



  return (
    <div className="container">
      <h2 className="container__heading">Рассчитайте стоимость автомобиля в лизинг</h2>

      <form className="container__content" name="avatar-form">
        <CalculatorItem title='Стоимость автомобиля' name='₽' value={price} setValue={setPrice}
          min={1000000} max={6000000} />
        <CalculatorItem title='Первоначальный взнос' name='%' value={percent} setValue={setPercent} deposite={deposite}
          min={10} max={60} withAdditionalField={true} />
        <CalculatorItem title='Срок лизинга' name='мес.' value={months} setValue={setMonths}
          min={1} max={60} />
        {/* <CalculatorItem title='Сумма договора лизинга' />
        <CalculatorItem title='Ежемесячный платеж от' /> */}
        <button type="submit" className="container__submit">Сохранить</button>
      </form>
    </div>
  );
}

export default AppContainer;
